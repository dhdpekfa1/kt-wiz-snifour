type TicketItemProps = {
  icon: string; // 아이콘 이미지 경로
  title: string; // 제목
  description: string; // 설명
  link?: string; // 링크 (선택적)
  isButton?: boolean; // 버튼 여부
};

const TicketItem = ({
  icon,
  title,
  description,
  link,
  isButton,
}: TicketItemProps) => (
  <div className="flex items-center space-x-4">
    <img src={icon} alt={`${title} 아이콘`} className="w-6 h-6" />
    <div className="text-wiz-white text-sm flex items-center space-x-2">
      <p>{title}</p>
      {link && isButton ? (
        <button
          type="button"
          className="px-3 py-1 bg-wiz-red text-wiz-white rounded shadow"
          onClick={() => window.open(link, '_blank')}
        >
          {description}
        </button>
      ) : link ? (
        <a href={link} className="underline text-wiz-red">
          {description}
        </a>
      ) : (
        <p>{description}</p>
      )}
    </div>
  </div>
);

export default TicketItem;
