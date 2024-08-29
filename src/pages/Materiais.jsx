import ard from '../assets/materiais/arduino.svg'
import alm from '../assets/materiais/alarme.svg'
import cam from '../assets/materiais/camera.svg'
import sen from '../assets/materiais/sensor.svg'
import tela from '../assets/materiais/tela.svg'
import serv from '../assets/materiais/servo.svg'
import config from '../assets/menu/config.svg'
import prop from '../assets/menu/proposito.svg'
import comp from '../assets/menu/componentes.svg'
import cria from '../assets/menu/criadores.svg'
import agradece from '../assets/menu/agradecimentos.svg'
import projeto from '../assets/menu/projeto.svg'
import bio from '../assets/menu/bio.svg'
import { CylinderContainer, CylinderContainer2 } from './Materiais.styles'
import { BarraContainer } from "./Barra.styles"
import { Link } from 'react-router-dom'

import Menu from "../components/Menu"

export function Materiais() {
  return (
    <section>
      <BarraContainer>
      <header>
        <h1>Materiais</h1>
        <Link to='/feedback'>
                <img src={config} alt="engrenagem" />
            </Link>

            <Link to='/proposito'>
                <img src={prop} alt="Propósito" />
            </Link>

            <Link to='/agradecimentos'>
                <img src={agradece} alt="Agradecimentos" />
            </Link>
            
            <Link to='/criadores'>
                <img src={cria} alt="Criadores" />
            </Link>

            <Link to='/projeto'>
                <img src={projeto} alt="projeto" />
            </Link>
            
            <Link to='/bibliografia'>
                <img src={bio} alt="bibliografia" />
            </Link>
      </header>
      </BarraContainer>
      <CylinderContainer>
      <div>
        <h2>Arduíno</h2>
        <img src={ard} alt="arduino" />
      </div>
      </CylinderContainer>
      <CylinderContainer2>
      <div>
        <img src={alm} alt="alarme" />
        <h2>Alarme</h2>
      </div>
      </CylinderContainer2>
      <CylinderContainer>
      <div>
        <h2>Câmera</h2>
        <img src={cam} alt="camera" />
      </div>
      </CylinderContainer>
      <CylinderContainer2>
      <div>
        <img src={sen} alt="leitor biometrico / sensor de digital" />
        <h2>Sensor</h2>
      </div>
      </CylinderContainer2>
      <CylinderContainer>
      <div>
        <h2>Tela LCD</h2>
        <img src={tela} alt="tela LCD" />
      </div>
      </CylinderContainer>
      <CylinderContainer2>
      <div>
        <img src={serv} alt="servo motor" />
        <h2>Servo motor</h2>
      </div>
      </CylinderContainer2>

    </section>
  )
}
