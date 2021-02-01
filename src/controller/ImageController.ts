import { response } from 'express';
import {getRepository}from  'typeorm'
import {Image} from  '../entity/Image'


export const getImage = async (request,response)=>{
      const list = await getRepository(Image).find();
      return response.json(list);
}


export const createImage = async (request,reponse)=>{
      const image = await getRepository(Image).save(request.body);
      return response.json(image);
}

