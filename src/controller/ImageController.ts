import {initClient_} from '../services/googleApi';


export const uploadImage = async (request, response)=>{

    const {fileName, filePath} = request.body;
    try{
        await initClient_(filePath, fileName)
        //gravar no banco

        return response.json({message: 'passou por toda as etapas'});
        
    }catch(err){
        console.log(err);
    }
    
}