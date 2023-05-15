import { Router } from "express";
import * as pingController from '../controllers/imagesController'
import multer from "multer";

const upload = multer({
    dest: './tpm'
})

const router = Router()

router.post('/upload', upload.single('avatar'), pingController.upload)
router.post('/uploadFiles', upload.fields(
    [ 
    {name: 'zip', maxCount: 3},
    {name: 'avatar'}
]), pingController.uploadFiles)






export default router