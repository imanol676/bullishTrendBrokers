import { ReactTyped } from "react-typed";
import Register from "./Register";
import HeroImage from "../assets/hero.jpg";

const Hero = () => {
  return (
    <section className="text-white">
      <div className="text-white ">
        <div className="max-w-[800px] mt-[96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          {/* Título principal */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-orange-800 to-orange-400 bg-clip-text text-transparent">
            Bienvenidos a:
          </h1>
          {/* Typed Animation */}
          <div className="flex justify-center items-center">
            <ReactTyped
              strings={["Bullish", "Trend", "Brokers", "Bullish Trend Brokers"]}
              typeSpeed={120}
              backSpeed={100}
              loop
              className="text-2xl sm:text-4xl md:text-5xl font-bold"
            />
          </div>
          {/* Descripción */}
          <p className="md:text-2xl text-xl font-bold text-zinc-900 p-2">
            Invertí en activos financieros de forma sencilla y rápida
          </p>

          {/* Botón de registro */}
          <Register></Register>
        </div>
      </div>
    </section>
  );
};

export default Hero;
