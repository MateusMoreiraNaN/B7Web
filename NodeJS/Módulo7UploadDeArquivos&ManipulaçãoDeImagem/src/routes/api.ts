import { Router } from "express";
import * as pingController from '../controllers/imagesController'
import multer from "multer";

const storageConfig = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './tpm')
    },
    filename: (req,file, cb) => {
        let randomName = Math.floor(Math.random() * 999999999999999999)
        cb(null, `${randomName+Date.now()}.jpg`)
    }
})

const upload = multer({
    //dest: './tpm'
    //storage: multer.memoryStorage,
    storage: storageConfig
})

const router = Router()

router.post('/upload', upload.single('avatar'), pingController.upload)
router.post('/uploadFiles', upload.fields(
    [ 
    {name: 'zip', maxCount: 3},
    {name: 'avatar'}
]), pingController.uploadFiles)






export default router