import '../styles/Integrante.css';
import yo from "../../assets/Yo.jpeg"

function Integrante({nombre, tareas, imgUrl}) {

    return (
        <div className="IntegranteContainer">
            <div className="IntegranteInfoContainer" >
                <div className="IntegranteInfo">
                    <p className="IntegranteName">{nombre}</p>
                    <ul className='IntegranteList'>
                        <li><p className='Tarea'>{tareas[0]}</p></li>
                        <li><p className='Tarea'>{tareas[1]}</p></li>
                    </ul>
                </div>
                <figure className='IntegranteImg'></figure>
            </div>
        </div>
    );
  }
  
  export default Integrante;