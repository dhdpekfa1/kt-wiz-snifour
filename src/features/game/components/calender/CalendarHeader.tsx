import { format } from 'date-fns';
import { IconDropdown, IconLeft, IconRight } from 'react-day-picker';

interface CalendarHeaderProps {
  displayMonth: Date; // 현재 표시 중인 월
  setCurrentMonth: (date: Date) => void; // 월을 변경하는 함수
}

const CalendarHeader = ({
  displayMonth,
  setCurrentMonth,
}: CalendarHeaderProps) => {
  return (
    <div className="flex justify-center items-center gap-10 px-4 py-4 bg-[#35383e]">
      <button
        onClick={() => {
          setCurrentMonth(
            new Date(displayMonth.getFullYear(), displayMonth.getMonth() - 1)
          );
        }}
        type="button"
        className="flex items-center justify-center text-lg font-bold text-wiz-white bg-slate-500 w-10 h-10 rounded hover:bg-slate-400"
      >
        <IconLeft />
      </button>
      <div className="relative flex items-center">
        <span className="text-lg font-bold text-wiz-white">
          {format(displayMonth, 'yyyy년 MM월')}
        </span>
        {/* 드롭다운 버튼 */}
        <select
          value={format(displayMonth, 'yyyy-MM')}
          onChange={(e) => {
            const [year, month] = e.target.value.split('-');
            setCurrentMonth(new Date(Number(year), Number(month) - 1));
          }}
          className="absolute right-0 top-0 text-sm bg-transparent border-none outline-none cursor-pointer w-6 h-6 opacity-0"
        >
          {Array.from({ length: 16 }, (_, i) => {
            const month = new Date(2024, 6 + i);
            return (
              <option key={month.getTime()} value={format(month, 'yyyy-MM')}>
                {format(month, 'yyyy년 MM월')}
              </option>
            );
          })}
        </select>
        <span className="cursor-pointer p-4 text-wiz-white">
          <IconDropdown className="w-3 h-3" />
        </span>
      </div>
      <button
        type="button"
        onClick={() => {
          setCurrentMonth(
            new Date(displayMonth.getFullYear(), displayMonth.getMonth() + 1)
          );
        }}
        className="flex items-center justify-center text-lg font-bold text-wiz-white bg-slate-500 w-10 h-10 rounded hover:bg-slate-400"
      >
        <IconRight />
      </button>
    </div>
  );
};

export { CalendarHeader };
