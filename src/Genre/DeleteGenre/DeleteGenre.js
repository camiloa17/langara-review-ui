import {  useState } from 'react';
import {  Form, Button } from 'react-bootstrap';

export default function DeleteGenre(props){
    const [genreToDelete, setGenreToDelete] = useState('');
    const onSubmitDelete = async (e) => {
        e.preventDefault();
        if (genreToDelete.length > 1) {
          const submit = await fetch(`./api/genre/${genreToDelete}`, {
            method: 'delete',
            headers: {
              'Content-type': 'application/json',
            },
          });
          const read = await submit.json();
    
          props.setRefresh(read);
          setGenreToDelete('');
        }
      };
    return(
        <>
        <h2>Delete Genre</h2>
        <div>
          <Form onSubmit={onSubmitDelete}>
            <Form.Group>
              <Form.Label>Genres</Form.Label>
              <Form.Control
                as='select'
                value={genreToDelete}
                onChange={(e) => setGenreToDelete(e.target.value)}
              >
                <option></option>
                {props.genres.map((gen) => (
                  <option key={gen.genrename}>{gen.genrename}</option>
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