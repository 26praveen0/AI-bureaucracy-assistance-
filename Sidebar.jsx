import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-6">
      <h2 className="text-2xl font-bold mb-10">
        Dashboard
      </h2>

      <div className="flex flex-col gap-6">

        <Link to="/" className="hover:text-blue-400">
          Home
        </Link>

        <Link to="/upload" className="hover:text-blue-400">
          Upload Documents
        </Link>

        <Link to="/dashboard" className="hover:text-blue-400">
          Dashboard
        </Link>

        <Link to="/tracking" className="hover:text-blue-400">
          Tracking
        </Link>

      </div>
    </div>
  );
}

export default Sidebar;