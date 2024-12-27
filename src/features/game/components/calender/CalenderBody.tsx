import { useMatchStore } from '@/store/useMatchStore';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { DayPicker } from 'react-day-picker';
import { CalendarHeader } from '../calender';

interface CalenderBodyProps {
  renderCellContent: (date: Date) => React.ReactNode;
}

const CalenderBody = ({ renderCellContent }: CalenderBodyProps) => {
  const { currentMonth, setCurrentMonth, selectedDate, setSelectedDate } =
    useMatchStore();

  return (
    <DayPicker
      mode="single"
      selected={selectedDate}
      onSelect={setSelectedDate}
      locale={ko}
      className="border border-[#fefefe40] rounded-lg w-full max-w-full mx-auto"
      classNames={{
        table: 'w-full border-collapse',
        cell: 'h-fit md:h-[180px] w-[160px] text-center p-0 border border-[#fefefe40] relative',
        day: 'h-full w-full text-sm flex items-center justify-center relative',
      }}
      captionLayout="dropdown"
      defaultMonth={new Date()}
      month={currentMonth}
      onMonthChange={setCurrentMonth}
      fromMonth={new Date(2024, 6)}
      toMonth={new Date(2025, 9)}
      components={{
        Caption: (props) => (
          <CalendarHeader
            displayMonth={props.displayMonth}
            setCurrentMonth={setCurrentMonth}
          />
        ),
        Head: () => (
          <thead>
            <tr className="bg-wiz-white bg-opacity-10">
              {['일', '월', '화', '수', '목', '금', '토'].map((day, index) => (
                <th
                  key={day}
                  className={`p-2 font-medium text-xs text-md:sm lg:text-base ${
                    index === 0
                      ? 'text-red-500'
                      : index === 6
                        ? 'text-blue-500'
                        : 'text-wiz-white'
                  }`}
                >
                  {day}
                </th>
              ))}
            </tr>
          </thead>
        ),
        DayContent: ({ date }) => (
          <div
            className={`relative w-full h-full bg-wiz-white bg-opacity-5 ${
              format(date, 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd')
                ? 'border-2 border-wiz-red'
                : ''
            }`}
          >
            {renderCellContent(date)}
          </div>
        ),
      }}
    />
  );
};

export { CalenderBody };
