import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";

const Cast = () => {
  const { filmId } = useParams();
  const [cast, setCast] = useState([]);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

  useEffect(() => {
    const getCast = async () => {
      const apiKey = "76df6c5653ddfcebddeb9411f9024556";
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${filmId}/credits?api_key=${apiKey}`
      );
      setCast(response.data.cast);
    };
    getCast();
  }, [filmId]);

  return (
    <>
      {cast.map((item) => {
        return (
          <div key={item.id}>
            <Link to="cast" state={{ from: backLinkHref }}>
            </Link>
            <h4>{item.character}</h4>
            <p>{item.name}</p>
          </div>
        );
      })}
    </>
  );
};

export default Cast;