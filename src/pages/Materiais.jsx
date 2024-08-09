import ard from '../assets/materiais/arduino.svg'
import alm from '../assets/materiais/alarme.svg'
import cam from '../assets/materiais/camera.svg'
import sen from '../assets/materiais/sensor.svg'
import tela from '../assets/materiais/tela.svg'
import serv from '../assets/materiais/servo.svg'

export default function Materiais() {
  return (
    <section>
      <header>
        <h1>Materiais</h1>
      </header>

      <div>
        <h2>Arduíno</h2>
        <img src={ard} alt="arduino" />
        <p>O Arduino Nano é uma versão compacta do Arduino, ideal para projetos com espaço limitado. Possui um microcontrolador, pinos de entrada e saída digitais e analógicos, e portas de comunicação, sendo programado em Arduino (baseado em C/C++). No Brasil, custa entre R$ 30 e R$ 70, enquanto nos EUA varia de $10 a $20. Versões não oficiais são mais baratas, mas as oficiais oferecem maior qualidade e suporte.</p>
      </div>

      <div>
        <h2>Alarme</h2>
        <img src={alm} alt="alarme" />
        <p>Um alarme alerta sobre situações de emergência, como invasões ou incêndios, emitindo sons altos e luzes piscantes. O preço varia conforme a complexidade: alarmes simples custam de R$ 50 a R$ 200, enquanto sistemas avançados com sensores, câmeras e conectividade com smartphone variam de R$ 500 a R$ 2.000 ou mais.</p>
      </div>

      <div>
        <h2>Câmera</h2>
        <img src={cam} alt="camera" />
        <p>Uma mini câmera para Arduino é usada para capturar fotos ou vídeos em projetos de monitoramento, segurança e robótica. Compatível com a plataforma Arduino, é fácil de integrar em projetos de eletrônica. No Brasil, custa entre R$ 50 e R$ 150, enquanto nos EUA varia de $10 a $30. Modelos com resoluções mais altas ou recursos adicionais podem ser mais caros.</p>
      </div>

      <div>
        <h2>Sensor de digital</h2>
        <img src={sen} alt="leitor biometrico / sensor de digital" />
        <p>Um sensor de digital para Arduino lê impressões digitais para autenticação em projetos de segurança, como fechaduras eletrônicas. Ele captura e compara impressões digitais com as armazenadas, enviando o resultado ao Arduino. No Brasil, esses sensores custam entre R$ 50 e R$ 150, enquanto nos EUA variam de $10 a $30. Modelos com maior capacidade de armazenamento e melhor precisão podem ser mais caros.</p>
      </div>

      <div>
        <h2>Tela LCD</h2>
        <img src={tela} alt="tela LCD" />
        <p>A tela LCD 16x2 é um display de cristal líquido usado com Arduino para exibir até 32 caracteres em duas linhas. Custa entre R$ 20 a R$ 50 no Brasil e $5 a $15 nos Estados Unidos.</p>
      </div>

      <div>
        <h2>Servo motor</h2>
        <img src={serv} alt="servo motor" />
        <p>Um servo motor é usado para controlar precisamente a posição em projetos de robótica, automação e modelos de aeronaves. Pequenos servo motores para Arduino custam entre R$ 20 a R$ 60 no Brasil e $5 a $15 nos Estados Unidos. Modelos maiores e mais potentes podem ter preços mais elevados.</p>
      </div>

    </section>
  )
}
