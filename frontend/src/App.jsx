// src/App.jsx

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/Nav'; // Sử dụng component Nav của bạn
import Introduction from './pages/Introduction';
import Chatbot from './pages/Chatbot';

// Component AppContent để có thể sử dụng hook useLocation
const AppContent = () => {
  const location = useLocation();

  // Trang Chatbot sẽ có layout đặc biệt, các trang khác thì bình thường
  const isChatPage = location.pathname === '/chat';

  const mainClasses = isChatPage
    ? 'flex-1 overflow-y-hidden' // QUAN TRỌNG: Chiếm không gian và giấu thanh cuộn
    : 'flex-1 container mx-auto p-4 overflow-y-auto'; // Layout cho các trang thông thường

  return (
    // THAY ĐỔI CHÍNH: Dùng h-screen và flex-col để layout chiếm 100% chiều cao
    <div className="flex flex-col h-screen bg-white"> 
      {/* <Nav /> */}
      
      <main className={mainClasses}>
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/chat" element={<Chatbot />} />
        </Routes>
      </main>

   
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;