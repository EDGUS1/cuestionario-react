import { Badge, Divider, List } from 'antd';
import { Link } from 'react-router-dom';

export default function LeaderBoard() {
  const data = [
    { name: 'Racing', time: '2:10', correct: 10 },
    { name: 'car', time: '2:12', correct: 90 },
    { name: 'sprays', time: '3:10', correct: 10 },
    { name: 'burning', time: '5:10', correct: 100 },
    { name: 'fuel', time: '10:10', correct: 1 },
  ];
  return (
    <>
      <Divider plain>
        <h1>LeaderBoard</h1>
      </Divider>
      {/* <Link to="/">Inicio</Link>
      <Divider plain></Divider> */}
      <List
        footer={<Link to="/">Inicio</Link>}
        bordered
        dataSource={data}
        renderItem={item => (
          <Badge.Ribbon text={item.correct}>
            <List.Item>
              <List.Item.Meta
                title={<a href="#">{item.name}</a>}
                description={item.time}
              />
            </List.Item>
          </Badge.Ribbon>
        )}
      />
    </>
  );
}
