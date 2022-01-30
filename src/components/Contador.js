// https://medium.com/programming-essentials/how-to-create-a-digital-clock-with-react-hooks-aa30f76cfe3f
export default function Contador({ min, sec }) {
  return (
    <div>
      {min < 10 ? `0${min}` : min} : {sec < 10 ? `0${sec}` : sec}
    </div>
  );
}
