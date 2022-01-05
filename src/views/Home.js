import { Button, Card, Col, Input, Row } from 'antd';
import { Link } from 'react-router-dom';
import './Home.css';
export default function Home() {
  const code = new Date().getTime();
  return (
    <Row align="middle" id="fila">
      <Col>
        <Card>
          <Input placeholder="Ingresa el código" />
          <Link to={`${code}`}>
            <Button className="ingresar">Ingresar</Button>
          </Link>
        </Card>
      </Col>
      {/* <Col>
        <Link to="/login">login</Link>
      </Col> */}
    </Row>
  );
}
