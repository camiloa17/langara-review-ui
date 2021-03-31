import { useEffect, useState } from 'react';
import ReadStudios from './ReadStudio/ReadStudios';
import CreateStudio from './CreateStudio/CreateStudio';
import DeleteStudio from './DeleteStudio/DeleteStudio';
import UpdateStudio from './UpdateStudio/UpdateStudio';
import AddDirector from './AddDirector/AddDirector';
import styles from '../SharedComponents/Styles/sharedStyles.module.css';
export default function Studio() {
  const [refresh, setRefresh] = useState({});
  const [studios, setStudios] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetch('./api/studio/');
      const read = await data.json();
      setStudios(read);
    };
    getData();
  }, [refresh]);

  return (
    <div style={{ padding: '10px' }}>
      <div className={styles.boxWithShadow} style={{ marginBottom: '20px' }}>
        <ReadStudios studios={studios} />
      </div>
      <div className={styles.boxWithShadow} style={{ marginBottom: '20px' }}>
        <CreateStudio setRefresh={setRefresh} />
      </div>
      <div className={styles.boxWithShadow} style={{ marginBottom: '20px' }}>
        <DeleteStudio setRefresh={setRefresh} studios={studios} />
      </div>
      <div className={styles.boxWithShadow} style={{ marginBottom: '20px' }}>
        <UpdateStudio setRefresh={setRefresh} studios={studios} />
      </div>
      <div className={styles.boxWithShadow} style={{ marginBottom: '20px' }}>
        <AddDirector setRefresh={setRefresh} studios={studios} />
      </div>
    </div>
  );
}
