import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';
import { Header, WidgetButton, WidgetButtonProps, WizAvatar } from './';

const config = {
  initialMessages: [
    createChatBotMessage('안녕하세요! 궁금한 내용을 입력해주세요.', {
      delay: 500,
      widget: 'firstButtons',
    }),
  ],
  widgets: [
    {
      widgetName: 'ticketPurchaseOptions',
      widgetFunc: (props: WidgetButtonProps) =>
        React.createElement(WidgetButton, props),
      props: {},
      mapStateToProps: [],
    },
  ],
  customComponents: {
    header: () => React.createElement(Header),
    botAvatar: () => React.createElement(WizAvatar),
  },
};

export default config;
