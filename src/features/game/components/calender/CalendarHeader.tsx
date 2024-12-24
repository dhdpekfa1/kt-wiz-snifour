import CustomSelect from '@/features/common/CustomSelect.tsx';
import { format } from 'date-fns';
import { IconLeft, IconRight } from 'react-day-picker';

interface CalendarHeaderProps {
  displayMonth: Date;
  setCurrentMonth: (date: Date) => void;
}

const CalendarHeader = ({
  displayMonth,
  setCurrentMonth,
}: CalendarHeaderProps) => {
  const months = Array.from({ length: 8 }, (_, i) =>
    format(new Date(2024, 2 + i), 'yyyy-MM')
  );

  return (
    <div className="flex justify-center items-center gap-10 px-4 py-4 bg-wiz-white bg-opacity-10">
      {/* 이전 버튼 */}
      <button
        onClick={() => {
          setCurrentMonth(
            new Date(displayMonth.getFullYear(), displayMonth.getMonth() - 1)
          );
        }}
        type="button"
        className="flex items-center justify-center text-lg font-bold text-wiz-white bg-wiz-white bg-opacity-30 w-10 h-10 rounded hover:bg-slate-400"
      >
        <IconLeft />
      </button>

      {/* 월 표시 및 드롭다운 */}
      <div className="relative flex items-center">
        <CustomSelect
          type="year-month"
          data={months}
          value={format(displayMonth, 'yyyy-MM')}
          onChange={(value) => {
            const [year, month] = value.split('-');
            setCurrentMonth(new Date(Number(year), Number(month) - 1));
          }}
        />
      </div>

      {/* 다음 버튼 */}
      <button
        type="button"
        onClick={() => {
          setCurrentMonth(
            new Date(displayMonth.getFullYear(), displayMonth.getMonth() + 1)
          );
        }}
        className="flex items-center justify-center text-lg font-bold text-wiz-white bg-wiz-white bg-opacity-30 w-10 h-10 rounded hover:bg-slate-400"
      >
        <IconRight />
      </button>
    </div>
  );
};

export { CalendarHeader };
