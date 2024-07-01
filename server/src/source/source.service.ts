import { Inject, Injectable } from '@nestjs/common';
import { existsSync, promises } from 'fs';
import { join } from 'path';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Source } from './entities/source.entity';
import Config from 'src/config/config';
import { v4 as uuidv4 } from 'uuid';
import { resultError, resultSuccess } from 'api/Result';
import { DeleteSourceDto } from './dto/delete-source.dto';
import { QuerySourceDto } from './dto/query-source.dto';
@Injectable()
export class SourceService {
  constructor(
    @InjectRepository(Source)
    private repository: Repository<Source>,
    @Inject(Config.KEY) private readonly config: ConfigType,
  ) {}

  generateFileName(originalName: string) {
    const uuid = uuidv4();

    const strArr = originalName.split('.');

    const suffix = strArr[1].toLowerCase();

    const name = decodeURIComponent(strArr[0]);

    return { name: name, uuid: uuid, suffix: suffix };
  }

  //上传
  async upload(params: any) {
    const { files } = params;
    const results = [];

    for (const file of files) {
      const { uuid, name, suffix } = this.generateFileName(file.originalname);
      const path = join(__dirname, this.config.public, this.config.sourcedir);
      const filepath = join(path, uuid + '.' + suffix);
      const url =
        this.config.url + this.config.sourcedir + '/' + uuid + '.' + suffix;

      const currentDate = new Date();

      try {
        if (!existsSync(path)) {
          await promises.mkdir(path, { recursive: true });
        }
        await promises.writeFile(filepath, file.buffer);
        const size = ~~(file.size / 1024); // 位运算，取整
        const sql = {
          name: name,
          uuid: uuid,
          filename: uuid,
          size,
          url: url,
          suffix: suffix,
          projectid: 0,
          state: 0,
          date: currentDate.toISOString(),
          delete: 0,
        };
        await this.repository.insert(sql);
        await this.uploadState({ uuid: uuid, state: 1 });
        results.push(resultSuccess(sql, '上传成功'));
      } catch (error) {
        await this.uploadState({ uuid: uuid, state: 0 });
        results.push(resultError('上传失败'));
      }
    }
    return results;
  }

  //上传完更新状态
  async uploadState(body) {
    const { uuid, state } = body;
    try {
      // const sql = { uuid: uuid };
      const result = await this.repository.update(
        { uuid: uuid },
        { state: state },
      );
      return resultSuccess(result, '修改成功');
    } catch (error) {
      return resultError('修改失败');
    }
  }

  //逻辑删除
  async delete(body: DeleteSourceDto) {
    const { uuid } = body;
    console.log(uuid);
    try {
      const sql = { delete: 1 };

      const result = await this.repository.update({ uuid: uuid }, sql);
      return resultSuccess(result, '删除成功');
    } catch (error) {
      return resultError('删除失败');
    }
  }
  //查询单个
  async query(body: QuerySourceDto) {
    const { uuid } = body;
    try {
      const sql = { where: { uuid: uuid } };
      const result = await this.repository.find(sql);
      return resultSuccess(result, '查询成功');
    } catch (error) {
      return resultError('查询失败');
    }
  }

  //查询全部
  async queryAll() {
    try {
      const sql = { where: { delete: 0 } };
      const allRecords = await this.repository.find(sql);
      return resultSuccess(allRecords, '查询成功');
    } catch (error) {
      return resultError('查询失败');
    }
  }

  //更新单条数据
  async update(body: any) {
    const { uuid, params } = body;
    try {
      console.log(2, params);
      // const sql = { uuid: uuid };
      const result = await this.repository.update(
        { uuid: uuid },
        { ...params },
      );
      return resultSuccess(result, '修改成功');
    } catch (error) {
      return resultError('修改失败');
    }
  }
}
