import {IsNumber, IsOptional, Min} from 'class-validator';

export class DataClassifyDto {
  @IsNumber()
  @Min(0)
  @IsOptional()
  C6H6: number | null;

  @IsNumber()
  @Min(0)
  @IsOptional()
  CO: number | null;

  @IsNumber()
  @Min(0)
  @IsOptional()
  NO2: number | null;

  @IsNumber()
  @Min(0)
  @IsOptional()
  O3: number | null;

  @IsNumber()
  @Min(0)
  @IsOptional()
  PM10: number | null;

  @IsNumber()
  @Min(0)
  @IsOptional()
  PM25: number | null;

  @IsNumber()
  @Min(0)
  @IsOptional()
  SO2: number | null;
}