import React, { ReactElement } from 'react';

interface MessageParserProps {
  children: React.ReactNode;
  actions: {
    handleTicketPurchase: () => void;
    handleUnknownMessage: () => void;
  };
}

const MessageParser: React.FC<MessageParserProps> = ({ children, actions }) => {
  const parse = (message: string): void => {
    if (message.includes('티켓구매')) {
      actions.handleTicketPurchase();
    } else {
      actions.handleUnknownMessage();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as ReactElement, {
            parse: parse,
            actions,
          });
        }
        return child;
      })}
    </div>
  );
};

export default MessageParser;
