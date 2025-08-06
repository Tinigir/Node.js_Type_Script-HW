export const getToken = (header) => {
    const { authorization } = header;
    if (!authorization) throw HttpExeption(401, "Authorization header missing");

    const [bearer, token] = authorization.split(" ");
    if (bearer !== "Bearer") throw HttpExeption(401, "Bearer missing");

    return token;
};