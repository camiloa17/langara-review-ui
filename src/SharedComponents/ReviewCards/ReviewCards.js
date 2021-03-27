import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function ReviewCards(props) {
  return (
    <Link to={`/review/${props.id}`} >
      <Card>
        <Card.Img variant='top' src={props.img} />
        <Card.Body>
          <Card.Title style={{color:'black'}} >{props.title}</Card.Title>
          <Card.Text style={{color:'#212529'}}>
            {props.content.length > 100 ? props.content.slice(0,200) + '...' : props.content}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className='text-muted'>{props.lastUpdated}</small>
        </Card.Footer>
      </Card>
    </Link>
  );
}

