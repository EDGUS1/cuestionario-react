import { useState } from 'react';

import { Button, Card, Col, Input, Row } from 'antd';
import { Link } from 'react-router-dom';

import './Home.css';

export default function Home() {
  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [codeValid, setCodeValid] = useState(false);

  const handleChange = e => {
    setCode(e.target.value);
  };

  const handleChangeAName = e => {
    setName(e.target.value);
  };

  const handleButton = e => {
    setCodeValid(true);
  };

  return (
    <Row align="middle" id="fila">
      <Col>
        <Card>
          <Input
            placeholder="Ingresa el código"
            value={code}
            onChange={handleChange}
          />
          {!codeValid ? (
            <Button onClick={handleButton} className="ingresar">
              Comprobar código
            </Button>
          ) : (
            <>
              <Input
                placeholder="Ingrese su nombre"
                value={name}
                onChange={handleChangeAName}
              />
              <Link to={code}>
                <Button
                  className="ingresar"
                  onClick={() => sessionStorage.setItem('username', name)}
                >
                  Ingresar
                </Button>
              </Link>
            </>
          )}
        </Card>
      </Col>
    </Row>
  );
}
