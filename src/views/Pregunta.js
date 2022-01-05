import { Button } from 'antd';
import './Pregunta.css';

export default function Pregunta({ pregunta, fCambiarPregunta }) {
  const respuestas = [
    {
      id: 1,
      repuesta: 'voisnvoisanvdis vapsovm vaosmvnop opamvpoas poavsd vano',
    },
    { id: 2, repuesta: 'aooaoa' },
    { id: 3, repuesta: 'ovaowonw apsodv vas' },
    { id: 4, repuesta: 'ovaowonw' },
    { id: 5, repuesta: 'aaa aois kamskd' },
  ];

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
