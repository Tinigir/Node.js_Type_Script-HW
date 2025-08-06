import Book from "../db/Book.js";
import HttpExeption from "../utils/HttpExeption.js";

export const getBooks = () => Book.findAll();

export const addBook = payload => Book.create(payload);

export const getBookById = async id => {
    const result = await Book.findByPk(id);
    if (!result) return null;
    return result;
};

export const updateBook = async (id, payload) => {
    const result = await Book.findByPk(id);
    if (!result) return null;

    await result.update(payload);
    return result;
};

export const deleteBook = async id => {
    const result = await Book.findByPk(id);
    if (!result) return null;

    await result.destroy();
    return result;
};