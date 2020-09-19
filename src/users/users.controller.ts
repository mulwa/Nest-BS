import { UsersService } from './users.service';
import { Body, Controller, Delete, Get, HttpException, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserDTO } from './user.dto';

@Controller('users')
export class UsersController {
    constructor(private userService:UsersService){}

    @Get()
    getUser(){
        return this.userService.showAll();
    }
    @Post()
    @UsePipes(ValidationPipe)
    createUser(@Body() user:UserDTO){
        return this.userService.createUser(user);
    }

    @Get(':id')
    readUser(@Param('id') id:string){
        return this.userService.getUser(id);
    }
    @Put(':id')
    updateUser(@Param('id') id:string, @Body() user:Partial<UserDTO>){
        this.userService.update(id,user);
    }

    @Delete(':id')
    deleteUser(@Param('id') id:string){
        this.userService.destrory(id);
    }
     
}
