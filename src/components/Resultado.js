import { Button, Progress } from 'antd';
import { Link } from 'react-router-dom';
import Contador from './Contador';

export default function Resultado({ porcentaje, fVerResultados, tiempo }) {
  return (
    <>
      <h1>Resultado</h1>

      <Contador min={tiempo.min} sec={tiempo.sec} />
      <div>
        <Progress type="circle" percent={porcentaje} />
      </div>
      <div>
        <Button onClick={fVerResultados}>LeaderBoard</Button>
        <Link to="/">
          <Button>Inicio</Button>
        </Link>
      </div>
    </>
  );
}
