import jwt from "jsonwebtoken";

import * as usersService from "../services/users.service.js";

import validateBody from "../utils/validateBody.js";
import HttpExeption from "../utils/HttpExeption.js";

import {
    addUserSchema,
    changeEmailSchema,
    changePasswordSchema,
    deleteUserSchema,
} from "../validation/users.schema.js";

const { JWT_SECRET } = process.env;

const getToken = (headers) => {
    const { authorization } = headers;
    if (!authorization) throw HttpExeption(401, "Authorization header missing");

    const [bearer, token] = authorization.split(" ");
    if (bearer !== "Bearer") throw HttpExeption(401, "Bearer missing");

    return token;
};

export const addUserController = async (req, res) => {

    await validateBody(addUserSchema, req.body);
    const result = await usersService.addUser(req.body);

    res.status(201).json({
        message: `user with email ${result.email} added`
    });
};

export const changeUserPasswordController = async (req, res) => {

    const token = getToken(req.headers)
    const { id } = jwt.verify(token, JWT_SECRET);

    await validateBody(changePasswordSchema, req.body);

    const result = await usersService.changePassword(id, req.body);
    if (!result) throw HttpExeption(404, `User with id=${id} not found`);

    result.mustChangePassword = false;
    await result.save();

    res.json({
        message: "Password change successfully"
    });
};

export const changeUserEmailController = async (req, res) => {

    const token = getToken(req.headers)
    const { id } = jwt.verify(token, JWT_SECRET);

    await validateBody(changeEmailSchema, req.body);

    const result = await usersService.changeEmail(id, req.body);
    if (!result) throw HttpExeption(404, `User with id=${id} not found`);

    res.json({
        message: "Email change successfully"
    });
};

export const deleteUserController = async (req, res) => {

    await validateBody(deleteUserSchema, req.body);

    const token = getToken(req.headers)
    const { id } = jwt.verify(token, JWT_SECRET);

    const result = await usersService.deleteUser(id, req.body);
    if (!result) throw HttpExeption(404, `User with id=${id} not found`);

    res.json({
        message: "User delete successfully"
    });
};

export const getAdminsController = async (req, res) => {
    const result = await usersService.getAdmins();

    res.json(result);
}