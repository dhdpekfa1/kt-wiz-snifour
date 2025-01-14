import {
  Checkbox,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  Label,
} from '@/components/ui';
import { AgreementsType } from '@/features/auth/types/agreements';
import { useState } from 'react';

interface AgreementItemProps {
  id: keyof AgreementsType;
  label: string;
  title: string;
  required: boolean;
  description: string;
  checked: boolean;
  onChange: (id: keyof AgreementsType) => void;
}

const AgreementItem = ({
  id,
  label,
  title,
  required,
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
              <span className="cursor-pointer flex items-center gap-1">
                {label}
                {required ? (
                  <span className="text-xs text-wiz-red">[필수]</span>
                ) : (
                  <span className="text-xs text-wiz-white text-opacity-20">
                    [선택]
                  </span>
                )}
              </span>
            </DialogTrigger>
            <DialogContent
              className="w-[90%] lg:w-[50%] max-h-[80%] h-fit overflow-scroll bg-wiz-black text-wiz-white rounded-md border-none shadow-md shadow-wiz-red"
              style={{ whiteSpace: 'pre-wrap' }}
            >
              <DialogTitle className="text-base md:text-lg">
                {title}{' '}
                {!required && (
                  <span className="text-wiz-white text-opacity-20">[선택]</span>
                )}
              </DialogTitle>
              <DialogDescription className="text-wiz-white text-opacity-30">
                약관 내용
              </DialogDescription>
              <p className="text-sm md:text-base">
                {description || '약관 내용이 없습니다.'}
              </p>
            </DialogContent>
          </Dialog>
        </Label>
        {/**/}
      </div>
    </div>
  );
};

export { AgreementItem };
