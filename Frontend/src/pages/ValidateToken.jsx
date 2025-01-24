const ValidateToken = () => {
  return (
    <div className="bg-zinc-900 text-white min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-6 bg-zinc-800 rounded-md shadow-md">
        <h1 className="text-xl font-bold text-center mb-4">
          Token de validación enviado
        </h1>
        <p className="text-sm text-zinc-400 mb-4">
          Se te ha enviado un Token a tu correo electrónico. Por favor pegalo en
          el siguiente campo para poder continuar con el proceso de registro.
        </p>
        <input
          type="text"
          className="w-full p-2 mb-4 rounded-md bg-zinc-700 text-white focus:outline-none"
          placeholder="Pega tu token aquí"
        />
        <button className="bg-gradient-to-r from-orange-800 to-orange-600 hover:bg-orange-500 w-full p-2 rounded-md font-medium">
          Enviar
        </button>
      </div>
    </div>
  );
};

export default ValidateToken;
