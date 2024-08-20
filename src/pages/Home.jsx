import { ImageBackground } from "./Home.styles"
import digital from "../assets/materiais/digitalHome.svg"

export function Home() {
  return (
    <ImageBackground>
    <div>
      <img src={digital} alt="" />
    </div>
    </ImageBackground>
  )
}
