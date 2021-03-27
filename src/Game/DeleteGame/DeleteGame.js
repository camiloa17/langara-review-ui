import {  useState } from 'react';
import {  Form, Button } from 'react-bootstrap';

export default function DeleteGame(props){
    const [gameToDelete, setGameToDelete] = useState('');
    const onSubmitDelete = async (e) => {
        e.preventDefault();
        if (gameToDelete.length > 1) {
          const submit = await fetch(`./api/game/${gameToDelete}`, {
            method: 'delete',
            headers: {
              'Content-type': 'application/json',
            },
          });
          const read = await submit.json();
    
          props.setRefresh(read);
          setGameToDelete('');
        }
      };
    return(
        <>
        <h2>Delete Game</h2>
        <div>
          <Form onSubmit={onSubmitDelete}>
            <Form.Group>
              <Form.Label>Games</Form.Label>
              <Form.Control
                as='select'
                value={gameToDelete}
                onChange={(e) => setGameToDelete(e.target.value)}
              >
                <option></option>
                {props.games.map((game) =>(
                  <option key={game.gameID} value={game.gameID}>{game.gamename}</option>
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