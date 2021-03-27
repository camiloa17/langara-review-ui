import {  useState } from 'react';
import {  Form, Button } from 'react-bootstrap';

export default function CreatePlatform(props) {
    const [platformName, setPlatformName] = useState('');


    const onSubmitCreate = async (e) => {
        e.preventDefault();
        if (platformName.length > 1) {
          const submit = await fetch('./api/platform', {
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              platformName: platformName.charAt(0).toUpperCase() + platformName.slice(1),
            }),
          });
          const read = await submit.json();
          props.setRefresh(read);
          setPlatformName('');
        }
      };
  return (
    <>
      <h2>Create Platform</h2>
      <div>
        <Form onSubmit={onSubmitCreate}>
          <Form.Group>
            <Form.Label>Platform</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter platform name'
              value={platformName}
              onChange={(e) => setPlatformName(e.target.value)}
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
