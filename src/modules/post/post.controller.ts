import { Router } from "express";
import { isAuthenticated } from "../../middleware";
import PostService from "./post.service";

const router = Router()

router.post("/createPost", isAuthenticated(), PostService.createPost)
router.patch("/reactToPost/:id", isAuthenticated(), PostService.reactToPost)
export default router
    