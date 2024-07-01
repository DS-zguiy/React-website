import { ApiProperty } from '@nestjs/swagger';
export class CreateCategoryDto {
  @ApiProperty()
  path: string;

  @ApiProperty()
  label: string;

  @ApiProperty()
  categoryuuid?: string;
}
