import { useEffect, useState } from 'react';
import CarouselImgs from '../SharedComponents/CarouselImgs/CarouselImgs';
import ReviewCards from '../SharedComponents/ReviewCards/ReviewCards';
import { CardColumns } from 'react-bootstrap';
import {pcCarImgs} from '../localPageData';
import styles from '../SharedComponents/Styles/sharedStyles.module.css';

export default function Pc() {
  const [currentReviews, setCurrentReviews] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetch('./api/reviews/platform/PC');
      const read = await data.json();
      setCurrentReviews(read);
    };
    getData();
  }, []);

  return (
    <div>
      <CarouselImgs pictures={pcCarImgs} />
      <div style={{ padding: '10px' }}>
      <div className={styles.boxWithShadow} style={{ marginBottom: '20px' }}>
        <h2>Current PC Reviews</h2>
        <CardColumns>
          {currentReviews.map((review) => (
            <ReviewCards
              key={review.reviewID}
              id={review.reviewID}
              img={review.cover}
              title={review.title}
              content={review.content}
              lastUpdated={review.date_created}
            />
          ))}
        </CardColumns>
        </div>
      </div>
    </div>
  );
}
