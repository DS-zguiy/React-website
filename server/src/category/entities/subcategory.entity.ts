import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class SubCategory {
  @PrimaryGeneratedColumn()
  id: string;
  //文件id
  @Column({ type: 'varchar' })
  uuid: string;
  //前端文件名
  @Column({ type: 'varchar' })
  path: string;
  //大小
  @Column({ type: 'varchar' })
  label: string;
  //逻辑删除
  @Column({ type: 'int' })
  delete: number;
  //大小
  @Column({ type: 'varchar' })
  categoryuuid: string;
}
