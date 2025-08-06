import express from "express";
import * as fs from "node:fs/promises";
import path from "node:path";

const app = express();

app.get("/",async (req, res) =>{
	try{

		throw new Error('Some test error');
	}catch (err){
		const logMessage = `${new Date().toISOString()} ${err}\n`
		await fs.appendFile(path.resolve('error.log'), logMessage)
		console.error(err);
		res.status(500)
		.setHeader("Content-Type", "text/plain")
		.send("Internal Server Error")
	}

});

app.listen(3000, ()=>{
	console.log("Server running on 3000");
})