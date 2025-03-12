import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { logo } from "../assets";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState();
  const [toggle, setToggle] = useState("hidden");
  const [servicesVisiblity, setServicesVisibility] = useState(false);

  const dropDownMenuToggle = () => {
    setToggle(!toggle);
    const dropDownMenu = document.getElementById("drop-down-menu-id");
    dropDownMenu.classList.toggle("open-menu");
  };

  const handleServicesClick = () => {
    setActive(active === "Services" ? "" : "Services");
    setServicesVisibility(!servicesVisiblity);
  };

  return (
    <>
      <nav
        className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-deep-charcoal`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              setServicesVisibility(false);
              window.scrollTo(0, 0);
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 2,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
              }}
            >
              <img
                src={logo}
                alt="logo"
                className="w-9 h-9 object-contain"
                style={{ width: "", height: "" }}
              />
            </motion.div>

            <p className="text-light-almond text-[18px] font-bold cursore-pointer flex">
              &nbsp;Nextwebi&nbsp;
            </p>
          </Link>
          <ul className="list-none hidden sm:flex flex-row gap-10">
            <li
              className={`${
                active === "Services" ? "text-gray-500" : "text-light-almond"
              } 
                hover:text-gray-500 text-[18px] font-medium cursor-pointer`}
              onClick={handleServicesClick}
            >
              <a>
                Services&nbsp;<i className="fa-solid fa-caret-down"></i>
              </a>
              <AnimatePresence initial={false}>
                {servicesVisiblity ? (
                  <motion.ul
                    initial={{ opacity: 0, translateY: 0 }}
                    animate={{ opacity: 1, translateY: 10 }}
                    exit={{ opacity: 0, translateY: 0 }}
                    key="box"
                    className="p-3 backdrop-filter backdrop-blur-xl absolute my-2 min-w-[140px] z-10 rounded-xl border border-gray-600 flex flex-col gap-1"
                  >
                    <li
                      onClick={() => {
                        setActive("Services");
                        setServicesVisibility(false);
                      }}
                    >
                      <a href="#services">Web Development</a>
                    </li>
                    <li
                      onClick={() => {
                        setActive("Services");
                        setServicesVisibility(false);
                      }}
                    >
                      <a href="#services">Front End Development</a>
                    </li>
                    <li
                      onClick={() => {
                        setActive("Services");
                        setServicesVisibility(false);
                      }}
                    >
                      <a href="#services">Back End Development</a>
                    </li>
                    <li
                      onClick={() => {
                        setActive("Services");
                        setServicesVisibility(false);
                      }}
                    >
                      <a href="#services">Full Stack Development</a>
                    </li>
                  </motion.ul>
                ) : null}
              </AnimatePresence>
            </li>

            <li
              className={`${
                active === "Clients" ? "text-gray-500" : "text-light-almond"
              } 
                hover:text-gray-500 text-[18px] font-medium cursor-pointer`}
              onClick={() => {
                setActive("Clients");
                setServicesVisibility(false);
              }}
            >
              <a href="#clients">Clients</a>
            </li>

            <li
              className={`${
                active === "About" ? "text-gray-500" : "text-light-almond"
              } 
                hover:text-gray-500 text-[18px] font-medium cursor-pointer`}
              onClick={() => {
                setActive("About");
                setServicesVisibility(false);
              }}
            >
              <a href="#about">About</a>
            </li>
          </ul>

          <div className="sm:hidden">
            <div
              onClick={dropDownMenuToggle}
              className="drop-down-menu-class object-contain cursor-pointer"
              id="drop-down-menu-id"
            >
              <div className="w-[28px] h-[28px] drop-down-menu-div">
                <span className="line-1"></span>
                <span className="line-2"></span>
                <span className="line-3"></span>
              </div>
            </div>
            <div
              className={`${
                toggle === "hidden"
                  ? "hidden"
                  : !toggle
                  ? "flex"
                  : "reverse-animation"
              } navbar-drop-down-menu p-6 backdrop-filter backdrop-blur-xl absolute top-20 right-0 mx-4 my-2 
            min-w-[140px] z-10 rounded-xl border border-gray-600`}
              id="navbar-drop-down-menu-id"
            >
              <ul className="list-none flex justify-end items-start gap-4 flex-col">
                <li
                  className={`${
                    active === "Services"
                      ? "text-gray-500"
                      : "text-deep-charcoal"
                  } 
                    font-poppins font-medium text-[16px] hover:text-gray-500 cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive("Services");
                  }}
                >
                  <a onClick={dropDownMenuToggle} href="#services">
                    Services
                  </a>
                </li>

                <li
                  className={`${
                    active === "Clients"
                      ? "text-gray-500"
                      : "text-deep-charcoal"
                  } 
                    font-poppins font-medium text-[16px] hover:text-gray-500 cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive("Clients");
                  }}
                >
                  <a onClick={dropDownMenuToggle} href="#clients">
                    Clients
                  </a>
                </li>

                <li
                  className={`${
                    active === "About" ? "text-gray-500" : "text-deep-charcoal"
                  } 
                    font-poppins font-medium text-[16px] hover:text-gray-500 cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive("About");
                  }}
                >
                  <a onClick={dropDownMenuToggle} href="#about">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
