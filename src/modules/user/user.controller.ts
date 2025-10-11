import {Router} from "express";
import userService from "./user.service";
const router = Router();


router.get("/profile/:id", userService.getProfile )

















export default router;