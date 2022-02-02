import { Badge, Divider, List } from 'antd';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_URL, DEV_API_URL } from '../constants';

export default function LeaderBoard({ id }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const URL = `${API_URL}/leaderboard/l/${id}`;
    fetch(URL)
      .then(res => res.json())
      .then(json => {
        setData([...json]);
      });
  }, [id]);

  return (
    <>
      <Divider plain>
        <h1>LeaderBoard</h1>
      </Divider>
      <List
        footer={<Link to="/">Inicio</Link>}
        bordered
        dataSource={data}
        renderItem={item => (
          <Badge.Ribbon text={item.participantes.puntos}>
            <List.Item>
              <List.Item.Meta
                title={<span>{item.participantes.username}</span>}
                description={`${item.participantes.minuto}:${item.participantes.segundo}`}
                description={`${
                  item.participantes.minuto < 10
                    ? `0${item.participantes.minuto}`
                    : item.participantes.minuto
                } : ${
                  item.participantes.segundo < 10
                    ? `0${item.participantes.segundo}`
                    : item.participantes.segundo
                }`}
              />
            </List.Item>
          </Badge.Ribbon>
        )}
      />
    </>
  );
}
