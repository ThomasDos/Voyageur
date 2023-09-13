import { CreateChargeDto } from '@app/common';
import { Type } from 'class-transformer';
import {
  IsDateString,
  IsDefined,
  IsNotEmpty,
  IsString,
  ValidateNested,
} from 'class-validator';

export class CreateReservationDto {
  @IsDateString()
  start_date: Date;

  @IsDateString()
  end_date: Date;

  @IsString()
  @IsNotEmpty()
  place_id: string;

  @IsString()
  @IsNotEmpty()
  invoice_id: string;

  @IsDefined()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CreateChargeDto)
  charge: CreateChargeDto;
}
