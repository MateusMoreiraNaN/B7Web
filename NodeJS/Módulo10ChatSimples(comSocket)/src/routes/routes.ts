import { Router } from "express";

import * as ControllerChat from '../controller/controller'

const router = Router()

export default router

router.get("/", ControllerChat.Chat)