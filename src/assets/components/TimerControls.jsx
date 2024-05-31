export default function TimerControls({ startControl, resetControl, start }) {
  return (
    <div className="flex gap-14">
      <button className="rounded-lg py-2 px-10 bg-gradient-to-r from-[#28272F] to-[#040404] text-white uppercase" onClick={startControl}>
        {!start ? "start" : "stop"}
      </button>
      <button className="rounded-lg py-2 px-10 bg-gradient-to-r from-[#040404] to-[#040404] text-white uppercase" onClick={resetControl}>
        Reset
      </button>
    </div>
  );
}
