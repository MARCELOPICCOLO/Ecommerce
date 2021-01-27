import { request, response } from 'express'
import{getRepository, createQueryBuilder} from 'typeorm'
import { Order } from '../entity/Order'

export const getOrders = async (request, response)=>{ 
        const orders = await getRepository(Order).find();
        return response.json(orders);
}

export const createOrder = async (request, response)=>{
    const order = await getRepository(Order).save(request.body);
    return response.json(order);
}

export const getOrder = async (request, response) =>{
    const {id} = request.query;
    const item = await getRepository(Order).
    createQueryBuilder("order")
    .innerJoin("order.customer", "customers") 
    .where("customers.id = :id", {id}) 
    .getMany();
    return response.json(item);
}