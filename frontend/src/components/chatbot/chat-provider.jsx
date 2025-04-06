import { createContext, useContext, useState } from "react";

const ChatContext = createContext();

export function ChatProvider({ children }) {
    const [chats, setChats] = useState([]);

    const addChat = (fromUser, content) => {
        setChats((prevChats) => [...prevChats, { fromUser, content }]);
    };

    return (
        <ChatContext.Provider value={{ chats, addChat }}>
            {children}
        </ChatContext.Provider>
    );
}

export function useChat() {
    return useContext(ChatContext);
}