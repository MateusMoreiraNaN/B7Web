import { Router } from "express";
import * as pingController from '../controllers/imagesController'
import multer from "multer";


const storageConfig = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './tmp')
    },
    filename: (req,file, cb) => {
        let randomName = Math.floor(Math.random() * 99999999999999)
        cb(null, `${randomName+Date.now()}.jpg`)
    }
})


const upload = multer({
    //dest: './tmp',
    //storage: multer.memoryStorage,
    storage: storageConfig
})


const uploadimage = multer({
    dest: './tpm',
    fileFilter: (req, file, cb) =>{
        const allowed: string[] = ['image/jpg', 'image/jpeg', 'image/png']

        console.log('Informações', file);

        if(allowed.includes( file.mimetype )){
            cb(null, true)
        }else{
            cb(null, false)
        }

        
        
    },
    limits:{
        fieldSize: 2000000
    },
    storage: storageConfig
})


const router = Router()

router.post('/upload', upload.single('avatar'), pingController.upload)
router.post('/uploadFiles', upload.fields([{name: 'zip', maxCount: 3},{name: 'user'}]), pingController.uploadFiles)
router.post('/uploadImage',uploadimage.single('image'), pingController.uploadImage)







export default router