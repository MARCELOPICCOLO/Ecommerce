import { request, response } from 'express'
import {getRepository} from 'typeorm'
import { isUuid, uuid } from 'uuidv4'
import {OrderProduct} from '../entity/OrderProduct'
import { Product } from '../entity/Product'

export const getOrdersProducts = async (request, response)=>{
    const list = await getRepository(OrderProduct).find();
    return response.json(list);
}

export const createOrderProduct = async (request, response)=>{
    const orderProduct = await getRepository(OrderProduct).save(request.body);
    return response.json(orderProduct);
}

export const updateOrderProduct = async (request, response) =>{
    const {product_id, order_id} = request.params;
    const {price, quantify} = request.body;

    if(isUuid(product_id) && isUuid(order_id)){
        const query = await getRepository(OrderProduct)
        .createQueryBuilder()
        .update(OrderProduct)
        .set({ price, quantify })
        .where("product_id = :id and order_id = :id2", { id: product_id, id2: order_id})
        .execute();
    
        if(query.affected===1){
            const orderAtualized = await getRepository(OrderProduct)
            .createQueryBuilder('order')
            .select('order')
            .where('product_id= :id and order.order_id = :id2',{id:product_id, id2: order_id})
            .getOne();
          
            return response.json(orderAtualized);
        }

    } 
    return response.status(404).json('Order product not found');
}