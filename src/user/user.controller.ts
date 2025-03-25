import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Post()
    async create(@Body() data:UserDto){
        return await this.userService.create(data);
    }

    @Get()
    async findAll(){
        return await this.userService.findAll();
    }

    @Put(":id")
    async update(@Param("id") id: number, @Body() data: UserDto){
        return this.userService.update(Number(id), data)
    }

    @Delete(":id")
    async delete(@Param("id") id: number){
        return this.userService.delete(Number(id))
    }

    @Get(":id")
    async findById(@Param("id") id: number){
        return this.userService.findById(Number(id))
    }

}
