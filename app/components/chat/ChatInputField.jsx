'use client';

import { useState } from 'react';
import { Icon } from '@iconify/react';

const ChatInputField = () => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  return (
    <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 w-full max-w-5xl z-10">
      <div className="flex items-center p-4 bg-base-100 border border-base-300 rounded-full shadow-lg">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={1}
          placeholder="Type a message..."
          className="flex-1 p-2 text-[16px] border-none outline-none resize-none"
        />
        <button
          onClick={handleSend}
          className="ml-2 p-2 bg-primary text-base-100 rounded-full hover:bg-blue-600"
        >
          <Icon icon="mdi:send" width={24} height={24} />
        </button>
      </div>
    </div>
  );
};

export default ChatInputField;
 
