import { IsEmail, IsNotEmpty, IsOptional } from "class-validator";

export class UpdateUserDto {
    @IsOptional()
    name?:string;

    @IsEmail()
    @IsOptional()
    email?:string;

    @IsOptional()
    password?:string;


    @IsOptional()
    countryId?:number;
    
}
