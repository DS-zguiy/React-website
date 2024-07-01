import { ApiProperty } from '@nestjs/swagger';

export class CreateContentDto {
  @ApiProperty()
  path: string;

  @ApiProperty()
  label: string;

  @ApiProperty()
  parentuuid: string;
  //略缩图
  @ApiProperty()
  thumb: string;
  //描述
  @ApiProperty()
  describe: string;
}
