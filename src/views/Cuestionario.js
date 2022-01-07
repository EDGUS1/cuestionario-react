// import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Contador from './../components/Contador';
import Pregunta from './../components/Pregunta';
import Resultado from './../components/Resultado';
import LeaderBoard from './../components/LeaderBoard';

import './Cuestionario.css';

export default function Cuestionario() {
  // let params = useParams();
  //MDijFSWRBnJXise
  const [preguntaActual, setPreguntaActual] = useState({});
  const [ultimaPregunta, setUltimaPregunta] = useState(false);
  const [resultados, setResultados] = useState(false);
  const [correctas, setCorrectas] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [tiempo, setTiempo] = useState({ min: 0, sec: 0 });

  // console.log(name);
  const preguntas = [
    {
      id: 1,
      nombre: 'Pregunta 1',
      respuestas: [
        {
          id: 1,
          repuesta: 'voisnvoisanvdis vapsovm vaosmvnop opamvpoas poavsd vano',
          correct: true,
        },
        { id: 2, repuesta: 'aooaoa', correct: false },
        { id: 3, repuesta: 'ovaowonw apsodv vas', correct: false },
        { id: 4, repuesta: 'ovaowonw', correct: false },
        { id: 5, repuesta: 'aaa aois kamskd', correct: false },
      ],
    },
    {
      id: 2,
      nombre: 'Pregunta 2',
      respuestas: [
        {
          id: 11,
          repuesta: 'voisnvoisanvdis vapsovm vaosmvnop opamvpoas poavsd vano',
          correct: false,
        },
        { id: 21, repuesta: 'aooaoa', correct: false },
        { id: 31, repuesta: 'ovaowonw apsodv vas', correct: true },
        { id: 41, repuesta: 'ovaowonw', correct: false },
        { id: 51, repuesta: 'aaa aois kamskd', correct: false },
      ],
    },
    {
      id: 3,
      nombre: 'Pregunta 3',
      respuestas: [
        {
          id: 12,
          repuesta: 'voisnvoisanvdis vapsovm vaosmvnop opamvpoas poavsd vano',
          correct: false,
        },
        { id: 22, repuesta: 'aooaoa', correct: false },
        { id: 32, repuesta: 'ovaowonw apsodv vas', correct: true },
        { id: 42, repuesta: 'ovaowonw', correct: false },
        { id: 52, repuesta: 'aaa aois kamskd', correct: false },
      ],
    },
    {
      id: 4,
      nombre: 'Pregunta 4',
      respuestas: [
        {
          id: 13,
          repuesta: 'voisnvoisanvdis vapsovm vaosmvnop opamvpoas poavsd vano',
          correct: false,
        },
        { id: 23, repuesta: 'aooaoa', correct: false },
        { id: 33, repuesta: 'ovaowonw apsodv vas', correct: true },
        { id: 43, repuesta: 'ovaowonw', correct: false },
        { id: 53, repuesta: 'aaa aois kamskd', correct: false },
      ],
    },
  ];

  useEffect(() => {
    setPreguntaActual(preguntas[0]);
  }, []);

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
        preguntaActual.id < preguntas.length ? (
          <Pregunta
            pregunta={preguntaActual}
            respuestas={preguntaActual.respuestas}
            fCambiarPregunta={res => {
              if (res.correct) setCorrectas(correctas + 1);
              setPreguntaActual(preguntas[preguntaActual.id]);
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
          <LeaderBoard />
        </div>
      )}
    </div>
  );
}
