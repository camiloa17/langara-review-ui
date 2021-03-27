import { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import styles from '../SharedComponents/Styles/sharedStyles.module.css';
export default function Publish() {
  const [games, setGames] = useState([]);
  const [gameToWrite, setGameToWrite] = useState('');
  const [users, setUsers] = useState([]);
  const [userWhoWrites, setUserWhoWrites] = useState('');
  const [supervisor, setSupervisor] = useState('');
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState('');

  useEffect(() => {
    const getData = async () => {
      const data = await fetch('./api/game/');
      const read = await data.json();
      setGames(read);
    };
    getData();
  }, []);
  useEffect(() => {
    const getData = async () => {
      const data = await fetch('./api/users/');
      const read = await data.json();
      setUsers(read);
    };
    getData();
  }, []);

  const onSubmitCreate = async (e) => {
    e.preventDefault();
    const data = {
      game: gameToWrite,
      title: title,
      rating: rating,
      content: content,
      author: userWhoWrites,
      supervisor: supervisor,
    };
    const submit = await fetch(`./api/reviews/`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const read = await submit.json();
    if (read) {
      setGameToWrite('');
      setUserWhoWrites('');
      setSupervisor('');
      setTitle('');
      setRating(0);
      setContent('');
    }
  };
  return (
    <div style={{ padding: '10px' }}>
      <div className={styles.boxWithShadow} style={{ marginBottom: '20px' }}>
        <h2>Write a Review</h2>
        <Form.Group>
          <Form.Label>Select game to write about</Form.Label>
          <Form.Control
            as='select'
            value={gameToWrite}
            onChange={(e) => setGameToWrite(e.target.value)}
          >
            <option></option>
            {games.map((game) => (
              <option key={game.gameID} value={game.gameID}>
                {game.gamename}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Select your name</Form.Label>
          <Form.Control
            as='select'
            value={userWhoWrites}
            onChange={(e) => setUserWhoWrites(e.target.value)}
          >
            <option></option>
            {users.map((user) => (
              <option key={user.employeeID} value={user.employeeID}>
                {user.employeename}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Select your supervisor</Form.Label>
          <Form.Control
            as='select'
            value={supervisor}
            onChange={(e) => setSupervisor(e.target.value)}
          >
            <option></option>
            {users.map((user) => (
              <option key={user.employeeID} value={user.employeeID}>
                {user.employeename}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form onSubmit={onSubmitCreate}>
          <Form.Group>
            <Form.Label>Review Title</Form.Label>
            <Form.Control
              type='text'
              placeholder='Write the title here'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Game Rating: {rating}</Form.Label>
            <Form.Control
              type='range'
              max={5}
              min={0}
              step={0.1}
              placeholder='Write the review here'
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Content</Form.Label>
            <Form.Control
              as='textarea'
              rows={8}
              placeholder='Write the content here'
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Create
          </Button>
        </Form>
      </div>
    </div>
  );
}
