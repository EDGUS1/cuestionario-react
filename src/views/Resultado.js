import { Button, Progress } from 'antd';
import { Link } from 'react-router-dom';

export default function Resultado({ fVerResultados }) {
  return (
    <>
      <h1>Resultado</h1>
      <div>
        <Progress type="circle" percent={75} />
      </div>
      <div>
        <Button onClick={fVerResultados}>Puntuacion?</Button>
        <Link to="/">Inicio</Link>
      </div>
    </>
  );
}
