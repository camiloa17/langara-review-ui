import { useEffect, useState } from 'react';
import ReadGame from './ReadGame/ReadGame';
import CreateGame from './CreateGame/CreateGame';
import DeleteGame from './DeleteGame/DeleteGame';
import UpdateGenre from './UpdateGame/UpdateGame';
import styles from '../SharedComponents/Styles/sharedStyles.module.css';
export default function Game() {
  
  const [refresh, setRefresh] = useState({});
  const [genres, setGenres] = useState([]);
  const [studios, setStudios] = useState([]);
  const [platforms, setPlatforms] = useState([]);

  const [games,setGames]=useState([]);
 
  useEffect(() => {
    const getData = async () => {
      const data = await fetch('./api/genre/');
      const read = await data.json();
      setGenres(read);
    };
    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const data = await fetch('./api/platform/');
      const read = await data.json();
      setPlatforms(read);
    };
    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const data = await fetch('./api/studio/');
      const read = await data.json();
      setStudios(read);
    };
    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const data = await fetch('./api/game/');
      const read = await data.json();
      setGames(read);
    };
    getData();
  }, [refresh]);

  return (
    <div style={{ padding: '10px' }}>
      
      <div className={styles.boxWithShadow} style={{ marginBottom: '20px' }}>
        <CreateGame platforms={platforms} studios={studios} genres={genres} setRefresh={setRefresh}/>
      </div>
      <div className={styles.boxWithShadow}  style={{ marginBottom: '20px' }}>
        <DeleteGame setRefresh={setRefresh} games={games} />
      </div>
      <div className={styles.boxWithShadow}  style={{ marginBottom: '20px' }}>
        <UpdateGenre setRefresh={setRefresh} platforms={platforms} studios={studios} genres={genres} games={games} />
      </div>
      <div className={styles.boxWithShadow}  style={{ marginBottom: '20px'}}>
        
          <ReadGame games={games} />
        
      </div>
    </div>
  );
}
