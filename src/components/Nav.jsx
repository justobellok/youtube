import "./style/nav.css"
import { IoMdHome, IoIosAlbums, IoMdTime } from "react-icons/io"
import { FaFilm, FaUser, FaHistory, FaThumbsUp } from "react-icons/fa";



const Vav = () => {
    return ( 
        <div className="content">
         <div className="nav">

      <button>
        <IoMdHome />
        Principal
      </button>
      <button>
        <FaFilm />
        Shorts
      </button>
      <button>
      <IoIosAlbums />
      Suscripciones
      </button>
         </div>
      <hr />

<div className="nav2">
    <button>
        <FaUser />
        Tu 
    </button>
    <button>
        <FaHistory />
        Historial
    </button>
    <button>
        <IoMdTime />
        Ver mas Tarde
    </button>
    <button>
        <FaThumbsUp />
        Videos que me gus..
    </button>
</div>
        </div>
     );
}
 
export default Vav;
