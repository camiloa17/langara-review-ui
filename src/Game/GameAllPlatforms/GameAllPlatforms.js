import { Badge } from 'react-bootstrap';

export default function GameAllPlatforms(props){

    return(
        <>
        <div style={{ marginBottom: '20px' }}>
        <h2>Games that are in all Platforms</h2>
        <div style={{ padding: '5px' }}>
          {props.games.map((game) => (
            <Badge
              style={{ marginRight: '5px' }}
              pill
              variant='secondary'
              key={game.gameID}
            >
              {game.gamename}
            </Badge>
          ))}
        </div>
      </div>
        </>
    )

}