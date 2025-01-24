import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <Link to="/login">
        <button className="bg-gradient-to-b from-zinc-800 to-zinc-600 hover:bg-zinc-400 w-[200px] rounded-md font-medium my-6 mx-auto py-3">
          Ingresar
        </button>
      </Link>
    </div>
  );
}
