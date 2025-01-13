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
  <div className="flex items-center gap-2 text-base md:text-lg text-wiz-white">
    <img
      src={icon}
      alt={`${title} 아이콘`}
      className="w-8 h-auto md:w-10 lg:w-12"
    />
    <div className="flex items-center gap-2">
      <p>{title}</p>
      {link && isButton ? (
        <button
          type="button"
          className="px-3 py-1 bg-wiz-red text-wiz-white rounded shadow text-sm md:text-base"
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
