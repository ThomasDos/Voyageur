import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class CreateReservationDto {
  @IsDate()
  start_date: Date;

  @IsDate()
  end_date: Date;

  @IsString()
  @IsNotEmpty()
  place_id: string;

  @IsString()
  @IsNotEmpty()
  invoice_id: string;
}
