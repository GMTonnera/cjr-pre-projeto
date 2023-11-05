import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class DbService extends PrismaClient{
    constructor(){
        super({
            datasources: {
                db:{
                    url: "postgresql://gustavo2:senha1234@localhost:5432/pre-projeto?schema=public"
                },
            },
        })
    }
}
