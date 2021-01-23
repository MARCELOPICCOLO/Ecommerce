import {getRepository, getTreeRepository} from 'typeorm'
import {request, Request, response, Response} from 'express'
import {Category} from '../entity/Category'


export const getCategories = async (request: Request, response: Response)=>{
    const list = await getRepository(Category).find();
    return response.json(list);
}

export const createCategory = async (request: Request, response: Response)=>{
    const create = await getRepository(Category).save(request.body);
    response.json(create);
}

export const updateCategory = async (request: Request, response: Response)=>{
    const {id} = request.params
    const cat = await getRepository(Category).update(id, request.body);

    if(cat.affected===1){
        const category = await getRepository(Category).findOne(id);
        return response.json(category);
    }

    return response.status(404).json('category not found');
}

export const deleteCategory = async (request: Request, response : Response)=>{
    const {id} = request.params;
    const cat = await getRepository(Category).delete(id);

    if(cat.affected===1){
        const deleted = await getRepository(Category).findOne(id);
        return response.json('category removed');
    }

    return response.status(404).json('category not found');
}
