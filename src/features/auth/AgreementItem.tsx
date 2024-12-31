import {
  Checkbox,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  Label,
} from '@/components/ui';
import { useState } from 'react';
import { AgreementsType } from './types/agreements';

interface AgreementItemProps {
  id: keyof AgreementsType;
  label: string;
  required: boolean;
  description: string;
  checked: boolean;
  onChange: (id: keyof AgreementsType) => void;
}

const AgreementItem = ({
  id,
  label,
  // required,
  description,
  checked,
  onChange,
}: AgreementItemProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2">
        <Checkbox
          id={id}
          checked={checked}
          onCheckedChange={() => onChange(id)}
        />
        <Label
          htmlFor={id}
          className="text-xs md:text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <span className="cursor-pointer">{label}</span>
            </DialogTrigger>
            <DialogContent className="w-[90%] lg:w-[50%] max-h-[80%] h-fit overflow-scroll bg-wiz-black text-wiz-white rounded-md border-none">
              <DialogTitle>약관 내용</DialogTitle>
              <p className="text-sm md:text-base">
                {description || '약관 내용이 없습니다.'}
              </p>
            </DialogContent>
          </Dialog>
        </Label>
        {/* {required && <p className="text-xs text-gray-500">* 필수 약관</p>} */}
      </div>
    </div>
  );
};

export default AgreementItem;
