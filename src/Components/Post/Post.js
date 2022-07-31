import axios from "axios"
import { useEffect,useState } from "react"
import {imageUrl} from "../../constants/constants"
import "./Post.css"
import YouTube from "react-youtube"

const Post = (props) =>
{
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        }}
    const [Org, setOrg] = useState([])
    const [vid,setVid] = useState('');

    useEffect(()=>
    {
        axios.get(props.url).then((response)=>
        {
            setOrg(response.data.results);  
        })
        console.log(" ");
    },[])

    const handleMClick = (id) =>
    {
        console.log(id);
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`).then(response =>
         {console.log(response.data)
            if(response.data.results.length!==0)
                setVid(response.data.results[0].key);
            else
                console.log("No result");
        })
       
    }

    return(
        <div className="row">
            <h2>{props.title}</h2>
            <div className="posters">
            {
                Org.map((obj)=>
                <img onClick={()=> handleMClick(obj.id)} className={props.isSmall?'s-poster':'poster'} alt="poster" src={`${imageUrl + obj.backdrop_path}`} />
                )
            }
                
    
            </div>
            {vid && <YouTube videoId={vid} opts={opts}/> }
        </div>
    )
}

export default Post