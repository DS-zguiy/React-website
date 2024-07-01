import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Config from 'src/config/config';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Category } from './entities/category.entity';
import { resultError, resultSuccess } from 'api/Result';
import { SubCategory } from './entities/subcategory.entity';
import { buildArr, buildItems, buildTree } from 'utils/Tools';
import { ContentService } from 'src/content/content.service';
@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private repository: Repository<Category>,
    @InjectRepository(SubCategory)
    private subRepository: Repository<SubCategory>,
    @Inject(Config.KEY) private readonly config: ConfigType,
    private contentService: ContentService,
  ) {}
  //增加
  async createCategory(body: any) {
    const { path, label } = body;
    const sql = {
      uuid: uuidv4(),
      path: path,
      label: label,
      delete: 0,
    };

    try {
      await this.repository.insert(sql);
      return resultSuccess(sql, '创建成功');
    } catch (error) {
      return resultError('创建失败');
    }
  }
  //删除
  async deleteCategory(body: any) {
    const { uuid } = body;
    try {
      const sql = { delete: 1 };

      const result = await this.repository.update({ uuid: uuid }, sql);
      return resultSuccess(result, '删除成功');
    } catch (error) {
      return resultError('删除失败');
    }
  }

  //编辑
  async updateCategory(body: any) {
    const { uuid, params } = body;
    try {
      const result = await this.repository.update(
        { uuid: uuid },
        { ...params },
      );
      return resultSuccess(result, '修改成功');
    } catch (error) {
      return resultError('修改失败');
    }
  }

  //查询
  async queryCategoryAll() {
    try {
      const sql = { where: { delete: 0 } };
      const allRecords = await this.repository.find(sql);
      return resultSuccess(allRecords, '查询成功');
    } catch (error) {
      return resultError('查询失败');
    }
  }

  //增加子元素
  async createSubCategory(body: any) {
    const { categoryuuid, path, label } = body;
    const sql = {
      uuid: uuidv4(),
      path: path,
      label: label,
      delete: 0,
    };

    try {
      //判断传递的category的uuid是否为空
      if (categoryuuid) {
        const parent = await this.repository.findOne({
          where: { uuid: categoryuuid },
        });
        //判断传递的category是否存在
        if (parent) {
          //如果存在则添加子级
          const result = await this.subRepository.save({
            ...sql,
            uuid: categoryuuid,
          });
          return resultSuccess(result, '创建成功');
        } else {
          return resultError('父节点不存在');
        }
      } else {
        const result = await this.repository.save(sql);
        return resultSuccess(result, '创建成功');
      }
    } catch (error) {
      return resultError('创建失败');
    }
  }

  async getTreeStructure(): Promise<any> {
    const rootNodes = await this.repository.find({ where: { delete: 0 } }); // 假设根节点的 path 为空
    const childrenNodes = await this.subRepository.find({
      where: { delete: 0 },
    }); // 假设根节点的 path 为空
    const contentresult = await this.contentService.FindAll();
    const tree = await buildTree(rootNodes, childrenNodes);
    const arr = await buildArr(tree);
    const items = await buildItems(arr, contentresult);
    // console.log({
    //   code: 200,
    //   result: items,
    //   message: 'ok',
    // });
    // console.log(items);
    // return {
    //   code: 200,
    //   result: items,
    //   message: 'ok',
    //   type: 'success',
    // };

    return resultSuccess(items, '查询成功');
  }
}
