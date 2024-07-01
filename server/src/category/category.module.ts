import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { SubCategory } from './entities/subcategory.entity';
import { ContentModule } from 'src/content/content.module';

@Module({
  imports: [TypeOrmModule.forFeature([Category, SubCategory]), ContentModule],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
