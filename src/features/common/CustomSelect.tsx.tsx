import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@/components/ui';
import { format } from 'date-fns';

interface CustomSelectProps {
  type: 'year' | 'year-month';
  data: string[];
  value: string;
  onChange: (value: string) => void;
}

const CustomSelect = ({ type, data, value, onChange }: CustomSelectProps) => {
  return (
    <Select onValueChange={onChange} defaultValue={value}>
      <SelectTrigger
        className={`${
          type === 'year'
            ? 'bg-wiz-white rounded pl-4 pr-2 py-1 text-black'
            : 'bg-transparent border-none cursor-pointer text-xl font-bold'
        } w-fit`}
      >
        <div
          className={`flex items-center gap-1 ${
            type === 'year' ? 'text-black' : 'text-wiz-white'
          }`}
        >
          {type === 'year'
            ? `${value} 시즌`
            : format(new Date(value), 'yyyy년 MM월')}
        </div>
      </SelectTrigger>

      <SelectContent className="w-fit">
        {data.map((item) => (
          <SelectItem
            key={item}
            value={item}
            className={`${
              type === 'year'
                ? 'bg-wiz-white hover:bg-gray-100 focus:bg-wiz-red focus:text-white'
                : 'bg-white hover:bg-gray-200 focus:bg-wiz-red focus:text-white'
            }`}
          >
            {type === 'year'
              ? `${item}`
              : format(new Date(item), 'yyyy년 MM월')}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default CustomSelect;
