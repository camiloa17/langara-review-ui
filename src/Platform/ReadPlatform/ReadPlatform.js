import { Badge } from 'react-bootstrap';

export default function ReadPlatform(props){

    return(
        <>
        <div style={{ marginBottom: '20px' }}>
        <h2>Current Platforms</h2>
        <div style={{ padding: '5px' }}>
          {props.platforms.map((plat) => (
            <Badge
              style={{ marginRight: '5px' }}
              pill
              variant='secondary'
              key={plat.platformName}
            >
              {plat.platformName}
            </Badge>
          ))}
        </div>
        <div style={{marginTop:'10px'}}>
        <h4>Platform with max games</h4>
        <div>
          {props.maxPlat.map((plat)=>(
            <Badge
            style={{ marginRight: '5px' }}
            pill
            variant='secondary'
            key={plat.platform}
          >
            {`${plat.platform} [${plat.number}]`}
          </Badge>
          ))}
        </div>

        </div>
        <div  style={{marginTop:'10px'}}>
        <h4>Number of games per platform</h4>
        <div>
          {props.gamesPerplat.map((plat)=>(
            <Badge
            style={{ marginRight: '5px' }}
            pill
            variant='secondary'
            key={plat.platform}
          >
            {`${plat.platform} [${plat.number}]`}
          </Badge>
          ))}
        </div>

        </div>
      </div>
        </>
    )

}