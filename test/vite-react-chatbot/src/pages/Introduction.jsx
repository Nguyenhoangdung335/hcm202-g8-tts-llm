import React from 'react';
import { Link } from 'react-router-dom';

const Introduction = () => {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
            <section className="text-center max-w-3xl">
                <h1 className="text-4xl font-bold mb-4">Welcome to Our Chatbot</h1>
                <p className="text-lg mb-6">
                    This application allows you to interact with a chatbot that can assist you with various queries.
                </p>
                <Link to="/chat">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                        Start Chatting
                    </button>
                </Link>
            </section>

            <section className="mt-10 max-w-3xl">
                <h2 className="text-2xl font-semibold mb-4">Features of the Chatbot</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <article className="p-4 bg-white shadow rounded">
                        <h3 className="font-bold">Interactive Conversations</h3>
                        <p>Engage in meaningful conversations with our intelligent chatbot.</p>
                    </article>
                    <article className="p-4 bg-white shadow rounded">
                        <h3 className="font-bold">24/7 Availability</h3>
                        <p>Get assistance anytime, anywhere without waiting for human support.</p>
                    </article>
                </div>
            </section>
        </main>
    );
};

export default Introduction;