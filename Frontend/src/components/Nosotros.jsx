import img from "../assets/img.png";

export default function Nosotros() {
  return (
    <div className="w-full py-16 px-4 " id="nosotros">
      <div className="max-w-[1240px] mx-auto  grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={img} alt="/" />

        <div className="flex flex-col justify-center">
          <p className="font-bold bg-gradient-to-r from-orange-800 to-orange-400 bg-clip-text text-transparent">
            ¿QUIENES SOMOS?
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Sobre nuestra compañia
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
