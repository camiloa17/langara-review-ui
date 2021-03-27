import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function UpdatePlatform(props) {
  const [platformToUpdate, setPlatformToUpdate] = useState('');
  const [platformUpdateValue, setPlatformUpdateValue] = useState('');
  const onSubmitUpdate = async (e) => {
    e.preventDefault();
    if (platformToUpdate.length > 1) {
      const submit = await fetch(`./api/platform/${platformToUpdate}`, {
        method: 'put',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ platformName: platformUpdateValue }),
      });
      const read = await submit.json();

      props.setRefresh(read);
      setPlatformUpdateValue('');
    }
  };
  return (
    <>
      <h2>Update Platform</h2>
      <p>Select the platform to update and write bellow the new value.</p>
      <div>
        <Form onSubmit={onSubmitUpdate}>
          <Form.Group>
            <Form.Label>Platforms</Form.Label>
            <Form.Control
              as='select'
              value={platformToUpdate}
              onChange={(e) => setPlatformToUpdate(e.target.value)}
            >
              <option></option>
              {props.platforms.map((plat) => (
                <option key={plat.platformName}>{plat.platformName}</option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>New Platform name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter new platform name'
              value={platformUpdateValue}
              onChange={(e) => setPlatformUpdateValue(e.target.value)}
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
