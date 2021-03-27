import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function UpdateStudio(props) {
  const [studioToUpdate, setStudioToUpdate] = useState('');
  const [studioUpdateValue, setStudioUpdateValue] = useState('');
  const onSubmitUpdate = async (e) => {
    e.preventDefault();
    if (studioToUpdate.length > 1) {
      const submit = await fetch(`./api/studio/${studioToUpdate}`, {
        method: 'put',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ studioname: studioUpdateValue }),
      });
      const read = await submit.json();

      props.setRefresh(read);
      setStudioUpdateValue('');
    }
  };
  return (
    <>
      <h2>Update Studio</h2>
      <p>Select the studio to update and write bellow the new value.</p>
      <div>
        <Form onSubmit={onSubmitUpdate}>
          <Form.Group>
            <Form.Label>Studios</Form.Label>
            <Form.Control
              as='select'
              value={studioToUpdate}
              onChange={(e) => setStudioToUpdate(e.target.value)}
            >
              <option></option>
              {props.studios.map((studio) => (
                <option key={studio.studioname}>{studio.studioname}</option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>New Studio name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter new studio name'
              value={studioUpdateValue}
              onChange={(e) => setStudioUpdateValue(e.target.value)}
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
