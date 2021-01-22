import {getRepository} from 'typeorm';
import {Product} from '../entity/Product';
import {Request, Response} from 'express';
import {uuid} from 'uuidv4';



export const List = async (request: Request, response : Response) =>{
    const list = await getRepository(Product).find();
    return response.json(list);
}

export const Create = async (request: Request, response : Response)=>{
   const product = await getRepository(Product).save(request.body);
   response.json(product); 
}



