import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Contador from './../components/Contador';
import Pregunta from './../components/Pregunta';
import Resultado from './../components/Resultado';
import LeaderBoard from './../components/LeaderBoard';

import './Cuestionario.css';

export default function Cuestionario() {
  //MDijFSWRBnJXise
  let params = useParams();
  const [preguntas, setPreguntas] = useState([]);
  const [preguntaActual, setPreguntaActual] = useState({});
  const [ultimaPregunta, setUltimaPregunta] = useState(false);
  const [resultados, setResultados] = useState(false);
  const [correctas, setCorrectas] = useState(0);
  const [contador, setContador] = useState(1);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [tiempo, setTiempo] = useState({ min: 0, sec: 0 });
  const [cuest, setCuest] = useState({});

  useEffect(() => {
    // console.log(params);

    // setPreguntaActual(preguntas[0]);
    fetch(
      `https://sad-kowalevski-420b1c.netlify.app/.netlify/functions/api/cuestionario/code/${params.param}`
    )
      .then(res => res.json())
      .then(json => {
        // console.log(json);
        setPreguntas(json.preguntas);
        setCuest(json);
        setPreguntaActual(json.preguntas[0]);
      });
  }, [params]);

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
    <div className="contenedor">
      {!ultimaPregunta ? <Contador min={min} sec={sec} /> : ''}
      {!ultimaPregunta ? (
        contador < preguntas.length ? (
          <Pregunta
            pregunta={preguntaActual}
            respuestas={preguntaActual.respuestas}
            fCambiarPregunta={res => {
              if (res.correct) setCorrectas(correctas + 1);
              setPreguntaActual(preguntas[contador]);
              setContador(contador + 1);
            }}
          />
        ) : (
          <Pregunta
            pregunta={preguntaActual}
            respuestas={preguntaActual.respuestas}
            fCambiarPregunta={res => {
              setTiempo({ min, sec });
              if (res.correct) setCorrectas(correctas + 1);
              setUltimaPregunta(true);
              clearInterval(timer);
            }}
          />
        )
      ) : !resultados ? (
        <Resultado
          porcentaje={(correctas / preguntas.length) * 100}
          tiempo={tiempo}
          fVerResultados={() => setResultados(true)}
        />
      ) : (
        <div className="mitad">
          <LeaderBoard id={cuest._id} />
        </div>
      )}
    </div>
  );
}
