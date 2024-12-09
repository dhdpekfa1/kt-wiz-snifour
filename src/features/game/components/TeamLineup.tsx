interface TeamLineupProps {
  data: {
    logoUrl: string;
    catcher: string; // 포수
    firstBase: string; // 1루수
    secondBase: string; // 2루수
    thirdBase: string; // 3루수
    shortstop: string; // 유격수
    leftField: string; // 좌익수
    centerField: string; // 중견수
    rightField: string; // 우익수
    designatedHitter: string; // 지명타자
    pitcher: string; // 투수
  };
}

const TeamLineup = ({ data }: TeamLineupProps) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <img src={data.logoUrl} alt="team logo" className="w-24 h-24" />
      <div className="w-full relative mt-2 p-10 bg-[#35383e] rounded-xl">
        <img src="/assets/ground.png" alt="diamond" className="w-full h-full" />
        {/* label */}
        <div className="border border-l-2 border-l-wiz-red bg-wiz-white w-fit px-2 rounded absolute bottom-24 left-44">
          <p className="">2. {data.catcher}</p>
        </div>
        <div className="border border-l-2 border-l-wiz-red bg-wiz-white w-fit px-2 rounded absolute bottom-36 right-24">
          <p className="">3. {data.firstBase}</p>
        </div>
        <div className="border border-l-2 border-l-wiz-red bg-wiz-white w-fit px-2 rounded absolute bottom-48 right-20">
          <p className="">4. {data.secondBase}</p>
        </div>
        <div className="border border-l-2 border-l-wiz-red bg-wiz-white w-fit px-2 rounded absolute bottom-36 left-24">
          <p className="">5. {data.thirdBase}</p>
        </div>
        <div className="border border-l-2 border-l-wiz-red bg-wiz-white w-fit px-2 rounded absolute bottom-48 left-24">
          <p className="">6. {data.shortstop}</p>
        </div>
        <div className="border border-l-2 border-l-wiz-red bg-wiz-white w-fit px-2 rounded absolute top-36 left-16">
          <p className="">7. {data.leftField}</p>
        </div>
        <div className="border border-l-2 border-l-wiz-red bg-wiz-white w-fit px-2 rounded absolute top-32 left-44">
          <p className="">8. {data.centerField}</p>
        </div>
        <div className="border border-l-2 border-l-wiz-red bg-wiz-white w-fit px-2 rounded absolute top-36 right-12">
          <p className="">9. {data.rightField}</p>
        </div>

        <div className="border border-l-2 border-l-wiz-red bg-wiz-white w-fit px-2 rounded absolute bottom-20 left-20">
          <p className="">D. {data.designatedHitter}</p>
        </div>
        <div className="border border-l-2 border-l-wiz-red bg-wiz-white w-fit px-2 rounded absolute bottom-40 left-44">
          <p className="">P. {data.pitcher}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamLineup;
