import axios from 'axios';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// import { Link } from 'react-router-dom';
const MoviesPage = () => {
  const [filmsArr, setFilmsArr] = useState([]);
  const [filmList, setFilmList] = useSearchParams();
  const searchFilm = filmList.get('filmName');
  const location = useLocation();

  const handleSubmit = e => {
    e.preventDefault();
    setFilmList({ filmName: e.target[0].value });
  };

  useEffect(() => {
    if (searchFilm === null) {
      return;
    }
    const getArrOfMovies = async () => {
      const apiKey = '76df6c5653ddfcebddeb9411f9024556';
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchFilm}`
        );
        setFilmsArr(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        return;
      }
    };
    getArrOfMovies();
  }, [searchFilm]);

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input placeholder="Type movie title"></input>
          <button>Search</button>
        </form>
        {filmsArr.length > 0 ? (
          filmsArr.map(film => {
            const filmId = `/movies/${film.id}`;
            return (
              <p key={film.id}>
                <Link to={filmId} state={{ from: location }}>
                  {film.title}
                </Link>
              </p>
            );
          })
        ) : (
          <p>You can search for your title here</p>
        )}
      </div>
    </div>
  );
};

export default MoviesPage;