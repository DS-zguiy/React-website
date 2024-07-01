import { Controller, Get, Post, Body } from '@nestjs/common';
import { CategoryService } from './category.service';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateCategoryDto } from './dto/create-category.dto';
import { DeleteCategoryDto } from './dto/delete-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
@ApiTags('category')
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post('createCategory')
  @ApiOperation({ summary: '创建分类' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiBody({
    description: 'The input parameters for creating an example',
    type: CreateCategoryDto, // 这里使用一个DTO（数据传输对象）来定义参数
  })
  createCategory(@Body() body) {
    return this.categoryService.createSubCategory(body);
  }

  @Post('deleteCategory')
  @ApiOperation({ summary: '删除分类' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiBody({
    description: 'The input parameters for creating an example',
    type: DeleteCategoryDto, // 这里使用一个DTO（数据传输对象）来定义参数
  })
  deleteCategory(@Body() body) {
    console.log(body);
    return this.categoryService.deleteCategory(body);
  }

  @Post('updateCategory')
  @ApiOperation({ summary: '更改分类信息' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiBody({
    description: 'The input parameters for creating an example',
    type: UpdateCategoryDto, // 这里使用一个DTO（数据传输对象）来定义参数
  })
  updateCategory(@Body() body) {
    return this.categoryService.updateCategory(body);
  }

  @Get('queryCategoryAll')
  @ApiOperation({ summary: '查询分类全部内容' })
  queryCategoryAll() {
    return this.categoryService.getTreeStructure();
  }
}
