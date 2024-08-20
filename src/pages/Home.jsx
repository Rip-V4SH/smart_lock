import { ImageBackground } from "./Home.styles"
import digital from "../assets/materiais/digitalHome.svg"

export function Home() {
  return (
    <ImageBackground>
    <div>
      <a href="/projeto"><img src={digital} alt="" /></a>
    </div>
    </ImageBackground>
  )
}
