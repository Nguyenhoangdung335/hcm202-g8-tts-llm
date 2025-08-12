import React, { useState, useEffect, useRef } from 'react';
import ChatMessage from '../components/ChatMessage';
import TypingIndicator from '../components/TypingIndicator';

const Chatbot = () => {
    const [messages, setMessages] = useState(() => {
        const savedMessages = localStorage.getItem('chatMessages');
        return savedMessages ? JSON.parse(savedMessages) : [];
    });
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        localStorage.setItem('chatMessages', JSON.stringify(messages));
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleSendMessage = () => {
        if (input.trim() === '') return;

        const userMessage = { text: input, sender: 'user', timestamp: new Date().toLocaleTimeString() };
        setMessages((prev) => [...prev, userMessage]);
        setInput('');
        simulateBotResponse(input);
    };

    const simulateBotResponse = (userInput) => {
        setIsTyping(true);
        setTimeout(() => {
            const botMessage = { text: `Echo: ${userInput}`, sender: 'bot', timestamp: new Date().toLocaleTimeString() };
            setMessages((prev) => [...prev, botMessage]);
            setIsTyping(false);
        }, 1000);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            if (e.shiftKey) {
                // Allow new line
                return;
            }
            e.preventDefault();
            handleSendMessage();
        }
    };

    const handleClearChat = () => {
        setMessages([]);
        localStorage.removeItem('chatMessages');
    };

    return (
        <div className="flex flex-col h-screen p-4">
            <div className="flex-1 overflow-auto mb-4">
                <div role="log" aria-live="polite">
                    {messages.map((msg, index) => (
                        <ChatMessage key={index} message={msg} />
                    ))}
                    {isTyping && <TypingIndicator />}
                    <div ref={messagesEndRef} />
                </div>
            </div>
            <textarea
                className="border rounded p-2"
                value={input}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                rows={2}
                aria-label="Chat input"
            />
            <div className="flex justify-between mt-2">
                <button
                    className={`bg-blue-500 text-white rounded px-4 py-2 ${!input.trim() ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={handleSendMessage}
                    disabled={!input.trim()}
                >
                    Send
                </button>
                <button
                    className="bg-red-500 text-white rounded px-4 py-2"
                    onClick={handleClearChat}
                >
                    Clear
                </button>
            </div>
        </div>
    );
};

export default Chatbot;