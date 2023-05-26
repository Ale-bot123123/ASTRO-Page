import './styles/HeaderFixed.css';
import {motion} from "framer-motion"

const svgVariants = {
    hidden: { rotate: -180},
    visible: {
      rotate: 0,
      transition: {duration: 1.5}
    }
  }
  
  
  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLenght: 0
    },
    visible: {
      opacity: 1,
      pathLenght: 1,
      transition: {
        duration: 2,
        ease: "easeInOut"
      }
    }
  }
  

function HeaderFixed() {
    return (
            <header className="HeaderFixed">
                <motion.svg variants={svgVariants} initial="hidden" animate="visible" className="HeaderSvgLogo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 252.39 258.05"><g id="Capa_2" data-name="Capa 2"><g id="Capa_1-2" data-name="Capa 1"><motion.path variants={pathVariants} d="M251.34,258.05Q119.45,135.64,0,1.07L.81,0A7.12,7.12,0,0,1,3,.83c14.21,12.37,29.75,22.55,48,27.89,11.68,3.42,23.73,3.48,35.73,1.51,16.13-2.64,32.27-5.25,48.69-3.47a104.28,104.28,0,0,1,48.61,18.08C205.87,60,220,80.51,226.61,106.25a94.69,94.69,0,0,1,2.43,35.5c-1.46,11.67-3.69,23.24-5.35,34.89-2.59,18.24,1,35.47,10,51.37,5.15,9.08,11.42,17.54,17.16,26.3a32.51,32.51,0,0,1,1.55,3ZM194.72,130.82c-1.06-21.44-8.95-39.45-25.81-53.48-16.15-13.44-34.65-18.2-55-15.71C104.81,62.74,96,65.65,87,67.7c-4.28,1-4.78,2.36-1.77,5.61q9,9.7,18.05,19.3c14.15,14.87,28.18,29.86,42.57,44.51,11.72,11.92,23.88,23.4,35.86,35.07,2.12,2.07,4,1.77,4.89-1.17C190.54,157.9,195.36,144.93,194.72,130.82Z"/><motion.path variants={pathVariants}d="M65.68,103.08c-13.6,26.86-12.31,52.09,7.31,73.79,21.53,23.81,48.29,26.75,77.48,13.65,3.41,6.28,6.63,12.59,7.48,19.78.71,6-1.49,10.76-7.29,12.76a101.08,101.08,0,0,1-21.81,5.24,88.69,88.69,0,0,1-51.21-9.39C51,205.12,34.24,183.45,27.9,154.06c-3.52-16.32-2.08-32.45,3-48.32C33.35,97.9,39,93.91,47.18,95.93,53.47,97.49,59.37,100.58,65.68,103.08Z"/></g></g></motion.svg>
                <div className='HeaderSelectors'>
                    <a className='HeaderSelector' href=''>Competencia</a>
                    <a className='HeaderSelector'>Proyecto</a>
                    <a className='HeaderSelector'>Misiones</a>
                    <a className='HeaderSelector'>Seguimiento</a>
                    <a className='HeaderSelector'>Proximamente</a>
                </div>
            </header>
    );
  }
  
  export default HeaderFixed;