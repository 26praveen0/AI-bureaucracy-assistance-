function Navbar() {
  return (
    <div className="w-full h-16 bg-white shadow-md flex items-center justify-between px-8">
      <h1 className="text-2xl font-bold text-blue-600">
        AI Bureaucracy Assistant
      </h1>

      <div className="flex gap-4">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
          Login
        </button>
      </div>
    </div>
  );
}

export default Navbar;