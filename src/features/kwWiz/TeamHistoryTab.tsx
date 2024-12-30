import data from '@/assets/data/ktHistory.json';
import Breadcrumb from '@/features/common/Breadcrumb';

const TeamHistoryTab = () => {
  return (
    <div>
      <Breadcrumb />
      <h1 className="text-wiz-white text-2xl md:text-3xl lg:text-4xl text-center font-bold mb-10">
        KT Wiz 연혁
      </h1>
      <div className="relative w-full mx-auto">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 border border-wiz-white border-opacity-30 h-full hidden md:flex md:justify-between md:flex-row max-sm:flex-col" />
        {data.map((item, index) => (
          <div
            key={item.year}
            className={`flex justify-center md:items-center w-full mb-8 ${
              index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
            }`}
          >
            <div
              className={`relative w-full md:w-1/2 md:px-4 ${
                index % 2 === 0 ? 'md:text-left' : 'md:ml-40 text-left'
              }`}
            >
              <div className="absolute top-[-2rem] left-2 md:left-5 text-wiz-white text-xl md:text-2xl font-bold">
                {item.year}
              </div>
              <div className="border border-wiz-white border-opacity-20 shadow-wiz-red rounded-lg p-4 bg-wiz-white bg-opacity-10 text-wiz-white text-sm leading-relaxed whitespace-pre-line shadow-md mt-1 mb-5 md:mt-2 break-keep">
                {item.content.map((entry) => {
                  return typeof entry === 'string' ? (
                    <div
                      className="text-sm md:text-lg lg:text-xl mb-1"
                      key={entry}
                    >
                      {entry}
                    </div>
                  ) : (
                    <div className="mb-4" key={entry.title}>
                      {entry.title && (
                        <strong className="font-bold mb-2">
                          {entry.title}
                        </strong>
                      )}
                      {entry.content && <div>{entry.content}</div>}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-wiz-red rounded-full border-4 border-wiz-black hidden md:block" />
          </div>
        ))}
      </div>
    </div>
  );
};

export { TeamHistoryTab };
