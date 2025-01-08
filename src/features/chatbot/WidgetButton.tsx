import { Button } from '@/components/ui';

export interface WidgetButtonProps {
  actionProvider: {
    handleClickHomepage: () => void;
    handleClickTicketLink: () => void;
  };
}

function WidgetButton(props: WidgetButtonProps) {
  return (
    <div className="flex gap-2">
      <Button
        onClick={() => props.actionProvider.handleClickHomepage()}
        className="hover:bg-wiz-red border-wiz-black border-2 border-solid"
      >
        KT 홈페이지 예매
      </Button>
      <Button
        onClick={() => props.actionProvider.handleClickTicketLink()}
        className="hover:bg-wiz-red border-wiz-black border-2 border-solid"
      >
        티켓링크 예매
      </Button>
    </div>
  );
}

export default WidgetButton;
