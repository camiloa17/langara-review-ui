import { Badge } from 'react-bootstrap';

export default function ReadStudios(props){

    return(
        <>
        <div style={{ marginBottom: '20px' }}>
        <h2>Current Studios</h2>
        <div style={{ padding: '5px' }}>
          {props.studios.map((studio) => (
            <Badge
              style={{ marginRight: '5px' }}
              pill
              variant='secondary'
              key={studio.studioname}
            >
              {studio.studioname}
            </Badge>
          ))}
        </div>
      </div>
        </>
    )

}