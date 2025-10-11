import AuthService from "./auth.service";
import { Router } from "express";
import { isValid } from "../../middleware";
import * as authValidation from "./auth.validation";
const router = Router()

router.post("/register", isValid(authValidation.registerSchema), AuthService.register)

export default router
