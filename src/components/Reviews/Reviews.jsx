import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';

const FilmDetails = () => {
  const { filmId } = useParams();
  const [details, setDetails] = useState({});
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  const id = filmId;

  useEffect(() => {
    const getDetails = async () => {
      const apiKey = '76df6c5653ddfcebddeb9411f9024556';
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
      );
      setDetails(response.data);
    };

    getDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h2>{details.title}</h2>
      <p>{details.overview}</p>

      <Link to="reviews" state={{ from: backLinkHref }}>
      </Link>
    </div>
  );
};

export default FilmDetails;