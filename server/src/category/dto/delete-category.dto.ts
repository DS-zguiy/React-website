import { ApiProperty } from '@nestjs/swagger';
export class DeleteCategoryDto {
  @ApiProperty()
  uuid: string;
}
