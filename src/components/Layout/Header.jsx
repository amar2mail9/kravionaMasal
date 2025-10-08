import React from "react";
import { FiSearch } from "react-icons/fi";
import { TiThMenu } from "react-icons/ti";
import { Link, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Search from "../Search";

const styleMenu = {
  position: "absolute",
  top: 0,
  left: 0,
};

const styleSearch = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: "600px",
};

const Header = () => {
  const location = useLocation();

  // mobile menu
  const [openMenu, setOpenMenu] = React.useState(false);
  const handleOpenMenu = () => setOpenMenu(true);
  const handleCloseMenu = () => setOpenMenu(false);

  // search modal
  const [openSearch, setOpenSearch] = React.useState(false);
  const handleOpenSearch = () => setOpenSearch(true);
  const handleCloseSearch = () => setOpenSearch(false);

  const menulist = [
    { name: "Shop", link: "/" },
    { name: "About", link: "/about-us" },
    { name: "Contact Us", link: "/contact-us" },
  ];

  return (
    <header className="bg-white w-full md:px-[8%] lg:px-36 py-4 px-4 flex items-center sticky shadow-md justify-between  top-0 left-0 z-50">
      {/* Logo */}
      <div className="w-16 h-16 rounded-full border-2 border-orange-500 ">
        <img src="/logo.svg" alt="" className="w-full h-full object-cover rounded-full p-1" />
      </div>
      {/* Desktop Menu + Search */}
      <section className="hidden lg:flex items-center gap-8">
        {/* Search Icon */}
        <button
          onClick={handleOpenSearch}
          className="hover:text-orange-500 transition-colors"
        >
          <FiSearch className="text-gray-600 w-6 h-6" />
        </button>

        {menulist.map(({ name, link }, idx) => {
          const isActive = location.pathname === link;
          return (
            <Link
              key={idx}
              to={link}
              className={`relative ${
                isActive
                  ? "text-orange-500 font-bold"
                  : "text-gray-600 font-medium"
              } hover:text-emerald-600 transition-colors`}
            >
              {name}
              {isActive && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-orange-500 rounded-full"></span>
              )}
            </Link>
          );
        })}
      </section>

      {/* Mobile Actions (Search + Menu) */}
      <section className="flex items-center gap-3 lg:hidden">
        {/* Search Icon */}
        <button
          onClick={handleOpenSearch}
          className="hover:text-orange-500 transition-colors"
        >
          <FiSearch className="text-gray-600 w-6 h-6" />
        </button>

        {/* Menu Icon */}
        <button
          onClick={handleOpenMenu}
          className="w-10 h-10 cursor-pointer bg-orange-500 flex items-center justify-center rounded-full shadow-md"
        >
          <TiThMenu className="w-6 h-6 text-white" />
        </button>
      </section>

      {/* Mobile Modal Menu */}
      <Modal open={openMenu} onClose={handleCloseMenu}>
        <Box sx={styleMenu} className="w-[70%] h-screen bg-white py-6">
          <section className="flex justify-center items-center w-full">
            <h1 className="md:text-4xl text-2xl text-emerald-600 font-extrabold tracking-wide">
              Kra<span className="text-orange-500">viona</span>
            </h1>
          </section>
          <section className="flex flex-col gap-6 mt-10">
            {menulist.map(({ name, link }, idx) => {
              const isActive = location.pathname === link;
              return (
                <Link
                  key={idx}
                  to={link}
                  onClick={handleCloseMenu}
                  className={`text-lg px-6 py-1 ${
                    isActive
                      ? "text-orange-500 font-bold bg-gray-100"
                      : "text-gray-600 font-semibold"
                  } hover:text-emerald-600 hover:bg-gray-200 transition-colors`}
                >
                  {name}
                </Link>
              );
            })}
          </section>
        </Box>
      </Modal>

      {/* Search Modal */}
      <Modal open={openSearch} onClose={handleCloseSearch}>
        <Box sx={styleSearch}>
          <Search />
        </Box>
      </Modal>
    </header>
  );
};

export default Header;
