export default function Contador({ min, sec }) {
  return (
    <div>
      {min < 10 ? `0${min}` : min} : {sec < 10 ? `0${sec}` : sec}
    </div>
  );
}
