import Header from '@/features/chatbot/Header';
import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
  initialMessages: [
    createChatBotMessage('안녕하세요! 궁금한 내용을 입력해주세요.'),
  ],
  customComponents: {
    header: () => React.createElement(Header),
  },
};

export default config;
