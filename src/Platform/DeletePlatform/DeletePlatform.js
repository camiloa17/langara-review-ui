import {  useState } from 'react';
import {  Form, Button } from 'react-bootstrap';

export default function DeletePlatform(props){
    const [platformToDelete, setPlatformToDelete] = useState('');
    const onSubmitDelete = async (e) => {
        e.preventDefault();
        if (platformToDelete.length > 1) {
          const submit = await fetch(`./api/platform/${platformToDelete}`, {
            method: 'delete',
            headers: {
              'Content-type': 'application/json',
            },
          });
          const read = await submit.json();
    
          props.setRefresh(read);
          setPlatformToDelete('');
        }
      };
    return(
        <>
        <h2>Delete Platforms</h2>
        <div>
          <Form onSubmit={onSubmitDelete}>
            <Form.Group>
              <Form.Label>Platforms</Form.Label>
              <Form.Control
                as='select'
                value={platformToDelete}
                onChange={(e) => setPlatformToDelete(e.target.value)}
              >
                <option></option>
                {props.platforms.map((plat) => (
                  <option key={plat.platformName}>{plat.platformName}</option>
                ))}
              </Form.Control>
            </Form.Group>

            <Button variant='primary' type='submit'>
              Delete
            </Button>
          </Form>
        </div>
        </>
    )
}