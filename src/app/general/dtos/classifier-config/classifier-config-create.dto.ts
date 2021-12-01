import {IsNotEmpty, IsNumber, IsString, Min} from 'class-validator';

export class ClassifierConfigCreateDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @Min(1)
  trainingSetSize: number;
}