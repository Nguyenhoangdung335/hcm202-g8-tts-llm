import React from 'react';

// ChatMessage component to display individual chat messages
const ChatMessage = ({ message, isUser }) => {
    return (
        <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-2`}>
            <div className={`max-w-xs rounded-lg p-2 text-white ${isUser ? 'bg-blue-500' : 'bg-gray-500'}`}>
                <p>{message.text}</p>
                <span className="text-xs text-gray-300">{message.timestamp}</span>
            </div>
        </div>
    );
};

export default ChatMessage;