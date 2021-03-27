import { useEffect, useState } from 'react';
import ReadGenre from './ReadGenre/ReadGenre';
import CreateGenre from './CreateGenre/CreateGenre';
import DeleteGenre from './DeleteGenre/DeleteGenre';
import UpdateGenre from './UpdateGenre/UpdateGenre';
import styles from '../SharedComponents/Styles/sharedStyles.module.css';
export default function Genre() {
  
  const [refresh, setRefresh] = useState({});
  const [genres, setGenres] = useState([]);

  
 
  useEffect(() => {
    const getData = async () => {
      const data = await fetch('./api/genre/');
      const read = await data.json();
      setGenres(read);
    };
    getData();
  }, [refresh]);


  return (
    <div style={{ padding: '10px' }}>
      <div className={styles.boxWithShadow}  style={{ marginBottom: '20px'}}>
        <ReadGenre genres={genres} />
      </div>
      <div className={styles.boxWithShadow} style={{ marginBottom: '20px' }}>
        <CreateGenre setRefresh={setRefresh}/>
      </div>
      <div className={styles.boxWithShadow}  style={{ marginBottom: '20px' }}>
        <DeleteGenre setRefresh={setRefresh} genres={genres} />
      </div>
      <div className={styles.boxWithShadow}  style={{ marginBottom: '20px' }}>
        <UpdateGenre setRefresh={setRefresh} genres={genres} />
      </div>
    </div>
  );
}
