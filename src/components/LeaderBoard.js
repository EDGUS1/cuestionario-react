import { Badge, Divider, List } from 'antd';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function LeaderBoard({ id }) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://sad-kowalevski-420b1c.netlify.app/.netlify/functions/api/leaderboard/c/${id}`
    )
      .then(res => res.json())
      .then(json => {
        // console.log(json);
        setData(json);
      });
  }, []);

  return (
    <>
      <Divider plain>
        <h1>LeaderBoard</h1>
      </Divider>
      <List
        footer={<Link to="/">Inicio</Link>}
        bordered
        dataSource={data.participantes}
        renderItem={item => (
          <Badge.Ribbon text={item.puntos}>
            <List.Item>
              <List.Item.Meta
                title={<span>{item.username}</span>}
                description={`${item.minuto}:${item.segundo}`}
              />
            </List.Item>
          </Badge.Ribbon>
        )}
      />
    </>
  );
}
