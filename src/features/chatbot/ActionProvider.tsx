import React, { ReactElement } from 'react';

interface ActionProviderProps {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  createChatBotMessage: (message: string, options?: any) => any;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  setState: React.Dispatch<React.SetStateAction<any>>;
  children: React.ReactNode;
}

const ActionProvider: React.FC<ActionProviderProps> = ({
  // biome-ignore lint/correctness/noUnusedVariables: <explanation>
  createChatBotMessage,
  // biome-ignore lint/correctness/noUnusedVariables: <explanation>
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
