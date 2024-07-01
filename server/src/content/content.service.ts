import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Config from 'src/config/config';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { resultError, resultSuccess } from 'api/Result';
import { Content } from './entities/content.entity';

@Injectable()
export class ContentService {
  constructor(
    @InjectRepository(Content)
    private repository: Repository<Content>,
    @Inject(Config.KEY) private readonly config: ConfigType,
  ) {}
  //增加
  async create(body: any) {
    // const { parentuuid, path, label, thumb, describe } = body;
    const sql = {
      uuid: uuidv4(),
      ...body,
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
  async delete(body: any) {
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
  async update(body: any) {
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
  async quaryAll() {
    try {
      const sql = { where: { delete: 0 } };
      const allRecords = await this.repository.find(sql);
      return resultSuccess(allRecords, '查询成功');
    } catch (error) {
      return resultError('查询失败');
    }
  }
  //查询
  async FindAll() {
    const sql = { where: { delete: 0 } };
    return await this.repository.find(sql);
  }
}
