import HttpExeption from "../utils/HttpExeption.js"

export const mustChangePassword = (req, res, next) => {
    if (req.user.mustChangePassword) {
        throw HttpExeption(401, "Password change required")
    }
    next();
};