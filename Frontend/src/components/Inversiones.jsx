import Toro from "../assets/inversion.png";

export default function Inversiones() {
  return (
    <div className="w-full py-16 px-4 " id="inversion">
      <div className="max-w-[1240px] mx-auto  grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Toro} alt="/" />

        <div className="flex flex-col justify-center">
          <p className="font-bold bg-gradient-to-r from-orange-800 to-orange-400 bg-clip-text text-transparent">
            TEN UN PORTAFOLIO DE INVERSIÓN A TU GUSTO
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Invierte En Una Gran Variedad
          </h1>
          <p className=" font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            temporibus, quas nihil qui sit ad voluptatibus mollitia minus
            architecto ipsum nisi, tempora officiis quam accusamus fuga,
            perspiciatis ut voluptas! Velit?
          </p>
        </div>
      </div>
    </div>
  );
}
