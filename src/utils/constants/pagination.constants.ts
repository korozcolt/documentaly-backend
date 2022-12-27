import {
  IsIn,
  IsNumberString,
  IsOptional,
  IsString,
  Matches,
} from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export const sortTypes = ['DESC', 'ASC'];
const pageSizes = ['10', '25', '50'];

const startDate = '2018-01-01';

export const firstMinute = '00:00:00';
export const lastMinute = '23:59:59';

export const offset = `OFFSET :offset`;
export const limit = `LIMIT :limit`;

export class PaginationDto {
  @ApiProperty({ default: startDate })
  @IsOptional()
  @Matches(/^\d{4}\-\d{1,2}\-\d{1,2}$/, {
    message: 'Should be format YYYY-(MM|M)-(DD|D)',
  })
  startDate?: string = startDate;

  @ApiProperty({ default: new Date().toISOString().split('T')[0] })
  @IsOptional()
  @Matches(/^\d{4}\-\d{1,2}\-\d{1,2}$/, {
    message: 'Should be format YYYY-(MM|M)-(DD|D)',
  })
  endDate?: string = new Date().toISOString().split('T')[0];

  @ApiProperty({ enum: sortTypes, default: sortTypes[0] })
  @IsOptional()
  @IsIn(sortTypes)
  sortType?: string = sortTypes[0];

  @ApiProperty({ default: '1' })
  @IsOptional()
  @IsNumberString()
  page?: string = '1';

  @ApiProperty({ enum: pageSizes, default: pageSizes[0] })
  @IsOptional()
  @IsIn(pageSizes)
  pageSize?: string = pageSizes[0];

  @ApiProperty()
  @IsOptional()
  @IsString()
  search?: string = '';
}
