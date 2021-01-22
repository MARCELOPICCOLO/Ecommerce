import {getRepository} from 'typeorm';
import {Product} from '../entity/Product';
import {request, Request, response, Response} from 'express';
import {uuid} from 'uuidv4';



export const List = async (request: Request, response : Response) =>{
    const list = await getRepository(Product).find();
    return response.json(list);
}

export const Create = async (request: Request, response : Response)=>{
   const product = await getRepository(Product).save(request.body);
   response.json(product); 
}

export const Update = async (request: Request, response: Response)=>{
    const {id} = request.params;
    const product = await getRepository(Product).update(id, request.body);

    if(product.affected===1){
        const productUpdated = await getRepository(Product).findOne(id);
        return response.json(productUpdated);
    }
    return response.status(404).json('product not found');
}

export const Delete = async (request: Request, response: Response)=>{
    const {id} = request.params;
    const product = await getRepository(Product).delete(id);

    if(product.affected===1){
        const res = await getRepository(Product).findOne(id);
        return response.json('Product removed'); 
    }

    return response.status(404).json('product not found');
}


