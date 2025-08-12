import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Introduction from './pages/Introduction';
import Chatbot from './pages/Chatbot';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Nav />
        <main className="flex-grow container mx-auto px-4">
          <Routes>
            <Route path="/" element={<Introduction />} />
            <Route path="/chat" element={<Chatbot />} />
          </Routes>
        </main>
        <footer className="bg-gray-800 text-white text-center py-4">
          <p>&copy; 2023 Chatbot App</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;