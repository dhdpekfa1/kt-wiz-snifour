export const assignColor = (index: number, length: number) => {
  if (index < length * 0.33) {
    return 'bg-[#059212]';
  }
  if (index < length * 0.66) {
    return 'bg-[#ffba08]';
  }
  return 'bg-gray-500';
};
