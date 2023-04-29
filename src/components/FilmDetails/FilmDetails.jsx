import axios from 'axios';
import css from './FilmDetails.module.css';
import { useEffect, useState } from 'react';
const {
  useParams,
  useNavigate,
  useLocation,
  // eslint-disable-next-line no-unused-vars
  Link,
} = require('react-router-dom');

const FilmDetails = () => {
  const { filmId } = useParams();
  const [movieId] = useState(filmId);
  const [movieInfo, setMovieInfo] = useState({});

  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const location = useLocation();

  useEffect(() => {
    const getMovieInfo = async () => {
      const apiKey = '76df6c5653ddfcebddeb9411f9024556';
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
        );
        setMovieInfo(response.data);
        console.log(response.data);
      } catch (error) {
        return;
      }
    };
    getMovieInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showCast = () => {
    navigate(`/movies/${movieId}/cast`);
  };

  const showReviews = () => {
    navigate(`/movies/${movieId}/reviews`);
  };

  const backLinkHref = () => {
    // return location.state?.from ?? '/';
    navigate(-1);
  };
  return (
    <div className={css.background}>
      {/* <Link to="/">Go Home</Link> */}
      {/* <Link to={backLinkHref()}>Go Back</Link> */}
      <button onClick={backLinkHref}>Go back</button>
      <div className={css.wrapper}>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`}
            alt={`${movieInfo.title} poster`}
            width="300"
            height="400"
            className={css.image}
          />
        </div>
        <div>
          <h1 className={css.title}>{movieInfo.title}</h1>
          <p>{movieInfo.overview}</p>
          <p>Status: {movieInfo.status}</p>
          <p>
            Average vote: {Math.round(movieInfo.vote_average)}/10
            <br></br>
            Vote count: {movieInfo.vote_count}
          </p>
        </div>
      </div>
      <button onClick={showCast}>Cast</button>
      <button onClick={showReviews}>Reviews</button>
    </div>
  );
};

export default FilmDetails;