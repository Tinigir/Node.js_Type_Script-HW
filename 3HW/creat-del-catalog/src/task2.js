import fs from "fs/promises";

async function createFile() {
  try {
    await fs.writeFile("info.txt", "Node.js is awesome!");
    console.log("Text recorded!");
  } catch (err) {
    console.error("Text not recorded:", err);
  }
}

async function readFile() {
  try {
    const data = await fs.readFile("info.txt", "utf-8");
    console.log("File content:", data);
  } catch (err) {
    console.error("Error reading file:", err);
  }
}

createFile();

setTimeout(() => {
  readFile();
}, 2000);
