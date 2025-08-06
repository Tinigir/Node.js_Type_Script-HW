import express from "express";
import cors from "cors";

import errorHandler from "./midllewares/errorHandler.js";
import notFoundHandler from "./midllewares/notFoundHandler.js";

import userRouter from "./routers/user.router.js";
import authRouter from "./routers/auth.router.js";


const startServer = () => {
    const app = express();

    app.use(cors());
    app.use(express.json());


    app.use("/api/auth", authRouter)
    app.use("/api/users", userRouter);


    app.use(notFoundHandler);
    app.use(errorHandler);

    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`Server running on ${port} port`));
};

export default startServer;