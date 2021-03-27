import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../SharedComponents/Styles/sharedStyles.module.css';

export default function ReviewPage() {
  const { reviewid } = useParams();
  const [review, setReview] = useState();

  useEffect(() => {
    const getData = async () => {
      const data = await fetch(`/api/reviews/${reviewid}`);
      const read = await data.json();
      setReview(read[0]);
    };
    getData();
  }, [reviewid]);

  return (
    <div>
      <div style={{ padding: '10px' }}>
        <div className={styles.boxWithShadow} style={{ marginBottom: '20px' }}>
          {review&&<>
            <h1>{review.title}</h1>
            <div style={{display:'flex', justifyContent:'space-around',marginBottom:'20px'}} className={styles.boxWithShadow}>
              <div style={{width:'150px', height:'150px'}} ><img style={{width:'100%',height:'100%'}} src={review.cover} alt='game' /></div>
              <div>
                <h5>{review.gamename}</h5>
                <p><strong>Studio: </strong>{review.gameStudio}</p>
                <p><strong>Genre: </strong>{review.genre}</p>
              </div>
              <div>
                <p><strong>No. players: </strong>{review.numberOfPlayers}</p>
                <p><strong>Rating: </strong>{review.reviewerrating}</p>
              </div>
            </div>
            
            <p>{review.content}</p>
          </>}
        </div>
      </div>
    </div>
  );
}
