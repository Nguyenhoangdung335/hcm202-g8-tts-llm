// src/pages/Chatbot.jsx

import React, { useState, useEffect, useRef } from 'react';
import Sidebar from '../components/Sidebar'; // Đường dẫn tới Sidebar

// SVG Icon for the Send button
const SendIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
        <path d="M7 11L12 6L17 11M12 18V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
);

const Chatbot = () => {
    const [messages, setMessages] = useState(() => {
        try {
            const savedMessages = localStorage.getItem('chatMessages');
            return savedMessages ? JSON.parse(savedMessages) : [];
        } catch (error) {
            console.error("Failed to parse chat messages from localStorage", error);
            return [];
        }
    });
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);
    const textareaRef = useRef(null);

    useEffect(() => {
        localStorage.setItem('chatMessages', JSON.stringify(messages));
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            const scrollHeight = textareaRef.current.scrollHeight;
            textareaRef.current.style.height = `${scrollHeight}px`;
        }
    }, [input]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleSendMessage = () => {
        if (input.trim() === '') return;
        const userMessage = { text: input, sender: 'user', timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
        setMessages(prev => [...prev, userMessage]);
        const currentInput = input;
        setInput('');
        simulateBotResponse(currentInput);
    };

    const simulateBotResponse = (userInput) => {
        setIsTyping(true);
        setTimeout(() => {
            const botMessage = { text: `This is a simulated response to: "${userInput}"`, sender: 'bot', timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
            setMessages(prev => [...prev, botMessage]);
            setIsTyping(false);
        }, 1500);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const handleClearChat = () => {
        setMessages([]);
        localStorage.removeItem('chatMessages');
    };

    return (
        // Chiếm toàn bộ không gian (h-full, w-full) của thẻ <main> chứa nó
        <div className="flex h-full w-full bg-white">
            {/* <Sidebar onClearChat={handleClearChat} /> */}
            
            <div className="flex-1 flex flex-col">
                <div className="flex-1 overflow-y-auto p-4">
                    {messages.length === 0 && !isTyping ? (
                        <div className="flex flex-col items-center justify-center h-full text-gray-500">
                            <div className="w-16 h-16 bg-gray-900 rounded-full mb-4 flex items-center justify-center text-white text-2xl font-bold">KT</div>
                            <h1 className="text-2xl text-gray-700">Khi bạn sẵn sàng là chúng ta có thể bắt đầu.</h1>
                        </div>
                    ) : (
                        <div className="max-w-3xl mx-auto">
                            {messages.map((msg, index) => (
                                <div key={index} className="py-5 flex items-start space-x-4">
                                    <div className={`flex-shrink-0 h-8 w-8 rounded-sm flex items-center justify-center font-bold text-white ${msg.sender === 'bot' ? 'bg-emerald-500' : 'bg-gray-900'}`}>
                                        {msg.sender === 'bot' ? 'B' : 'K'}
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-gray-800 whitespace-pre-wrap leading-relaxed">{msg.text}</p>
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="py-5 flex items-start space-x-4">
                                    <div className="flex-shrink-0 h-8 w-8 rounded-sm bg-emerald-500 flex items-center justify-center font-bold text-white">B</div>
                                    <div className="flex items-center space-x-1 mt-2">
                                        <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                        <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                        <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>
                    )}
                </div>

                <div className="px-4 pb-4 pt-2 bg-white">
                    <div className="max-w-3xl mx-auto">
                        <div className="relative">
                            <textarea
                                ref={textareaRef}
                                className="w-full border border-gray-300 rounded-xl py-3 pl-4 pr-14 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow text-gray-800"
                                value={input}
                                onChange={handleInputChange}
                                onKeyDown={handleKeyDown}
                                placeholder="Hỏi bất kỳ điều gì..."
                                rows={1}
                                style={{maxHeight: '200px'}}
                                aria-label="Chat input"
                            />
                            <button
                                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-black hover:bg-gray-700 disabled:bg-gray-300 transition-colors"
                                onClick={handleSendMessage}
                                disabled={!input.trim() || isTyping}
                                aria-label="Send message"
                            >
                                <SendIcon />
                            </button>
                        </div>
                        <p className="text-center text-xs text-gray-400 mt-2">This is a ChatGPT UI Clone. All interactions are simulated.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chatbot;