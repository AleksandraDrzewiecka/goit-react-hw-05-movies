import axios from 'axios';
import css from './FilmDetails.module.css';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const { useParams } = require('react-router-dom');

const FilmDetails = () => {
  const { filmId } = useParams();
  const [movieInfo, setMovieInfo] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    const getMovieInfo = async () => {
      const apiKey = '76df6c5653ddfcebddeb9411f9024556';
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${filmId}?api_key=${apiKey}`
        );
        setMovieInfo(response.data);
      } catch (error) {
        return;
      }
    };
    getMovieInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={css.background}>
      <button onClick={() => navigate(backLinkHref)}>Go Back</button>
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
      <Link to="cast" state={{ from: backLinkHref }}>
        <button>Show cast</button>
      </Link>
      <Link to="reviews" state={{ from: backLinkHref }}>
        <button>Reviews</button>
      </Link>
    </div>
  );
};

export default FilmDetails;
