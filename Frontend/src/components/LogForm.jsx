import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LogForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario de inicio de sesión
    console.log("Formulario enviado", { email, password });

    // Simula el envío al backend y redirige al usuario
    setTimeout(() => {
      navigate("/validate-token"); // Redirige a la página de validación
    }, 500); // Simula un retraso para simular el envío
  };

  return (
    <div className="bg-gradient-to-b from-zinc-900 to-zinc-600 text-white min-h-screen flex justify-center items-center">
      <div className="w-full max-w-lg p-8 bg-zinc-800 rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-orange-800 to-orange-400 bg-clip-text text-transparent">
          Iniciar Sesión
        </h2>
        <p className="text-center text-sm mb-6 text-zinc-400">
          Bienvenido de nuevo. Inicia sesión para acceder a tus herramientas de
          inversión.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-zinc-300"
            >
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              placeholder="ejemplo@dominio.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full mt-2 p-3 bg-zinc-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-zinc-300"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full mt-2 p-3 bg-zinc-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-4 bg-gradient-to-r from-orange-800 to-orange-400 text-white font-bold rounded-lg hover:bg-gradient-to-l focus:outline-none"
          >
            Iniciar Sesión
          </button>
        </form>

        <p className="text-center text-sm mt-4 text-zinc-400">
          ¿No tienes una cuenta?{" "}
          <a href="/register" className="text-orange-400 hover:text-orange-500">
            Regístrate aquí
          </a>
        </p>
      </div>
    </div>
  );
};

export default LogForm;
