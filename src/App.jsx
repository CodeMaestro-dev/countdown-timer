import { useState, useEffect } from "react";

import TimerControls from "./assets/components/TimerControls";
import TimerDisplay from "./assets/components/TimerDisplay";
import TimerInput from "./assets/components/TimerInput";

export default function App() {
  const [start, setStart] = useState(false);
  const [reset, setReset] = useState(false);
  const [message, setMessage] = useState("");
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hrs, setHrs] = useState(0);

  useEffect(() => {
    if (start) {
      if (sec != 0) {
        setTimeout(() => {
          setSec(sec - 1);
        }, 1000);
      }
      if (sec == 0 && min != 0) {
        setMin(min - 1);
        setSec(59);
      }
      if (sec == 0 && min == 0 && hrs != 0) {
        setHrs(hrs - 1);
        setMin(59);
        setSec(59);
      }
    }
  }, [start, sec, min, hrs]);

  const startControl = () => {
    if (sec == 0 && min == 0 && hrs == 0) {
      setStart(false);
    } else {
      setStart(true);
      if (start) {
        setStart(false);
      }
    }
  };

  const resetControl = () => {
    setStart(false);
    setHrs(0);
    setMin(0);
    setSec(0);
    console.log(start, hrs, min, sec);
  };

  const changeHrs = (input) => {
    setHrs(input);
  };
  const changeMin = (input) => {
    setMin(input);
  };
  const changeSec = (input) => {
    setSec(input);
  };

  // console.log(timer);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center gap-5 bg-gradient-to-r from-[#040404] to-[#28272F]">
      <p className="text-white">Welcome to Tioluwani&apos;s Countdown Timer</p>
      <TimerDisplay hrs={hrs} min={min} sec={sec} reset={reset} />
      <TimerInput changeHrs={changeHrs} changeMin={changeMin} changeSec={changeSec} start={start} />
      <TimerControls startControl={startControl} resetControl={resetControl} start={start} reset={reset} />
    </div>
  );
}
