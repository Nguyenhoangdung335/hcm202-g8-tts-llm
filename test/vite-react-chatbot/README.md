# Vite + React Chatbot Application

This project is a simple web application built with Vite, React, and Tailwind CSS. It features two main pages: an Introduction page and a Chatbot page. The Chatbot page allows users to interact with a mock chatbot.

## Features

- **Introduction Page**: Provides an overview of the chatbot features and a call-to-action button to start chatting.
- **Chatbot Page**: A chat interface where users can send messages and receive responses from a mock chatbot. The chat history is stored in localStorage, allowing users to reload the page without losing their conversation.

## Technologies Used

- **Vite**: A fast build tool for modern web projects.
- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **React Router**: For managing navigation between pages.

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd vite-react-chatbot
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000` to view the application.

## Project Structure

```
vite-react-chatbot
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── README.md
├── index.html
├── src
│   ├── main.jsx
│   ├── App.jsx
│   ├── styles
│   │   └── index.css
│   ├── components
│   │   ├── Nav.jsx
│   │   ├── ChatMessage.jsx
│   │   └── TypingIndicator.jsx
│   └── pages
│       ├── Introduction.jsx
│       └── Chatbot.jsx
```

## Usage

- Navigate to the **Introduction** page to learn about the chatbot.
- Click on the **Chatbot** link to start chatting.
- Type your messages and press Enter to send. Use Shift + Enter for a new line.
- The chat history will be saved in your browser's localStorage.

## Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements for the project.

## License

This project is open-source and available under the [MIT License](LICENSE).