import {getRepository} from 'typeorm';
import {Product} from '../entity/Product';
import {Request, Response} from 'express';


export const List = async (request: Request, response : Response) =>{
    const list = await getRepository(Product).find();
    return response.json(list);
}




