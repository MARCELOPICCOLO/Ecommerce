import { json, request, response } from 'express'
import {getRepository} from 'typeorm'
import { isUuid } from 'uuidv4';
import { Product } from '../entity/Product'


export const getProducts = async (request, response)=>{
    const {filter} = request.query
    if(filter){
        const list = await getRepository(Product)
        .createQueryBuilder("products")
        .select(["products.name", "categories.id"])
        .innerJoin("products.category", "categories")
        .where("categories.id = :filter", { filter })
        .getMany();
        
        return response.json(list);
    }
    else{
        const list = await getRepository(Product).find();
        return response.json(list);
    }
}

export const createProduct = async (request, response)=>{
    const newProduct = await getRepository(Product).save(request.body);
    return response.json(newProduct);
}

export const updateProduct = async (request, response)=>{
    const {id} = request.params;
    if(isUuid(id)){
        const query = await getRepository(Product).update(id, request.body);

        if(query.affected ===1){
            const productUpdated = await getRepository(Product).findOne(id);
            return response.json(productUpdated);
        }

    }

    return response.status(404).json('Product not found');

}


export const deleteProduct = async (request, response) =>{
    const {id} = request.params;
    if(isUuid(id)){
        const query = await getRepository(Product).delete(id);

        if(query.affected === 1 ){
            return response.json('produtc deleted');
        }

    }

    return response.status(404).json('Product not found');
   
}

