import { Button } from 'antd';
import './Pregunta.css';

export default function Pregunta({
  pregunta,
  fCambiarPregunta,
  respuestas = [],
}) {
  return (
    <>
      <h1>{pregunta.enunciado}</h1>
      {respuestas.map(e => (
        <Button size="large" key={e._id} onClick={() => fCambiarPregunta(e)}>
          <div className="boton">{e.nombre}</div>
        </Button>
      ))}
    </>
  );
}
