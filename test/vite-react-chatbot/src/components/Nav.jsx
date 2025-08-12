import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <header className="bg-gray-800 text-white p-4 fixed w-full z-10">
            <div className="max-w-4xl mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">Chatbot App</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link to="/" className="hover:text-gray-300">Introduction</Link>
                        </li>
                        <li>
                            <Link to="/chat" className="hover:text-gray-300">Chatbot</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Nav;