
import { useState, useEffect } from "react";
import Gifs from "./Gifs";
import Gif from "./Gif";
import "./style/content.css"


const Content = () => {
    const [gifs, setGifs] = useState();

    useEffect(() => {
        Gifs({keyword: "morty"}).then(gif => setGifs(gif))
    }, [])
    return ( 
        <div className="cont">
          {
            gifs && gifs.map((gif) => (
              <Gif key={gif.id} url={gif.url} title={gif.title} image="maria" />
            ))
          }
        </div>
     );
}
 
export default Content;