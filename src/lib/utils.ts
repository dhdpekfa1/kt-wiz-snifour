import { channels } from '@/assets/data/broadcastChannels.json';
import { type ClassValue, clsx } from 'clsx';
import { isWithinInterval } from 'date-fns';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string | undefined) {
  if (!dateString) return;

  const year = dateString.slice(0, 4);
  const month = dateString.slice(4, 6);
  const day = dateString.slice(6, 8);

  return `${year}.${month}.${day}`;
}

export function findBroadCast(broadcastCodes: string) {
  if (!broadcastCodes) return [];

  const codes = broadcastCodes.split(',');
  const result = channels.map((platform) => {
    const found = platform.items
      .filter((channel) => codes.includes(channel.code))
      .map((ch) => ch.name);

    return { platform: platform.category, channels: found.join(', ') };
  });

  return result;
}

export function isDateWithinWeek(
  date: Date,
  { startDate, endDate }: { startDate: Date; endDate: Date }
) {
  if (!date || !startDate || !endDate) return false;

  return isWithinInterval(date, {
    start: startDate,
    end: endDate,
  });
}
