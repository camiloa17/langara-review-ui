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
      </div>
        </>
    )

}