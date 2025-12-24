import { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaShareAlt,
  FaBars,
} from "react-icons/fa";
import LoginModal from "./LoginModal";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <>
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-3 py-2 flex justify-between items-center">

          {/* LOGO */}
          <img
            src="https://karnatakatemplesaccommodation.com/assets/img/logo.webp?v=1733149730"
            alt="Logo"
            className="h-12"
          />

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-6 text-sm font-semibold text-red-700">
            <span className="cursor-pointer">ಮುಖ್ಯಪುಟ</span>
            <button
              onClick={() => setLoginOpen(true)}
              className="hover:underline"
            >
              ನೋಂದಣಿ / ಲಾಗಿನ್
            </button>
            <span>📞 Bengaluru - 080 2670 9689</span>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-2">
            <input
              placeholder="Search"
              className="hidden md:block border border-red-400 px-2 py-1 rounded text-sm"
            />

            <div className="hidden md:flex gap-1">
              <Icon bg="bg-blue-600"><FaShareAlt /></Icon>
              <Icon bg="bg-sky-500"><FaTwitter /></Icon>
              <Icon bg="bg-green-600"><FaWhatsapp /></Icon>
              <Icon bg="bg-blue-700"><FaFacebookF /></Icon>
            </div>

            <button
              className="md:hidden text-red-700 text-xl"
              onClick={() => setMenuOpen(true)}
            >
              <FaBars />
            </button>
          </div>
        </div>
      </header>

      {/* LOGIN MODAL */}
      {loginOpen && <LoginModal onClose={() => setLoginOpen(false)} />}
    </>
  );
}

function Icon({ children, bg }) {
  return (
    <div className={`${bg} w-8 h-8 text-white flex items-center justify-center rounded`}>
      {children}
    </div>
  );
}
