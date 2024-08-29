import { ImageBackground } from "./Home.styles"
import digital from "../assets/materiais/digitalHome.svg"
import { Link } from "react-router-dom"

export function Home() {
  return (
    <ImageBackground>
    <div>
      <Link to="/projeto"><img src={digital} alt="" /></Link>
    </div>
    </ImageBackground>
  )
}
