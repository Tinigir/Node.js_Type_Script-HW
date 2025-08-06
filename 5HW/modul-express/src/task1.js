import express from "express";

const app = express();

app.use((req, res, next) => {
  const authHeader = req.get("Authorization");

  if (!authHeader) {
    res.status(401)
	.setHeader("Content-Type", "text/plain")
	.send("Unauthorized");
  }

  res.status(200)
  .setHeader("Content-Type", "text/plain")
  .send("Authorization header received")

  app.listen(3000,()=>{
	console.log("Server right!");
  });
});