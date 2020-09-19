import { from } from "rxjs";
import {IsNotEmpty} from 'class-validator';
export class UserDTO{
     @IsNotEmpty()
     firstname:string;
     @IsNotEmpty()
     surname:string;

     @IsNotEmpty()
     idNumber:string;

     @IsNotEmpty()
     mobileNumber:string;
     emailAddress:string;

     @IsNotEmpty()
     county:string;

     @IsNotEmpty()
     location:string;
}