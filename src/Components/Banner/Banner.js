import "./Banner.css"
import axios from "../../constants/axios"
import {imageUrl} from "../../constants/constants"
import { useEffect, useState } from "react"
const Banner = () =>
{
    const [Title, setTitle] = useState([])
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`).then((response)=>
        {
            let n = Math.floor(Math.random()*(11)+0)
            console.log(response.data.results[n]);
            setTitle(response.data.results[n]);
        }
    )},[])
    //console.log(Title.name)
    return(
        <div>
            
            <div style = {{backgroundImage:`url(${imageUrl+Title.backdrop_path})`}} className="banner">
            <div className="content">
                <h1>{Title.original_title}</h1>
                <div className="banner_buttons">
                    <button className="button">Play</button>
                    <button className="button">My List</button>
                </div>
                <h1 className="description">{Title.overview}</h1>
            </div>
            <div className="fade_bottom">
                
            </div>
            </div>
        </div>
    )
}
export default Banner