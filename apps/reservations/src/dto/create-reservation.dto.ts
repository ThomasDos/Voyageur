import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

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
}
