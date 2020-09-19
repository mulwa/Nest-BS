import { UserDTO } from './user.dto';
import { UserEntity } from './user.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
    constructor( @InjectRepository(UserEntity) private userRepository:Repository<UserEntity>){}

   async showAll(){
       return await this.userRepository.find();
    }
    async createUser(data:UserDTO){
        let user = await this.userRepository.create(data);
        await this.userRepository.save(user);
        return user; 
    }
 
    async getUser(userId:string){
        let user =  await this.userRepository.findOne({where:{id:userId}});
        if(!user){
            throw new NotFoundException(`User with id ${userId} not found`)

        }
        return user;
    }

    async update(id,data:Partial<UserDTO>){
        await this.userRepository.update({id},data);
    } 

    async destrory(id ){
        await this.userRepository.delete({id});
        return { deleted: true}
    }

}
