import { useState } from "react";

export const Avatar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        className="flex items-center focus:outline-none"
        onMouseEnter={() => setShowMenu(true)}
        onMouseLeave={() => setShowMenu(false)}
      >
        <img className="w-8 h-8 rounded-full" src="avatar.jpg" alt="Avatar" />
      </button>
      {showMenu && (
        <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl z-10">
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
          >
            Cerrar sesión
          </a>
        </div>
      )}
    </div>
  );
}
