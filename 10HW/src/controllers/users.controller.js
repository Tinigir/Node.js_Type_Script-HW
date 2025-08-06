import jwt from "jsonwebtoken";

import * as usersService from "../services/users.service.js";

import validateBody from "../utils/validateBody.js";

import { getToken } from "../utils/token.utils.js";
import { updateEmailSchema, updateRoleSchema } from "../validation/users.schema.js";


const { JWT_SECRET } = process.env;

export const updateUserEmailController = async (req, res) => {
    const token = getToken(req.headers);
    const { id } = jwt.verify(token, JWT_SECRET);

    await validateBody(updateEmailSchema, req.body);

    const result = await usersService.updateUserEmail(id, req.body);

    res.json({
        message: `Email ${result} update successfully`
    });
};

export const deleteUserController = async (req, res) => {
    const token = getToken(req.headers);
    const { id } = jwt.verify(token, JWT_SECRET);

    await usersService.deleteUser(id);

    res.json({
        message: "User delete successfully"
    });
};

export const updateRoleController = async (req, res) => {
    await validateBody(updateRoleSchema, req.body);

    const result = await usersService.updateRole(req.body);

    res.json({
        message: `User role ${result} update successfully`
    });
};

export const refreshTokenController = async (req, res) => {
    const token = getToken(req.headers);
    const { id } = jwt.verify(token, JWT_SECRET);

    const newToken = await usersService.refreshToken(id);
    console.log(newToken);
    
    res.json({ newToken });
};