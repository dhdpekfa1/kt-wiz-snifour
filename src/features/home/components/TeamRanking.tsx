function TeamRanking() {
  return (
    <div className="w-full h-[25%] flex items-end justify-between bg-wiz-red text-white pr-4 py-4">
      <div className="flex flex-col items-center justify-center relative">
        <img
          src="https://www.ktwiz.co.kr/v2/imgs/img-score@2x.png"
          alt=""
          className="w-24 translate-x-3 -translate-y-3"
        />
        <div className="absolute bottom-0 -right-2 bg-white text-wiz-red px-2 rounded-full font-extrabold">
          5위
        </div>
      </div>
      <div className="flex flex-col items-end gap-4">
        <p className="text-2xl font-extrabold">72승 70패 2무</p>
        <div className="flex items-center gap-2 text-xs font-bold">
          <p>총 144경기</p>
          <p>승률 0.507</p>
        </div>
      </div>
    </div>
  );
}

export { TeamRanking };
