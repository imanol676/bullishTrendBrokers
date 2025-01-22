import { FaGithubSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-white">
      {/* Branding Section */}
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-800 to-orange-400 bg-clip-text text-transparent">
          Bullish Trend Brokers
        </h1>
        <p className="py-4 text-gray-300">
          Ofrecemos soluciones innovadoras para tus inversiones, con
          herramientas diseñadas para maximizar tus resultados en los mercados
          financieros.
        </p>
        {/* Social Media Icons */}
        <div className="flex space-x-6 mt-4">
          <a
            href="#"
            aria-label="Instagram"
            className="hover:text-orange-400 transition"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="hover:text-orange-400 transition"
          >
            <FaTwitterSquare size={30} />
          </a>
          <a
            href="#"
            aria-label="GitHub"
            className="hover:text-orange-400 transition"
          >
            <FaGithubSquare size={30} />
          </a>
        </div>
      </div>

      {/* Links Section */}
      <div className="lg:col-span-2 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h6 className="font-medium text-gray-400">Soluciones</h6>
          <ul>
            <li className="py-2 text-sm hover:text-orange-400 transition">
              Trading
            </li>
            <li className="py-2 text-sm hover:text-orange-400 transition">
              Análisis
            </li>
            <li className="py-2 text-sm hover:text-orange-400 transition">
              Consultoría
            </li>
            <li className="py-2 text-sm hover:text-orange-400 transition">
              Educación Financiera
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Soporte</h6>
          <ul>
            <li className="py-2 text-sm hover:text-orange-400 transition">
              Centro de Ayuda
            </li>
            <li className="py-2 text-sm hover:text-orange-400 transition">
              FAQs
            </li>
            <li className="py-2 text-sm hover:text-orange-400 transition">
              Reportar Problemas
            </li>
            <li className="py-2 text-sm hover:text-orange-400 transition">
              Contacto
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Compañía</h6>
          <ul>
            <li className="py-2 text-sm hover:text-orange-400 transition">
              Sobre Nosotros
            </li>
            <li className="py-2 text-sm hover:text-orange-400 transition">
              Carreras
            </li>
            <li className="py-2 text-sm hover:text-orange-400 transition">
              Prensa
            </li>
            <li className="py-2 text-sm hover:text-orange-400 transition">
              Inversionistas
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul>
            <li className="py-2 text-sm hover:text-orange-400 transition">
              Términos de Servicio
            </li>
            <li className="py-2 text-sm hover:text-orange-400 transition">
              Política de Privacidad
            </li>
            <li className="py-2 text-sm hover:text-orange-400 transition">
              Cookies
            </li>
            <li className="py-2 text-sm hover:text-orange-400 transition">
              Aviso Legal
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
