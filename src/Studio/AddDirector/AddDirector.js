import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function AddDirector(props) {
  const [studioToAddDirector, setStudioToAddDirector] = useState('');
  const [directorname, setdirectronameValue] = useState('');

  const onSubmitUpdate = async (e) => {
    e.preventDefault();
    if (studioToAddDirector.length > 1) {
      const submit = await fetch(`./api/studio/director/${studioToAddDirector}`, {
        method: 'post',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ directorname }),
      });
      const read = await submit.json();

      props.setRefresh(read);
      setdirectronameValue('');
    }
  };
  return (
    <>
      <h2>Add Director</h2>
      <p>Select the studio to add the director and write bellow the new value.</p>
      <div>
        <Form onSubmit={onSubmitUpdate}>
          <Form.Group>
            <Form.Label>Studios</Form.Label>
            <Form.Control
              as='select'
              value={studioToAddDirector}
              onChange={(e) => setStudioToAddDirector(e.target.value)}
            >
              <option></option>
              {props.studios.map((studio) => (
                <option key={studio.studioname}>{studio.studioname}</option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Director</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter director name'
              value={directorname}
              onChange={(e) => setdirectronameValue(e.target.value)}
            />
          </Form.Group>

          <Button variant='primary' type='submit'>
            Add
          </Button>
        </Form>
      </div>
    </>
  );
}
