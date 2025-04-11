import { IsOptional } from 'class-validator';

export class UpdateCountryDto {
  @IsOptional()
  name: string;

  @IsOptional()
  continent: string;
}



