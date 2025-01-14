import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@/components/ui';
import { cn } from '@/lib/utils';
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
        className={cn(
          'w-fit h-8 text-xs md:text-sm',
          type === 'year'
            ? 'bg-wiz-white rounded text-black'
            : 'bg-transparent border-none text-base md:text-lg lg:text-xl font-bold'
        )}
      >
        {type === 'year'
          ? `${value} 시즌`
          : format(new Date(value), 'yyyy년 MM월')}
      </SelectTrigger>

      <SelectContent>
        {data.map((item) => (
          <SelectItem
            key={item}
            value={item}
            className={cn(
              'text-xs md:text-sm pl-8',
              type === 'year'
                ? 'bg-wiz-white hover:bg-gray-100 focus:bg-wiz-red focus:text-white'
                : 'bg-white hover:bg-gray-200 focus:bg-wiz-red focus:text-white'
            )}
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

export { CustomSelect };
