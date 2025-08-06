import express from "express";
import dotenv from "dotenv";
import { router } from "./routes/products.routes.js";
import { errorHandler } from "./db/middlewares/errorMiddleware.js";

dotenv.config();

const startServer = ()=>{

	const app = express();

	app.use(express.json());
	app.use("/products", router);


	app.get("/", (req,res)=>{
			res.send("Hello, world");
	})

	app.post("/register", (req,res,next)=>{
		try {
			const {username, password} = req.body;
			if(!username || !password){
				throw new Error("username and password are required")
			}
			res.send("User ist registered")
		} catch (error) {
			next(error);
		}
	});

	
	app.use(errorHandler);

	app.listen(3000, ()=> console.log("Server running on 3000 port"));
}

startServer();