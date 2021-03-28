import { useState,useRef } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function CreateGame(props) {
  const [gameName, setGameName] = useState('');
  const [genre, setGenre] = useState('');
  const [studio, setStudio] = useState('');
 const [director,setDirector]= useState('');
  const [platform, setPlatform] = useState([]);
  const [coverUrl,setCoverUrl]=useState('');
  const [numberOfPlayers, setNumberOfPlayers] = useState(0);
  const [budget, setBudget] = useState(0);
  const [minReq, setMinReq] = useState('');
  const [dateCreated, setDateCreated] = useState('');

  const selected = useRef('');
  const onSubmitCreate = async (e) => {
    e.preventDefault();
    if (
      gameName.length > 1 &&
      genre.length > 1 &&
      studio.length > 1 &&
      director.length>1 &&
      platform.length > 0 &&
      numberOfPlayers > 0 &&
      budget > 0 &&
      minReq.length>0&&
      dateCreated
    ) {
      const gameObject = {
        genre: genre,
        gamename: gameName.charAt(0).toUpperCase() + gameName.slice(1),
        numberOfPlayers: numberOfPlayers,
        budget: budget,
        gameStudio: studio,
        director:director,
        cover:coverUrl,
        minRequirements: minReq,
        platform: platform,
        releaseDate: dateCreated,
      };
      const submit = await fetch('./api/game', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(gameObject),
      });
      const read = await submit.json();
      props.setRefresh(read);
      setGameName('');
      setGenre('');
      setStudio('');
      setPlatform([]);
      setNumberOfPlayers(0);
      setBudget(0);
      setMinReq('');
      setDateCreated('');
    }
  };


  const getSelectedOptions =()=>{
    const node = selected.current;
    const selectedVal = [...node.children].filter(opt=>opt.selected).map(opt=>opt.value)
    setPlatform(selectedVal)
  }
  return (
    <>
      <h2>Create Game</h2>
      <div>
        <Form onSubmit={onSubmitCreate}>
          <Form.Group>
            <Form.Label>Game Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter game name'
              value={gameName}
              onChange={(e) => setGameName(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Genre</Form.Label>
            <Form.Control
              as='select'
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            >
              <option></option>
              {props.genres.map((gen) => (
                <option key={gen.genrename}>{gen.genrename}</option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Studio</Form.Label>
            <Form.Control
              as='select'
              value={studio}
              onChange={(e) => setStudio(e.target.value)}
            >
              <option></option>
              {props.studios.map((studio) => (
                <option key={studio.studioname}>{studio.studioname}</option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Director</Form.Label>
            <Form.Control
              as='select'
              value={director}
              onChange={(e) => setDirector(e.target.value)}
            >
              <option></option>
              {props.directors.map((director) => (
                <option key={director.directorname} value={director.directorname}>{`${director.directorname} [${director.gameStudio}]`}</option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Platform</Form.Label>
            <Form.Control
              ref={selected}
              as='select'
              multiple
              value={platform}
              onChange={(e) =>{ getSelectedOptions()}}
            >
              <option></option>
              {props.platforms.map((platform) => (
                <option key={platform.platformName}>
                  {platform.platformName}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Game Cover</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter game cover url'
              value={coverUrl}
              onChange={(e) => setCoverUrl(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>No. of players</Form.Label>
            <Form.Control
              type='number'
              placeholder='Enter number of players'
              value={numberOfPlayers}
              onChange={(e) => setNumberOfPlayers(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Budget</Form.Label>
            <Form.Control
              type='number'
              placeholder='Enter budget'
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Min. Requirements</Form.Label>
            <Form.Control
              as='textarea'
              rows={3}
              placeholder='Enter Min req'
              value={minReq}
              onChange={(e) => setMinReq(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Release date</Form.Label>
            <Form.Control
              type='date'
              placeholder='Enter Min req'
              value={dateCreated}
              onChange={(e) => setDateCreated(e.target.value)}
            />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Create
          </Button>
        </Form>
      </div>
    </>
  );
}
