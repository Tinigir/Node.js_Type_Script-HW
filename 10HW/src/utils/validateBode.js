const validateBody = async (schema, body) => {
    try {
        await schema.validate(body, { strict: true });
        return true;
    } catch (error) {
        error.starus = 400;
        throw error;
    }
};

export default validateBody;