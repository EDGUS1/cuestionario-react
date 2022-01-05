import { useEffect, useState } from 'react';

export default function Contador() {
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  let timer;
  useEffect(() => {
    timer = setInterval(() => {
      setSec(sec + 1);
      if (sec >= 59) {
        setMin(min + 1);
        setSec(0);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [sec]);
  return (
    <div>
      {min < 10 ? `0${min}` : min} : {sec < 10 ? `0${sec}` : sec}
    </div>
  );
}
