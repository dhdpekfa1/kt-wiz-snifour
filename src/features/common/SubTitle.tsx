const SubTitle = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="h-4 w-1 bg-[#ec0a0b]" />
      <h4 className="font-semibold ">{title}</h4>
    </div>
  );
};

export default SubTitle;
