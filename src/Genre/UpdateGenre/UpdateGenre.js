import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function UpdateGenre(props) {
  const [genreToUpdate, setGenreToUpdate] = useState('');
  const [genreUpdateValue, setGenreUpdateValue] = useState('');
  const onSubmitUpdate = async (e) => {
    e.preventDefault();
    if (genreToUpdate.length > 1) {
      const submit = await fetch(`./api/genre/${genreToUpdate}`, {
        method: 'put',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ genrename: genreUpdateValue }),
      });
      const read = await submit.json();

      props.setRefresh(read);
      setGenreUpdateValue('');
    }
  };
  return (
    <>
      <h2>Update Genre</h2>
      <p>Select the genre to update and write bellow the new value.</p>
      <div>
        <Form onSubmit={onSubmitUpdate}>
          <Form.Group>
            <Form.Label>Genres</Form.Label>
            <Form.Control
              as='select'
              value={genreToUpdate}
              onChange={(e) => setGenreToUpdate(e.target.value)}
            >
              <option></option>
              {props.genres.map((gen) => (
                <option key={gen.genrename}>{gen.genrename}</option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>New Genre name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter new genre name'
              value={genreUpdateValue}
              onChange={(e) => setGenreUpdateValue(e.target.value)}
            />
          </Form.Group>

          <Button variant='primary' type='submit'>
            Update
          </Button>
        </Form>
      </div>
    </>
  );
}
