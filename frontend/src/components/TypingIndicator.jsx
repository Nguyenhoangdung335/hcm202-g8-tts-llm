import React from 'react';

const TypingIndicator = () => {
    return (
        <div role="alert" className="flex items-center space-x-2">
            <div className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-bounce"></div>
            <div className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-bounce200"></div>
            <div className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-bounce300"></div>
            <span className="text-gray-500">Bot is typing...</span>
        </div>
    );
};

export default TypingIndicator;