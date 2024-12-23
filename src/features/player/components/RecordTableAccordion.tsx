import DataTable from '@/features/common/DataTable';
import {
  recentRecordColumns,
  yearMatchColumns,
  yearRecordColumns,
} from '@/constants/columns/record-columns';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui';
import { RecentRecord, YearRecord } from '../types/record';

interface RecordTableAccordionProps {
  data: RecentRecord[] | YearRecord[];
}

function RecordTableAccordion({ data }: RecordTableAccordionProps) {
  const isRecentRecord = (
    data: RecentRecord[] | YearRecord[]
  ): data is RecentRecord[] => {
    return (data[0] as RecentRecord).displayDate !== undefined; // displayDate가 있으면 RecentRecord
  };

  return (
    <Accordion type="multiple" className="w-full">
      {!isRecentRecord(data) && (
        <AccordionItem value="match-table">
          <AccordionTrigger className="text-neutral-400 hover:text-white">
            경기표 보기
          </AccordionTrigger>
          <AccordionContent>
            <DataTable data={data} columns={yearMatchColumns} />
          </AccordionContent>
        </AccordionItem>
      )}
      <AccordionItem value="record-table">
        <AccordionTrigger className="text-neutral-400 hover:text-white">
          기록표 보기
        </AccordionTrigger>
        <AccordionContent>
          {isRecentRecord(data) ? (
            <DataTable data={data} columns={recentRecordColumns} />
          ) : (
            <DataTable data={data} columns={yearRecordColumns} />
          )}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export { RecordTableAccordion };
