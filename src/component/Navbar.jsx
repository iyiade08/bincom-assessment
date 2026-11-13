import { useState } from "react";
import myimg from "../assets/Allo Iyiade (4 of 5).jpg";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  "about",
  "experience",
  "projects",
  "skills",
  "gallery",
  "contact",
];

const Navbar = () => {
  const [active, setActive] = useState("about");
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMobileLinkClick = (link) => {
    setActive(link);
    setMobileOpen(false);
  };

  return (
    // z-50 lives here, on the positioned (fixed) element, so it actually works
    <div className="w-full fixed top-0 left-1/2 -translate-x-1/2 z-50 border-b border-b-[#afada3]/30">
      <div className="w-full max-w-[1600px] text-[#fff] flex mx-auto flex-col gap-2">
        {/* box 1: the navbar */}
        <div className="flex justify-between items-center bg-backgroundGreen p-4 md:p-6">
          {/* avatar */}
          <div className="flex items-center gap-2">
            <div className="w-20 h-20 shrink-0 rounded-full ring-1 bg-buttonGreen overflow-hidden">
              <img
                src={myimg}
                alt="navbar-img"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <p className="text-[#afada3] text-[14px] md:text-[16px] capitalize">
              Allo iyiade tobiloba
            </p>
          </div>

          {/* desktop nav */}
          <div className="hidden md:flex gap-4 items-center text-[20px] capitalize font-semibold">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link}`}
                onClick={() => setActive(link)}
                className={`hover:text-buttonGreen ${
                  active === link ? "text-buttonGreen" : "text-[#afada3]"
                }`}
              >
                {link}
              </a>
            ))}
          </div>

          {/* mobile toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="md:hidden text-[#afada3] hover:text-[#afada3]/90"
          >
            {mobileOpen ? (
              <FaTimes className="w-8 h-8" />
            ) : (
              <FaBars className="w-8 h-8" />
            )}
          </button>
        </div>

        {/* box 2: the mobile dropdown, with its own border */}
        {mobileOpen && (
          <div className="md:hidden flex flex-col items-center gap-4 border border-[#afada3] rounded-xl bg-backgroundGreen p-4 mx-auto w-full capitalize font-semibold text-lg">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link}`}
                onClick={() => handleMobileLinkClick(link)}
                className={`hover:text-buttonGreen text-[20px] ${
                  active === link ? "text-buttonGreen" : "text-[#afada3]"
                }`}
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
