import express from "express";
import cors from "cors";

import notFoundHandler from "./middlewares/notFoundHandler.js";
import postsRouter from "./routers/posts.router.js";


const startServer = ()=>{
	const app = express();
	
	app.use(cors());
	app.use(express.json());

	app.use(notFoundHandler)
	app.use("/api/posts", postsRouter)
	const port = Number(process.env.DATABASE_PORT) || 3000;



	app.listen(port, ()=>{
		console.log(`Server running on ${port}`);
	})
};

export default startServer;