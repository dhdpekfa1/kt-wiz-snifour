import data from '@/assets/data/ktHistory.json';
import Breadcrumb from '@/features/common/Breadcrumb';

const TeamHistoryTab = () => {
  return (
    <div>
      <Breadcrumb />
      <h1 className="text-wiz-white text-4xl text-center font-bold mb-10">
        KT Wiz 연혁
      </h1>
      <div className="relative max-w-5xl mx-auto">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 border border-wiz-white border-opacity-30 h-full" />
        {data.map((item, index) => (
          <div
            key={item.year}
            className={`flex items-center w-full mb-8 ${
              index % 2 === 0 ? 'justify-start' : 'justify-end'
            }`}
          >
            <div
              className={`relative w-1/2 px-4 ${
                index % 2 === 0 ? 'text-left' : 'ml-40 text-left'
              }`}
            >
              <div className="absolute top-[-2rem] left-5 text-wiz-white text-xl font-bold mb-4">
                {item.year}
              </div>
              <div className="border border-wiz-red border-opacity-30 rounded-lg p-4 bg-wiz-white bg-opacity-10 text-wiz-white text-sm leading-relaxed whitespace-pre-line shadow-md">
                {item.content.map((entry) => {
                  return typeof entry === 'string' ? (
                    <div key={entry}>{entry}</div>
                  ) : (
                    <div key={entry.title}>
                      <strong>{entry.title}</strong>
                      {entry.content && <div>{entry.content}</div>}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-wiz-red rounded-full border-4 border-wiz-black" />
          </div>
        ))}
      </div>
    </div>
  );
};

export { TeamHistoryTab };
