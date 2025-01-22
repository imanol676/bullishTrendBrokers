import Navbar from "../components/NavBar";
import Hero from "../components/Hero";
import Inversiones from "../components/Inversiones";
import Herramientas from "../components/Herramientas";
import Nosotros from "../components/Nosotros";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="bg-zinc-900 text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="flex justify-center items-center h-screen bg-cover bg-center">
        <Hero />
      </section>

      {/* Inversiones Section */}
      <section className="py-16 px-8 bg-zinc-800">
        <div className="container mx-auto">
          <Inversiones />
        </div>
      </section>

      {/* Herramientas Section */}
      <section className="py-16 px-8 bg-zinc-700">
        <div className="container mx-auto">
          <Herramientas />
        </div>
      </section>

      {/* Nosotros Section */}
      <section className="py-16 px-8 bg-zinc-600">
        <div className="container mx-auto">
          <Nosotros />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
