import { useState, useEffect } from "react";
import io from "socket.io-client";

import MessagesList from "../../shared/components/MessagesList/MessagesList";
import MessageForm from "../../shared/components/MessageForm/MessageForm.jsx";

// import styles from "./Chat.module.css";

const socket = io.connect(`${import.meta.env.VITE_WEBSOCKET_URL}`);

const Chat = () => {

    const [messagesAll, setMessagesAll] = useState([]);

    const submitForm = (message) => {
        // сообщение от юзера оборачивыаем в объект
        const newMessage = { author: "User", text: message };
        // сразу показать сообщение юзера
        setMessagesAll(prev => [...prev, newMessage]);
        // отправляем только текст
        socket.emit("message", message);
    };

    useEffect(() => {

        // Все сообщения от сервера оборачиваем в { author: "Server", text: message }

        // получаем сообщение от сервера
        socket.on("welcome", (message) => {
            setMessagesAll(prev => [...prev, { author: "Server", text: message }]);
        });

        // получаем ответ
        socket.on("reply", (message) => {
            setMessagesAll(prev => [...prev, { author: "Server", text: message }]);
        });

        return () => {
            socket.off("welcome");
            socket.off("reply");
        };
    }, []);

    return (
        <main>
            <h1>Simple chat</h1>
            <MessagesList items={messagesAll} />
            <MessageForm submitForm={submitForm} />
        </main>
    )
};

export default Chat;