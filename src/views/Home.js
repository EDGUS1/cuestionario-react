import { Button, Card, Col, Input, Row } from 'antd';
import './Home.css';
export default function Home() {
  return (
    <Row align="middle" id="fila">
      <Col>
        <Card>
          <Input placeholder="Ingresa el código" />
          <Button className="ingresar">Ingresar</Button>
        </Card>
      </Col>
    </Row>
  );
}
