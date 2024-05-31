export default function TimerInput({ changeHrs, changeMin, changeSec }) {
  return (
    <div>
      <input
        type="number"
        placeholder="0h"
        className=" bg-gradient-to-r from-[#28272F] to-[#040404] p-3 text-white text-center w-[100px]"
        min="0"
        onInput={(e) => {
          changeHrs(e.target.value);
        }}
      />
      <input
        type="number"
        placeholder="0m"
        className=" bg-gradient-to-r from-[#040404] to-[#28272F] p-3 text-white text-center w-[100px]"
        min="0"
        onInput={(e) => {
          changeMin(e.target.value);
        }}
      />
      <input
        type="number"
        placeholder="0s"
        className=" bg-gradient-to-r from-[#040404] to-[#28272F] p-3 text-white text-center w-[100px]"
        min="0"
        onInput={(e) => {
          changeSec(e.target.value);
        }}
      />
    </div>
  );
}
