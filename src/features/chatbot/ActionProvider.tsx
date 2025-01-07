import React, { ReactElement } from 'react';

interface ActionProviderProps {
  createChatBotMessage: (
    message: string,
    options?: Record<string, unknown>
  ) => unknown;
  setState: React.Dispatch<React.SetStateAction<unknown>>;
  children: React.ReactNode;
}

interface BotMessage {
  message: string;
  [key: string]: unknown;
}

interface State {
  messages: BotMessage[];
  [key: string]: unknown;
}

const ActionProvider: React.FC<ActionProviderProps> = ({
  createChatBotMessage,
  setState,
  children,
}) => {
  const handleTicketPurchase = () => {
    const botMessage = createChatBotMessage('티켓구매 버튼');
    setState((prev: State) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleUnknownMessage = () => {
    const botMessage = createChatBotMessage(
      '죄송해요. 무슨 말씀이신지 잘 모르겠어요.🥺'
    );
    setState((prev: State) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as ReactElement, {
            actions: { handleTicketPurchase, handleUnknownMessage },
          });
        }
        return child;
      })}
    </div>
  );
};

export default ActionProvider;
