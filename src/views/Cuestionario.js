// import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Contador from './../components/Contador';
import Pregunta from './../components/Pregunta';
import Resultado from './../components/Resultado';
import LeaderBoard from './../components/LeaderBoard';

import './Cuestionario.css';

export default function Cuestionario() {
  // let params = useParams();
  const [preguntaActual, setPreguntaActual] = useState({});
  const [ultimaPregunta, setUltimaPregunta] = useState(false);
  const [resultados, setResultados] = useState(false);

  const preguntas = [
    { id: 1, nombre: 'Pregunta 1' },
    { id: 2, nombre: 'Pregunta 2' },
    { id: 3, nombre: 'Pregunta 3' },
    { id: 4, nombre: 'Pregunta 4' },
  ];
  useEffect(() => {
    setPreguntaActual(preguntas[0]);
  }, []);

  return (
    <div className="contenedor">
      {!ultimaPregunta ? <Contador /> : ''}
      {!ultimaPregunta ? (
        preguntaActual.id < preguntas.length ? (
          <Pregunta
            pregunta={preguntaActual}
            fCambiarPregunta={res =>
              setPreguntaActual(preguntas[preguntaActual.id])
            }
          />
        ) : (
          <Pregunta
            pregunta={preguntaActual}
            fCambiarPregunta={res => setUltimaPregunta(true)}
          />
        )
      ) : !resultados ? (
        <Resultado fVerResultados={() => setResultados(true)} />
      ) : (
        <div className="mitad">
          <LeaderBoard />
        </div>
      )}
    </div>
  );
}
