import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { filmId } = useParams();
  const [info, setInfo] = useState([]);
  const id = filmId;

  useEffect(() => {
    const getInfo = async () => {
      const apiKey = '76df6c5653ddfcebddeb9411f9024556';
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${apiKey}`
      );
      console.log(response.data.results);
      setInfo(response.data.results);
    };

    getInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {info.length === 0 ? (
        <p>No reviews</p>
      ) : (
        info.map(item => {
          return (
            <div key={item.id}>
              <h4>{item.author}</h4>
              <p>{item.content}</p>
            </div>
          );
        })
      )}
    </>
  );
};

export default Reviews;