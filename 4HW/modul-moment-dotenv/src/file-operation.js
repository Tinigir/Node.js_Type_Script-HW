import * as fs from "node:fs/promises";
import dotenv from "dotenv"


dotenv.config();
console.log(process.env.FILENAME);


const filename = process.env.FILENAME;

async function createAndReadFile() {
	try {
	  await fs.writeFile(filename, 'Dieser Text hat schon geshriben');
	  console.log(`File ${filename} successfully created and written`);
	  
	  const content = await fs.readFile(filename, 'utf-8');
	  console.log('Content:', content);
	} catch (err) {
	  console.error('Error:', err);
	}
  }
  
  createAndReadFile();
  

