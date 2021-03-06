import { useEffect, useState } from 'react';
import ReadPlatform from './ReadPlatform/ReadPlatform';
import CreatePlatform from './CreatePlatform/CreatePlatform';
import DeletePlatform from './DeletePlatform/DeletePlatform';
import UpdatePlatform from './UpdatePlatform/UpdatePlatform';
import styles from '../SharedComponents/Styles/sharedStyles.module.css';
export default function Platform() {
  
  const [refresh, setRefresh] = useState({});
  const [platforms, setPlatforms] = useState([]);
  const [maxPlatforms,setMaxPlatforms]=useState([]);
  const [gamesPerPlatform,setGamesPerPlatform]=useState([]);
  
 
  useEffect(() => {
    const getData = async () => {
      const data = await fetch('./api/platform/');
      const read = await data.json();
      setPlatforms(read);
    };
    getData();
  }, [refresh]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetch('./api/platform/maxplatform');
      const read = await data.json();
      setMaxPlatforms(read);
    };
    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const data = await fetch('./api/platform/numberofgames');
      const read = await data.json();
      setGamesPerPlatform(read);
    };
    getData();
  }, []);


  return (
    <div style={{ padding: '10px' }}>
      <div className={styles.boxWithShadow} style={{ marginBottom: '20px' }}>
        <ReadPlatform platforms={platforms} maxPlat={maxPlatforms} gamesPerplat={gamesPerPlatform} />
      </div>
      <div className={styles.boxWithShadow} style={{ marginBottom: '20px' }}>
        <CreatePlatform setRefresh={setRefresh}/>
      </div>
      <div className={styles.boxWithShadow} style={{ marginBottom: '20px' }}>
        <DeletePlatform setRefresh={setRefresh} platforms={platforms} />
      </div>
      <div className={styles.boxWithShadow} style={{ marginBottom: '20px' }}>
        <UpdatePlatform setRefresh={setRefresh} platforms={platforms} />
      </div>
    </div>
  );
}
