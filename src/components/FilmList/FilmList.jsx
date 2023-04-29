import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './FilmList.module.css';

const FilmList = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const getTrendingMovies = async () => {
      const apiKey = '76df6c5653ddfcebddeb9411f9024556';

      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`
        );
        const arrOfTrendingMovies = response.data.results;
        setTrendingMovies(arrOfTrendingMovies);
      } catch (error) {
        return;
      }
    };
    getTrendingMovies();
  }, []);

  return (
    <div className={styles.container}>
      {trendingMovies.length > 0 ? (
        trendingMovies.map(movie => {
          const filmId = `/movies/${movie.id}`;
          return (
            <p key={movie.id} className={styles.movie}>
              <Link to={filmId} state={{ from: location }} className={styles.link}>
                {movie.title}
              </Link>
            </p>
          );
        })
      ) : (
        <p className={styles.noFilms}>Sorry no films...</p>
      )}
    </div>
  );
};

export default FilmList;