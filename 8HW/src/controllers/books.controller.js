import * as booksService from "../services/books.service.js";

import validateBode from "../utils/validateBode.js";
import HttpExeption from "../utils/HttpExeption.js";

import { bookAddSchema, bookUpdateSchema } from "../validation/book.schema.js";

export const getBooksController = async (req, res) => {
    const result = await booksService.getBooks();

    res.json(result);
};

export const getBookByIdController = async (req, res) => {
    const { id } = req.params;
    const result = await booksService.getBookById(id);

    if (!result) throw HttpExeption(404, `Book with id=${id} not found`);

    res.json(result);
};

export const addBookController = async (req, res) => {
    await validateBode(bookAddSchema, req.body);

    const result = await booksService.addBook(req.body);

    res.status(201).json(result);
};

export const updateBookController = async (req, res) => {
    await validateBode(bookUpdateSchema, req.body);

    const { id } = req.params;
    const result = await booksService.updateBook(id, req.body);
    if (!result) throw HttpExeption(404, `Book with id=${id} not found`);

    res.json(result);
};

export const deleteBookController = async (req, res) => {
    const { id } = req.params;
    const result = await booksService.deleteBook(id);
    if (!result) throw HttpExeption(404, `Book with id=${id} not found`);

    res.json(result);
};