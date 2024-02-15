import "./style/menu.css"
import { IoLogoYoutube, IoMdMenu, IoMdMic, IoMdVideocam ,IoMdNotifications} from "react-icons/io";


const Menu = ({user}) => {
    return (
        <>
            <nav className="navbar">
                <div className="navItem">
                  <button>
                  <IoMdMenu className="burger"/>
                    </button>  
                    <div className="logo">
                        <IoLogoYoutube className="iconY" />
                        <h3>YouTube <sup>Do</sup></h3>

                    </div>
                </div>
                <div className="buscador">
                    <input type="search"
                        placeholder="Buscar"
                    />
                    <div className="micro">
                    <button>
                    <IoMdMic />
                         </button>
                    </div>
                </div>


                <div className="usuario">
                  <button> <IoMdVideocam /> </button>
                    <button><IoMdNotifications /></button>
                    <img src={`https://unavatar.io/${user}`} alt="usuario..." />
                </div>

            </nav>
        </>
    );
}

export default Menu;