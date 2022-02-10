import Olas from '../svg/Olas'
import './footer.css'
import { GrLinkedin } from 'react-icons/gr';
import { GrGithub } from 'react-icons/gr';
import { GrCodepen } from 'react-icons/gr';

const Footer = () => {
    return (
        <div className="f">
            <Olas  fill='#1f2937' transform="rotate(180)" width= '100%' height= '53px' overflow='hidden'/>
            <div className="contenido">
                <div className="iconos">
                    <a className="icono" href='https://www.linkedin.com/in/%C3%B3scar-vilar-salvador-8bb9821a6/' target='_blank'> <GrLinkedin fontSize='30px' href='oscarvilar.com'/> </a>
                    <a className="icono" href='https://github.com/oscarvilar?tab=repositories' target='_blank'><GrGithub fontSize='30px'/></a>
                    <a className="icono" href='https://codepen.io/oscar7395/pens/public' target='_blank'><GrCodepen fontSize='30px'/></a>
                </div>
            </div>
            <div className="texto">
                <p><a href='https://oscarvilar.com/descargas/CV-OSCAR.pdf' target='_blank' className='link-cv'>Descargar CV</a></p>
                <p><a href='mailto:contacto@oscarvilar.com' target='_blank' className='link-cv'>contacto@oscarvilar.com</a></p>
                <p>Óscar Vilar | 2022</p>
                <p></p>
            </div>
        </div>
    )
}

export default Footer
