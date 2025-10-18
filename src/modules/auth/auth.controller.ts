import AuthService from "./auth.service";
import { Router } from "express";
import { isValid } from "../../middleware";
import * as authValidation from "./auth.validation";
import { isAuthenticated } from "../../middleware/auth.middlewere";
const router = Router()

router.post("/register", isValid(authValidation.registerSchema), AuthService.register)

router.post("/verify-account", isAuthenticated(), AuthService.verifyAccount)

router.post("/login", isValid(authValidation.loginSchema), AuthService.login)

export default router
