import './styles/CompetenciaSection.css';
import cansatArg from "../assets/CansatArg.png"
import agujeroNegro from "../assets/AgujeroNegro.jpg"

function CompetenciaSection() {
    return (
        <section className="CompetenciaSection" id="CompetenciaSection">
            <h2 className="CompetenciaTitle">COMPETENCIA</h2>
            <div>
                <div>
                    <figure className="CompetenciaAgujeroImg">
                    </figure>
                </div>
                <div className="CompetenciaInfoContainer">
                    <div className="CompetenciaTextContainer">    
                        <p className="CompetenciaInfo">CANSAT es una competencia que propone a estudiantes construir una carga útil, cuyo tamaño no supere el de una lata de gaseosa, y lanzarla en un cohete hasta una altitud de aproximadamente un kilómetro. De allí, el término CAN (lata) y SAT (satélite), por sus siglas en inglés.</p>
                        <p className="CompetenciaInfo">El objetivo de la competencia es contribuir al desarrollo de habilidades tecnológicas y a la promoción de una cultura científica e innovadora, ampliando la base de futuros profesionales y fortaleciendo los medios que aseguren la sostenibilidad del sector espacial en la Argentina, con un criterio federal.</p>
                    </div>
                    <img src={cansatArg} className='CansatArg' alt='Cansat'></img>
                </div>
            </div>
        </section>
    );
  }
  
  export default CompetenciaSection;