import {initClient_} from '../services/googleApi';

export const uploadImage = async (request, response)=>{

    
    const {originalname, path } = request.file
    console.log(originalname, path);

        try{
            await initClient_(path, originalname)
            //gravar no banco

            return response.json({message: 'passou por toda as etapas'});
            
        }catch(err){
            console.log(err);
        }
    
}