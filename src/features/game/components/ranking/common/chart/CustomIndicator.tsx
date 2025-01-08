interface CustomIndicatorProps {
  indicator: string;
  value: string | number;
}

function CustomIndicator({ indicator, value }: CustomIndicatorProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-10 text-sm bg-wiz-black text-white rounded text-center">
        {indicator}
      </span>
      <span>{value}</span>
    </div>
  );
}

export default CustomIndicator;
