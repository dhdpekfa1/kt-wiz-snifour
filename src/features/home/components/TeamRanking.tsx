function TeamRanking() {
  return (
    <div className="w-[600px] flex items-end justify-between px-8 pt-4 pb-6 text-[#d60c0c] font-extrabold">
      <div className="flex flex-col items-center justify-center">
        <img
          src="https://www.ktwiz.co.kr/v2/imgs/img-score@2x.png"
          alt=""
          className="w-32 translate-x-3"
        />
        <div className="text-2xl">5위</div>
      </div>
      <div className="flex flex-col items-end gap-4">
        <p className="text-5xl">72승 70패 2무</p>
        <div className="flex items-center gap-2 text-sm">
          <p>총 144경기</p>
          <p>승률 0.507</p>
        </div>
      </div>
    </div>
  );
}

export { TeamRanking };
