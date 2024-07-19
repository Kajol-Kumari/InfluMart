import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './Chat.css';

const socket = io('http://localhost:5000'); // Adjust the URL as needed

const Chat = ({ isLoggedIn }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!isLoggedIn) return;

    // Simulate receiving initial dummy messages
    const initialMessages = [
      'Hello!',
      'How can I help you today?',
      'Feel free to ask any questions.',
      'This is a demo chatbot.',
      'Try typing a message!',
    ];
    setMessages(initialMessages);

    // Socket event listener for receiving new messages
    socket.on('message', (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    return () => {
      socket.off('message');
    };
  }, [isLoggedIn]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      // Emitting message to the server
      socket.emit('sendMessage', message, () => setMessage(''));

      // Adding sent message to the local state for immediate UI update
      setMessages((prevMessages) => [...prevMessages, message]);
    }
  };

  if (!isLoggedIn) {
    return <div>Please log in to access the chat feature.</div>;
  }

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className="message">{msg}</div>
        ))}
      </div>
      <form onSubmit={sendMessage} className="message-form">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="message-input"
        />
        <button type="submit" className="send-button">Send</button>
      </form>
    </div>
  );
};

export default Chat;
