import {
  Controller,
  Body,
  Post,
  Get,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { SourceService } from './source.service';
import { FilesInterceptor } from '@nestjs/platform-express';
import { DeleteSourceDto } from './dto/delete-source.dto';
import { QuerySourceDto } from './dto/query-source.dto';

@Controller('source')
export class SourceController {
  constructor(private readonly sourceService: SourceService) {}

  @Post('upload')
  @UseInterceptors(FilesInterceptor('files'))
  upload(@Body() body, @UploadedFiles() files) {
    return this.sourceService.upload({ files, body });
  }

  @Post('delete')
  delete(@Body() body: DeleteSourceDto) {
    console.log(body);
    return this.sourceService.delete(body);
  }

  @Post('query')
  query(@Body() body: QuerySourceDto) {
    console.log(body);
    return this.sourceService.query(body);
  }

  @Get('queryall')
  quaryAll() {
    return this.sourceService.queryAll();
  }

  @Post('update')
  update(@Body() body: any) {
    console.log(1, body);
    return this.sourceService.update(body);
  }
}
