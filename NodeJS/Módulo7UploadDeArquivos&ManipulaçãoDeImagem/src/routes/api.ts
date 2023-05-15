import { Router } from "express";
import * as pingController from '../controllers/imagesController'
import multer from "multer";

const upload = multer({
    dest: './tpm'
})

const router = Router()

router.post('/upload', upload.single('mr.robot'), pingController.upload)






export default router