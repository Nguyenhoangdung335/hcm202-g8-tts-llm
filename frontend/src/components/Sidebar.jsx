// src/components/Sidebar.jsx
import React from 'react';

// SVG Icons for buttons
const NewChatIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const ChatHistoryIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);


const Sidebar = ({ onClearChat }) => {
    // Mock chat history data
    const chatHistory = [
        'Paraphrase prompt for AI',
        'Khắc phục laptop bị lag',
        'Mối quan hệ trong ERD',
        'MongoDB Collections vs ERD',
    ];

    return (
        <aside className="bg-[#202123] text-white w-64 p-2 flex-col flex-shrink-0 hidden md:flex">
            <button 
                onClick={onClearChat}
                className="flex items-center gap-3 p-3 rounded-lg text-sm hover:bg-gray-700 transition-colors w-full mb-2"
            >
                <NewChatIcon />
                <span>Đoạn chat mới</span>
            </button>
            
            <div className="flex-1 overflow-y-auto pr-2">
                <p className="text-xs text-gray-400 font-semibold px-3 py-2">Đoạn chat</p>
                <ul>
                    {chatHistory.map((item, index) => (
                        <li key={index}>
                            <a href="#" className="flex items-center gap-3 p-3 rounded-lg text-sm hover:bg-gray-700 transition-colors truncate">
                                <ChatHistoryIcon />
                                <span className="truncate">{item}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="border-t border-gray-700 mt-2 pt-2">
                 <a href="#" className="flex items-center gap-3 p-3 rounded-lg text-sm hover:bg-gray-700 transition-colors">
                    <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center font-bold">K</div>
                    <span>Kiệt Tuấn</span>
                </a>
            </div>
        </aside>
    );
};

export default Sidebar;