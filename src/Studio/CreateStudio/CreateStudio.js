import {  useState } from 'react';
import {  Form, Button } from 'react-bootstrap';

export default function CreateStudio(props) {
    const [studioName, setStudioName] = useState('');


    const onSubmitCreate = async (e) => {
        e.preventDefault();
        if (studioName.length > 1) {
          const submit = await fetch('./api/studio', {
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              studioname: studioName.charAt(0).toUpperCase() + studioName.slice(1),
            }),
          });
          const read = await submit.json();
          props.setRefresh(read);
          setStudioName('');
        }
      };
  return (
    <>
      <h2>Create Studio</h2>
      <div>
        <Form onSubmit={onSubmitCreate}>
          <Form.Group>
            <Form.Label>Studio</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter studio name'
              value={studioName}
              onChange={(e) => setStudioName(e.target.value)}
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
