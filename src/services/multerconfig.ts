import { request } from 'express'
import * as multer from 'multer'
import {uuid} from 'uuidv4'


const storage = multer.diskStorage({
    destination: 'tmp/',
    filename : (request, file, cb) =>{
        const fileName = `${Date.now()}-${file.originalname}`;
        cb(null,fileName)

        return cb(null, fileName);
    }
})

export const upload = multer({storage: storage});


