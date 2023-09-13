import { CreateChargeDto } from '@app/common';
import { Type } from 'class-transformer';
import {
  IsDateString,
  IsDefined,
  IsNotEmpty,
  ValidateNested,
} from 'class-validator';

export class CreateReservationDto {
  @IsDateString()
  start_date: Date;

  @IsDateString()
  end_date: Date;

  @IsDefined()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CreateChargeDto)
  charge: CreateChargeDto;
}
