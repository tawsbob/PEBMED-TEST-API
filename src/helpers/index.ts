import { HttpException, HttpStatus } from '@nestjs/common';

export interface DeletedResult {
    deleted: boolean;
}

export const bad_request = (e)=>(  new HttpException(e.message, HttpStatus.BAD_REQUEST) )