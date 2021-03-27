import {  useState } from 'react';
import {  Form, Button } from 'react-bootstrap';

export default function CreateGenre(props) {
    const [genreName, setGenreName] = useState('');


    const onSubmitCreate = async (e) => {
        e.preventDefault();
        if (genreName.length > 1) {
          const submit = await fetch('./api/genre', {
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              genrename: genreName.charAt(0).toUpperCase() + genreName.slice(1),
            }),
          });
          const read = await submit.json();
          props.setRefresh(read);
          setGenreName('');
        }
      };
  return (
    <>
      <h2>Create Genre</h2>
      <div>
        <Form onSubmit={onSubmitCreate}>
          <Form.Group>
            <Form.Label>Genre</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter genre name'
              value={genreName}
              onChange={(e) => setGenreName(e.target.value)}
            />
          </Form.Group>

          <Button variant='primary' type='submit'>
            Create
          </Button>
        </Form>
      </div>
    </>
  );
}
