import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@/components/ui';
import { format } from 'date-fns';

interface CustomSelectProps {
  type: 'year' | 'year-month'; // 선택 타입
  data: string[]; // 보여줄 옵션 리스트
  value: string; // 현재 선택된 값
  onChange: (value: string) => void; // 선택 시 동작
}

export default function CustomSelect({
  type,
  data,
  value,
  onChange,
}: CustomSelectProps) {
  return (
    <Select onValueChange={onChange} defaultValue={value}>
      <SelectTrigger className="bg-transparent border-none cursor-pointer text-xl font-bold w-fit">
        <div className="flex items-center gap-1">
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
            className="bg-white hover:bg-gray-200 focus:bg-wiz-red focus:text-white"
          >
            {type === 'year'
              ? `${item}`
              : format(new Date(item), 'yyyy년 MM월')}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
