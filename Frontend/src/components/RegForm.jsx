import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name.trim()) {
      formErrors.name = "El nombre de usuario es requerido.";
    }
    if (!formData.email.trim()) {
      formErrors.email = "El correo electrónico es requerido.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "El correo electrónico no es válido.";
    }
    if (!formData.password) {
      formErrors.password = "La contraseña es requerida.";
    } else if (formData.password.length < 6) {
      formErrors.password = "La contraseña debe tener al menos 6 caracteres.";
    }
    if (formData.password !== formData.confirmPassword) {
      formErrors.confirmPassword = "Las contraseñas no coinciden.";
    }
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log("Formulario enviado con éxito:", formData);

      // Simula el envío al backend y redirige al usuario
      setTimeout(() => {
        navigate("/validate-token"); // Redirige a la página de validación
      }, 500); // Simula un retraso para simular el envío
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gradient-to-b from-zinc-900 to-zinc-700 text-white p-8 rounded-lg max-w-md mx-auto shadow-lg"
    >
      <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-orange-800 to-orange-400 bg-clip-text text-transparent">
        Regístrate
      </h2>
      <p className="text-center text-sm mb-6 text-zinc-400">
        Regístrate para empezar a invertir.
      </p>
      {/* Nombre */}
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Nombre Completo
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Nombre Completo"
          value={formData.name}
          onChange={handleChange}
          className="w-full mt-2 p-3 bg-zinc-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
        )}
      </div>
      {/* Email */}
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Correo electrónico
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          placeholder="ejemplo@dominio.com"
          onChange={handleChange}
          className="w-full mt-2 p-3 bg-zinc-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>
      {/* Contraseña */}
      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium mb-2">
          Contraseña
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="********"
          value={formData.password}
          onChange={handleChange}
          className="w-full mt-2 p-3 bg-zinc-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password}</p>
        )}
      </div>
      {/* Confirmar Contraseña */}
      <div className="mb-4">
        <label
          htmlFor="confirmPassword"
          className="block text-sm font-medium mb-2"
        >
          Confirmar contraseña
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="********"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full mt-2 p-3 bg-zinc-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
        )}
      </div>
      {/* Botón de Enviar */}
      <button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg transition duration-300"
      >
        Registrarse
      </button>
      <p className="text-center text-sm mt-4">¿Ya tienes una cuenta?</p>
      <a
        href="/login"
        className="block text-center text-sm underline hover:text-orange-400"
      >
        Ingresar
      </a>
    </form>
  );
};

export default RegForm;
