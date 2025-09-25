import {
  IsString,
  IsInt,
  Min,
  IsDateString,
  IsArray,
  IsNumber,
} from 'class-validator';

export class CreateEventDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsDateString()
  date: string;

  @IsString()
  location: string;

  @IsInt()
  capacity: number;

  @Min(0)
  @IsNumber()
  price: number;

  @IsArray()
  @IsString({ each: true })
  convenant: string[];
}
