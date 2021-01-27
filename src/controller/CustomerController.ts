import {getRepository} from 'typeorm'
import { isUuid } from 'uuidv4';
import { Customer } from '../entity/Customer'


export const getCustomers = async (req, res)=>{ 
    const list = await getRepository(Customer).find();
    return res.json(list);
}

export const createCustomer = async (req, res)=>{
    const newCustomer = await getRepository(Customer).save(req.body);
    res.json(newCustomer);
}

export const updateCostumer = async (req, res)=>{
    const {id} = req.params;
    if(isUuid(id)){
        const customer = await getRepository(Customer).update(id, req.body);

        if(customer.affected ===1){
            const customerUpdated = await getRepository(Customer).findOne(id);
            return res.json(customerUpdated);
        }
    }
    
    return res.status(404).json('Customers not found');
    
}


export const deleteCustomer = async (req, res)=>{
    const {id} = req.params;
    if(isUuid(id)){
        const item = await getRepository(Customer).delete(id)
    
        if (item.affected===1){
            return res.json('usuario deleted');
        }
    }   
    return res.status(404).json('Customer not found');
}