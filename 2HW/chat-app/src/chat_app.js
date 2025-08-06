import { EventEmitter } from "node:events";

const emitter = new EventEmitter();

const sendMessage = (name, message)=>{
	
	emitter.emit("message", {name, message});
}

emitter.on("message", (data) =>{
	console.log(`${data.name}: ${data.message}`);
});

sendMessage("Nikita", "Hallo, wie geht`s?");
sendMessage("Manu", "ich bin durch...");
sendMessage("Nikita", "Ich penn auch gleich ein. Zzz");