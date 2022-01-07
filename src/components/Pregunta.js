import { Button } from 'antd';
import './Pregunta.css';

export default function Pregunta({
  pregunta,
  fCambiarPregunta,
  respuestas = [],
}) {
  return (
    <>
      <h1>Pregunta {pregunta.id}</h1>
      {respuestas.map(e => (
        <Button size="large" key={e.id} onClick={() => fCambiarPregunta(e)}>
          <div className="boton">{e.repuesta}</div>
        </Button>
      ))}
    </>
  );
}
