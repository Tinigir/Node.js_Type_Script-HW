import * as authService from "../services/auth.service.js";

import validateBody from "../utils/validateBody.js";
import { loginShema } from "../validation/auth.schema.js";


const loginController = async (req, res) => {

    await validateBody(loginShema, req.body);

    const token = await authService.login(req.body);
    res.json({ token });
};

export default loginController;