import { Controller, Get, Post, Body } from '@nestjs/common';
import { ContentService } from './content.service';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateContentDto } from './dto/create-content.dto';
import { DeleteContentDto } from './dto/delete-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';
@ApiTags('content')
@Controller('content')
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  @Post('create')
  @ApiOperation({ summary: '创建子元素' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiBody({
    description: 'The input parameters for creating an example',
    type: CreateContentDto, // 这里使用一个DTO（数据传输对象）来定义参数
  })
  create(@Body() body) {
    return this.contentService.create(body);
  }

  @Post('delete')
  @ApiOperation({ summary: '删除子元素' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiBody({
    description: 'The input parameters for creating an example',
    type: DeleteContentDto, // 这里使用一个DTO（数据传输对象）来定义参数
  })
  delete(@Body() body) {
    console.log(body);
    return this.contentService.delete(body);
  }

  @Post('update')
  @ApiOperation({ summary: '更改子元素信息' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiBody({
    description: 'The input parameters for creating an example',
    type: UpdateContentDto, // 这里使用一个DTO（数据传输对象）来定义参数
  })
  update(@Body() body) {
    return this.contentService.update(body);
  }

  @Get('queryall')
  @ApiOperation({ summary: '查询子全部元素全部' })
  quaryAll() {
    return this.contentService.quaryAll();
  }
}
