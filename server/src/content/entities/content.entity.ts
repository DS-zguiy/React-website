import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Content {
  @PrimaryGeneratedColumn()
  id: number;
  //文件id
  @Column({ type: 'varchar' })
  uuid: string;
  //前端文件名
  @Column({ type: 'varchar' })
  path: string;
  //大小
  @Column({ type: 'varchar' })
  label: string;
  //大小
  @Column({ type: 'varchar' })
  parentuuid: string;
  //略缩图
  @Column({ type: 'varchar' })
  thumb: string;
  //描述
  @Column({ type: 'varchar' })
  describe: string;
  //逻辑删除
  @Column({ type: 'int' })
  delete: number;
}
