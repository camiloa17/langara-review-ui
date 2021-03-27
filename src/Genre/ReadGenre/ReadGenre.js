import { Badge } from 'react-bootstrap';

export default function ReadGenre(props){

    return(
        <>
        <div style={{ marginBottom: '20px' }}>
        <h2>Current Genres</h2>
        <div style={{ padding: '5px' }}>
          {props.genres.map((gen) => (
            <Badge
              style={{ marginRight: '5px' }}
              pill
              variant='secondary'
              key={gen.genrename}
            >
              {gen.genrename}
            </Badge>
          ))}
        </div>
      </div>
        </>
    )

}