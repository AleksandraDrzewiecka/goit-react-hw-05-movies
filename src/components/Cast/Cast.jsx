import axios from "axios";
const { useEffect, useState } = require("react");
const { useParams } = require("react-router-dom")

const Cast = () => {
    const { filmId } = useParams()
    const [cast, setCast] = useState([])
    
    const id = filmId

    useEffect(() => {
        const getCast = async() => {
            const apiKey = '76df6c5653ddfcebddeb9411f9024556';
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`
            )
            
            setCast(response.data.cast)
            
        }
        getCast()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    

    return (
        <>
        {cast.map((item) => {
          return(
            <div key={item.id}>
            <h4>{item.character}</h4>
            <p>{item.name}</p>
            </div>
          )  
        })}
        </>
    )
}

export default Cast