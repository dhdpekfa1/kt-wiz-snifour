function PlayerProfile() {
  return (
    <div className="w-1/4 flex flex-col">
      <div className="w-full h-[17rem] bg-wiz-white rounded-xl">image</div>
      <div className="flex flex-col gap-2 py-4">
        <div className="mb-4">
          <div className="flex justify-between text-2xl font-bold">
            <span>선수 이름</span>
            <span>No.99</span>
          </div>
          <span className="text-neutral-400">Player Name</span>
        </div>
        <div className="flex justify-between">
          <span>포지션</span>
          <span>투수</span>
        </div>
        <div className="flex justify-between">
          <span>생년월일</span>
          <span>2024.12.17</span>
        </div>
        <div className="flex justify-between">
          <span>체격</span>
          <span>188cm / 80kg</span>
        </div>
        <div className="flex justify-between">
          <span>출신교</span>
          <span className="max-w-48 text-right word-wrap">
            OOO초-OOO중-OOOO고-OOO대
          </span>
        </div>
      </div>
      <div>
        <h4 className="text-xl font-bold mb-2 relative z-0">
          2024 정규 리그 성적
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-wiz-red bg-opacity-50 -z-10" />
        </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus,
          expedita.
        </p>
      </div>
    </div>
  );
}

export { PlayerProfile };
