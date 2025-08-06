import { error } from "console";
import fs from "node:fs/promises";

async function createFolder(folderpath) {
  try {
    await fs.mkdir(folderpath);
    return true;
  } catch {
    // err.message = "My folder all created";
    // throw err;
    return false;
  }
}

const result = await createFolder("./myFolder");
const createdMessage = result ? "My folder craeted" : "Get new name folder";
console.log(createdMessage);

// try{
// 	await createFolder("./myFolder");
// 	console.log("My folder craeted");
// } catch {
// 	console.log("Get new name folder");
// }

async function deleteFolder() {
  try {
    await fs.rmdir("./myFolder");
    console.log("Folder deleted");
  } catch (err) {
    console.error("Error delete folder:", err);
  }
}

setTimeout(()=>{
	deleteFolder();
},2000)

// const fs = require('fs');
// fs.mkdir("./myFolder", (err) =>{
// 	if(err) console.error(err);
// 	else console.log("Folder created!");
// });
