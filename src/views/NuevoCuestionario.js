import { Button, DatePicker, Divider, Form, Input, Radio, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';
import TextArea from 'antd/lib/input/TextArea';
import axios from 'axios';
import { API_URL } from '../constants';

export default function NuevoCuestionario() {
  const [value, setValue] = useState(1);

  // const onFormLayoutChange = props => {
  //   console.log({ props });
  // };

  const onFinish = values => {
    //TODO: CAMBIAR USUARIO CREACION
    axios
      .post(`${API_URL}/cuestionario`, {
        ...values,
        usuario: '61d68450f4200ddc64e58a86',
        preguntas: values['preguntas'].map(e => {
          return {
            enunciado: e['enunciado'],
            respuestas: [
              { nombre: e['respuesta1'] || '', correct: e['correct'] === 1 },
              { nombre: e['respuesta2'] || '', correct: e['correct'] === 2 },
              { nombre: e['respuesta3'] || '', correct: e['correct'] === 3 },
              { nombre: e['respuesta4'] || '', correct: e['correct'] === 4 },
              { nombre: e['respuesta5'] || '', correct: e['correct'] === 5 },
            ],
          };
        }),
      })
      .then(function (response) {
        console.log(response['data']['code']);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onChange = e => {
    setValue(e.target.value);
  };
  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      // onValuesChange={onFormLayoutChange}
      size="large"
      style={{ width: '100%', height: '80%' }}
      name="dynamic_form_nest_item"
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        label="Nombre"
        name="nombre"
        rules={[
          {
            required: true,
            message: 'No se ingreso el nombre del cuestioanrio',
          },
        ]}
      >
        <Input placeholder="Ingrese el nombre del cuestionario" />
      </Form.Item>

      <Form.Item label="Fecha de inicio" name="fechaIncio">
        <DatePicker />
      </Form.Item>
      <Form.Item label="Fecha de cierre" name="fechaFin">
        <DatePicker />
      </Form.Item>

      <Form.Item label="Preguntas">
        <Form.List name="preguntas">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <div key={key}>
                  <Divider>Nueva pregunta</Divider>

                  <Form.Item
                    {...restField}
                    name={[name, 'enunciado']}
                    rules={[
                      {
                        required: true,
                        message: 'No contiene el enunciado de la pregunta',
                      },
                    ]}
                  >
                    <TextArea
                      placeholder="Ingrese el enunciado de la pregunta"
                      autoSize
                    ></TextArea>
                  </Form.Item>
                  <Space
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: 8,
                    }}
                    align="baseline"
                  >
                    <Form.Item
                      label="Respuesta correcta"
                      {...restField}
                      name={[name, 'correct']}
                    >
                      <Radio.Group onChange={onChange} value={value}>
                        <Radio value={1}>1</Radio>
                        <Radio value={2}>2</Radio>
                        <Radio value={3}>3</Radio>
                        <Radio value={4}>4</Radio>
                        <Radio value={5}>5</Radio>
                      </Radio.Group>
                    </Form.Item>
                    <MinusCircleOutlined onClick={() => remove(name)} />
                  </Space>

                  <Form.Item
                    {...restField}
                    name={[name, 'respuesta1']}
                    rules={[
                      { required: true, message: 'No se ingreso la respuesta' },
                    ]}
                  >
                    <Input placeholder="Respuesta 1" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, 'respuesta2']}
                    rules={[
                      { required: true, message: 'No se ingreso la respuesta' },
                    ]}
                  >
                    <Input placeholder="Respuesta 2" />
                  </Form.Item>
                  <Form.Item {...restField} name={[name, 'respuesta3']}>
                    <Input placeholder="Respuesta 3" />
                  </Form.Item>
                  <Form.Item {...restField} name={[name, 'respuesta4']}>
                    <Input placeholder="Respuesta 4" />
                  </Form.Item>
                  <Form.Item {...restField} name={[name, 'respuesta5']}>
                    <Input placeholder="Respuesta 5" />
                  </Form.Item>
                </div>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Agregar Pregunta
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 4 }}>
        <Button type="primary" htmlType="submit">
          Guardaar
        </Button>
      </Form.Item>
    </Form>
  );
}
