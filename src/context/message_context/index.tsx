import React, { createContext, useState, ReactNode } from 'react';

interface MessageContextProps {
    messages: string[];
    addMessage: (message: string) => void;
    clearMessages: () => void;
}

const MessageContext = createContext<MessageContextProps | undefined>(undefined);

export const MessageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [messages, setMessages] = useState<string[]>([]);

    const addMessage = (message: string) => {
        setMessages((prevMessages) => [...prevMessages, message]);
    };

    const clearMessages = () => {
        setMessages([]);
    };

    return (
        <MessageContext.Provider value={{ messages, addMessage, clearMessages }}>
            {children}
        </MessageContext.Provider>
    );
};

export const useMessageContext = () => {
    const context = React.useContext(MessageContext);
    if (!context) {
        throw new Error('useMessageContext must be used within a MessageProvider');
    }
    return context;
};