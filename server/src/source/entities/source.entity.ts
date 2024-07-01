import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Source {
  //文件id
  @PrimaryGeneratedColumn()
  id: number;

  //uuid
  @Column({ type: 'varchar' })
  uuid: string;

  //前端文件名
  @Column({ type: 'varchar' })
  name: string;
  //大小
  @Column({ type: 'int' })
  size: number;
  //本地文件名
  @Column({ type: 'varchar' })
  filename: string;
  //文件地址
  @Column({ type: 'varchar' })
  url: string;

  //文件类型
  @Column({ type: 'varchar' })
  suffix: string;

  //上传日期
  @Column({ type: 'datetime' })
  time: string;

  //逻辑删除
  @Column({ type: 'int' })
  delete: number;

  //上传状态
  @Column({ type: 'int' })
  state: number;

  //关联项目id
  @Column({ type: 'int' })
  projectid: number;
}
