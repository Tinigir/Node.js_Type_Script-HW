import fs from "node:fs/promises";

const logMessage = async (message) => {
  const filepath = "./src/data/log.txt";

//   const now = new Date();

//   const day = String(now.getDate()).padStart(2, "0");
//   const month = String(now.getMonth() + 1).padStart(2, "0");
//   const year = now.getFullYear();

//   const formattedDate = `${day}.${month}.${year}`;
//   const logLine = `[${formattedDate}] ${message}\n`;

//   const timestamp = now.toISOString().split("T")[0];

//   await fs.appendFile(filepath, logLine);
  await fs.appendFile(filepath, message + "\n");
};

export default logMessage;
