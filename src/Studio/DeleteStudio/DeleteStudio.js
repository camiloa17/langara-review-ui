import {  useState } from 'react';
import {  Form, Button } from 'react-bootstrap';

export default function DeleteStudio(props){
    const [studioToDelete, setStudioToDelete] = useState('');
    const onSubmitDelete = async (e) => {
        e.preventDefault();
        if (studioToDelete.length > 1) {
          const submit = await fetch(`./api/studio/${studioToDelete}`, {
            method: 'delete',
            headers: {
              'Content-type': 'application/json',
            },
          });
          const read = await submit.json();
    
          props.setRefresh(read);
          setStudioToDelete('');
        }
      };
    return(
        <>
        <h2>Delete Studio</h2>
        <div>
          <Form onSubmit={onSubmitDelete}>
            <Form.Group>
              <Form.Label>Studios</Form.Label>
              <Form.Control
                as='select'
                value={studioToDelete}
                onChange={(e) => setStudioToDelete(e.target.value)}
              >
                <option></option>
                {props.studios.map((studio) => (
                  <option key={studio.studioname}>{studio.studioname}</option>
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