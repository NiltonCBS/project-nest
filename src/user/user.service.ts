import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class UserService {

    constructor (private prisma: PrismaService){}
    async create (data: UserDto) {
        const user = await this.prisma.user.create({
            data
        });

        return user;
    }

    async findAll(){
        return await this.prisma.user.findMany();
    }

    async update(id: number, data: UserDto) {
        const userExists = await this.prisma.user.findUnique({
            where: {id},
        });

        if(!userExists){
            throw new Error('User não encontrado');
        }

        return await this.prisma.user.update({
            data,
            where: {id},
        })
    }

    async delete(id:number) {
        const userExists = await this.prisma.user.findUnique({
            where: {id},
        });

        if(!userExists){
            throw new Error('User não encontrado');
        }

        return await this.prisma.user.delete({
            where: {id},
        });
    }

    async findById(id: number){
        const userExists = await this.prisma.user.findUnique({
            where: {id},
        });

        if(!userExists){
            throw new Error('User não encontrado');
        }

        return userExists;
    }
}
