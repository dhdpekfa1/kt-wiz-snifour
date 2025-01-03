import React, { ReactElement } from 'react';

interface MessageParserProps {
  children: React.ReactNode;
  actions: Record<string, unknown>;
}

// biome-ignore lint/correctness/noUnusedVariables: <explanation>
const MessageParser: React.FC<MessageParserProps> = ({ children, actions }) => {
  const parse = (message: string): void => {
    console.log(message);
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as ReactElement, {
            parse: parse,
            actions: {},
          });
        }
        return child;
      })}
    </div>
  );
};

export default MessageParser;
