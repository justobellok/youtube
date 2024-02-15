
import "./style/sugerencia.css"
import { IoChevronForward } from "react-icons/io5"



const Sugerencia = () => {
    return ( 
        <>
        <section className="info">
            <a href="#">Todos</a>
            <a href="#">VideoJuegos</a>
            <a href="#">Hojas de estilos en cascada</a>
            <a href="#">Musica</a>
            <a href="#">Tiempo real</a>
            <a href="#">Maquinas</a>
            <a href="#">Caricaturas</a>
            <a href="#">Animaciones</a>
            <button> 
            <IoChevronForward />    
             </button>
        </section>
        </>
     );
}
 
export default Sugerencia;