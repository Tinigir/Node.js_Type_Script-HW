import * as Yup from "yup";

export const bookAddSchema = Yup.object({
    title: Yup
        .string()
        .min(5, "The title must be at least 5 characters long")
        .required("The book title is required"),
    author: Yup
        .string()
        .required("Author name is required"),
    year: Yup
        .number()
        .positive("Year must be a positive number")
        .integer("Year must be a whole number")
        .required("Year is required"),
}).noUnknown(true, ({ unknown }) => `Unknown field: ${unknown}`);

export const bookUpdateSchema = Yup.object({
    title: Yup
        .string()
        .min(5, "The title must be at least 5 characters long"),
    author: Yup
        .string(),
    year: Yup
        .number()
        .positive("Year must be a positive number")
        .integer("Year must be a whole number")
}).noUnknown(true, ({ unknown }) => `Unknown field: ${unknown}`);