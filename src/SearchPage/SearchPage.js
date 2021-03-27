import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CardColumns } from 'react-bootstrap';
import ReviewCards from '../SharedComponents/ReviewCards/ReviewCards';
import styles from '../SharedComponents/Styles/sharedStyles.module.css';
export default function SearchPage() {
  const { query } = useParams();
  const [searchReviews, setSearchReviews] = useState([]);
  
  useEffect(() => {
    const getData = async () => {
      const data = await fetch(`/api/reviews/search/${query}`);
      const read = await data.json();
      setSearchReviews(read);
    };
    getData();
  }, [query]);
  return (
    <div style={{ padding: '10px' }}>
      <div className={styles.boxWithShadow} style={{ marginBottom: '20px' }}>
        <h1>Results</h1>
        <div>
          <CardColumns>
            {searchReviews.map((review) => (
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
