import { ImageBackground } from "./Home.styles";
import digital from "../assets/materiais/digitalHome.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Delay para permitir a animação
    return () => clearTimeout(timer);
  }, []);

  return (
    <ImageBackground>
      <div>
        <Link to="/projeto" className={isVisible ? "fade-in" : ""}>
          <img src={digital} alt="Digital" />
        </Link>
      </div>
    </ImageBackground>
  );
}
