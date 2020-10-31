import { HttpException, HttpStatus } from '@nestjs/common';
import { Connection } from 'typeorm';

export interface DeletedResult {
    deleted: boolean;
}

export const bad_request = (e)=>{
    console.error(e)
    return new HttpException(e.message, HttpStatus.BAD_REQUEST)
}

export const ProviderConfig = ({ provide, repo })=>({
    provide,
    useFactory: (connection: Connection) => connection.getRepository(repo),
    inject: ['DATABASE_CONNECTION'],
})
