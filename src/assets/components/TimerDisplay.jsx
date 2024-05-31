export default function TimerDisplay({ hrs, min, sec, reset }) {
  return (
    <div className="rounded-lg py-10 px-[67px] bg-gradient-to-r from-[#28272F] to-[#040404]">
      <p className="text-white text-4xl">
        {hrs}h {min}m {sec}s
      </p>
    </div>
  );
}
