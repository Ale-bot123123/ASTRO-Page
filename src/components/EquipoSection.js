import './styles/EquipoSection.css';
import equipo from "../assets/Equipo.jpg"
import Integrante from "./subComponents/Integrante.js"
import Alejo from "../assets/CansatArg.png"

function EquipoSection() {
    return (
        <section className="EquipoSection" id="EquipoSection">
            <div className="EquipoImgContainer">
                <img src={equipo} className="EquipoImg" alt="Equipo"></img>
                <h2 className="EquipoTitle">EQUIPO</h2>
            </div>
            <section className="EquipoIntegrantesSection">
                <h3 className="EquipoIntegrantesTitle">INTEGRANTES</h3>
                <div className="EquipoIntegrantesProfesor">
                    <Integrante nombre="Julian Morete" tareas={["Lider del Gurpo","Programador"]} imgUrl={Alejo}/>
                </div>
                <div className="EquipoIntegrantesAlumnos">
                    <Integrante nombre="Alejo Milani" tareas={["Lider del Gurpo","Programador"]} imgUrl={Alejo}/>
                    <Integrante nombre="Santino Andrioletti" tareas={["Lider del Gurpo","Programador"]} imgUrl={Alejo}/>
                </div>
                <div className="EquipoIntegrantesAlumnos">
                    <Integrante nombre="Rodrigo Aranda" tareas={["Lider del Gurpo","Programador"]} imgUrl={Alejo}/>
                    <Integrante nombre="Agustin Phoyu" tareas={["Lider del Gurpo","Programador"]} imgUrl={Alejo}/>
                </div>
            </section>
        </section>
    );
  }
  
  export default EquipoSection;