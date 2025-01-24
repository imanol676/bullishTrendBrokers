import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div>
      <Link to="/register">
        <button className="bg-gradient-to-b from-orange-800 to-orange-600 hover:bg-orange-400 w-[200px] rounded-md font-medium my-6 mx-auto py-3">
          Comienza Ahora
        </button>
      </Link>
    </div>
  );
}
