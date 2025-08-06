import { Router } from "express";
import Post from "../db/Post.js";

const postsRouter = Router();

postsRouter.get("/", async (req, res) => {
  const post = await Post.findAll();
  res.json(post);
});

export default postsRouter;
