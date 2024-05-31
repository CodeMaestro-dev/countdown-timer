export default function TimerInput({ changeHrs, changeMin, changeSec, start, setMessage }) {
  return (
    <div>
      <input
        type="number"
        placeholder="0h"
        className=" bg-gradient-to-r from-[#28272F] to-[#040404] p-3 text-white text-center w-[100px]"
        min="0"
        onInput={(e) => {
          if (start) {
            e.target.value = "";
            setMessage("You need to stop the timer before you can set a new one or edit this one.");
          } else {
            changeHrs(e.target.value);
          }
        }}
      />
      <input
        type="number"
        placeholder="0m"
        className=" bg-gradient-to-r from-[#040404] to-[#28272F] p-3 text-white text-center w-[100px]"
        min="0"
        onInput={(e) => {
          if (start) {
            e.target.value = "";
            setMessage("You need to stop the timer before you can set a new one or edit this one.");
          } else {
            changeMin(e.target.value);
          }
        }}
      />
      <input
        type="number"
        placeholder="0s"
        className=" bg-gradient-to-r from-[#040404] to-[#28272F] p-3 text-white text-center w-[100px]"
        min="0"
        onInput={(e) => {
          if (start) {
            e.target.value = "";
            setMessage("You need to stop the timer before you can set a new one or edit this one.");
          } else {
            changeSec(e.target.value);
          }
        }}
      />
    </div>
  );
}
