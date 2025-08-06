import { Router } from "express";

import {
    getBooksController,
    getBookByIdController,
    addBookController,
    updateBookController,
    deleteBookController
} from "../controllers/books.controller.js";

const booksRouter = Router();

booksRouter.get("/", getBooksController);
booksRouter.get("/:id", getBookByIdController);
booksRouter.post("/", addBookController);
booksRouter.put("/:id", updateBookController);
booksRouter.delete("/:id", deleteBookController);


export default booksRouter;