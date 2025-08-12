// src/pages/Introduction.jsx (hoặc nơi bạn lưu file này)
import React from 'react';
import { Link } from 'react-router-dom';

const Introduction = () => {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-white text-gray-800 font-sans">
            <section className="text-center max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Our Chatbot UI</h1>
                <p className="text-lg text-gray-600 mb-8">
                    An interface inspired by ChatGPT. Click the button below to start a conversation.
                </p>
                <Link to="/chat">
                    <button className="px-6 py-3 bg-gray-900 text-white rounded-md font-semibold hover:bg-gray-700 transition-colors duration-200">
                        Start Chatting
                    </button>
                </Link>
            </section>

            <section className="mt-16 max-w-4xl w-full">
                <h2 className="text-2xl font-semibold mb-6 text-center">Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <article className="p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-sm">
                        <h3 className="font-bold text-lg mb-2">Interactive Conversations</h3>
                        <p className="text-gray-600">Engage in meaningful conversations with our intelligent chatbot.</p>
                    </article>
                    <article className="p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-sm">
                        <h3 className="font-bold text-lg mb-2">Persistent History</h3>
                        <p className="text-gray-600">Your chat history is saved in your browser using localStorage.</p>
                    </article>
                </div>
            </section>
        </main>
    );
};

export default Introduction;