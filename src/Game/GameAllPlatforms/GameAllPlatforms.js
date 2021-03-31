import { Badge } from 'react-bootstrap';

export default function GameAllPlatforms(props){

    return(
        <>
        <div style={{ marginBottom: '20px' }}>
        <h2>Trivia information</h2>
        <h4>Games that are in all platforms: </h4>
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
        <div>
        <h4>
         {`Number of directors who directed a game: ${props.directorsDirecting[0]?.directors} `}
        </h4>
        </div>
      </div>
        </>
    )

}