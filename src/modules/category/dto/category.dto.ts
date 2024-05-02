import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}

export class UpdateCategoryDto {
  @IsNotEmpty()
  @IsOptional()
  @IsString()
  name?: string;
}
