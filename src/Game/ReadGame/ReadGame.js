import { Card, CardColumns } from 'react-bootstrap';

export default function ReadGame(props) {
  return (
    <>
      <div style={{ marginBottom: '20px' }}>
        <h2>Current Games</h2>
        <div style={{ padding: '5px' }}>
          <CardColumns>
            {props.games.map((game) => (
              <Card key={game.gameID} style={{ maxWidth: '300px' }}>
                <Card.Img variant='top' src={game.cover} />
                <Card.Body>
                  <Card.Title style={{ color: 'black' }}>
                    {game.gamename}
                  </Card.Title>
                  <Card.Text style={{ color: '#212529' }}>
                    <>
                      <strong>Genre: </strong>
                      {game.genre}
                    </>
                  </Card.Text>
                  <Card.Text style={{ color: '#212529' }}>
                    <>
                      <strong>Studio: </strong>
                      {game.gameStudio}
                    </>
                  </Card.Text>
                  <Card.Text style={{ color: '#212529' }}>
                    <>
                      <strong>No. of Players: </strong>
                      {game.numberOfPLayers}
                    </>
                  </Card.Text>
                  <Card.Text style={{ color: '#212529' }}>
                    <>
                      <strong>Budget: </strong>
                      <span>$</span>
                      {game.budget.toLocaleString()}
                    </>
                  </Card.Text>
                  <Card.Text style={{ color: '#212529' }}>
                    <>
                      <strong>Platforms: </strong>
                      {game.platforms}
                    </>
                  </Card.Text>
                  <Card.Text style={{ color: '#212529' }}>
                    <>
                      <strong>Director: </strong>
                      {game.studioDirector}
                    </>
                  </Card.Text>
                  <Card.Text style={{ color: '#212529' }}>
                    <>
                      <strong>Min Req: </strong>
                      {game.minRequirements}
                    </>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className='text-muted'>{new Date(game.releaseDate).toLocaleString('en-US')}</small>
                </Card.Footer>
              </Card>
            ))}
          </CardColumns>
        </div>
      </div>
    </>
  );
}
