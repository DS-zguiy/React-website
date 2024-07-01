import { ApiProperty } from '@nestjs/swagger';

export class DeleteContentDto {
  @ApiProperty()
  uuid: string;
}
