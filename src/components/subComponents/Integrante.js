import '../styles/Integrante.css';

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
                <img className='IntegranteImg' alt="Integrante"></img>
            </div>
        </div>
    );
  }
  
  export default Integrante;