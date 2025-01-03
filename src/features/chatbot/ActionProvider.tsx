import React, { ReactElement } from 'react';

interface ActionProviderProps {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  createChatBotMessage: (message: string, options?: any) => any;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  setState: React.Dispatch<React.SetStateAction<any>>;
  children: React.ReactNode;
}

// biome-ignore lint/correctness/noUnusedVariables: <explanation>
const ActionProvider: React.FC<ActionProviderProps> = ({
  createChatBotMessage,
  setState,
  children,
}) => {
  return (
    <div>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as ReactElement, {
            actions: {},
          });
        }
        return child;
      })}
    </div>
  );
};

export default ActionProvider;
