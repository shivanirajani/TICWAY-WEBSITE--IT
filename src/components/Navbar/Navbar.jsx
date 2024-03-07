import React, { useState } from "react";
import "./Navbar.css";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Link } from "react-scroll";
import Image from "next/image";

const Navbar = () => {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  const [navStyle, setNavStyle] = useState();
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.2) {
      setNavStyle("sticky");
    } else {
      setNavStyle("");
    }
  });

  return (
    <div className={`n-wrapper ${navStyle}`}>
      <div className="container">
        <div className="n-container">
          <div className="n-logo-container">
            <Link to="h-wrapper" spy smooth offset={-100}>
              <Image
                src="/logo.png"
                alt="TICWAY Logo"
                width={110}
                height={60}
                className="logo-image"
              />
            </Link>
            <div className="n-logo">
              <Link to="h-wrapper" spy smooth offset={-100} className="logo-text">
                <span className="ticway-text">TICWAY</span>
              </Link>
            </div>
          </div>
          <div className="n-right">
            <div className="n-menu">
              <Link to="outsourcing-wrapper" spy={true} smooth={true}>
                <span>Outsourcing Tecnológico</span>
              </Link>
              <Link to="servicios-container" spy={true} smooth={true}>
              <span>Servicios</span>
              </Link>
              <Link to="ticway-wrapper" spy smooth offset={100}>
                <span>Ticway Contigo</span>
              </Link>
              <Link to="soluciones-wrapper" spy smooth offset={100}>
                <span>Soluciones</span>
              </Link>
            </div>
            <div className="contact-button">
              <Link to="contacto-wrapper" spy smooth offset={40}>
                <span>Contacto</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="nm-container">
        <div className="n-logo-container">
          <Link to="h-wrapper" spy smooth offset={-100}>
            <Image
              src="/logo.png"
              alt="TICWAY Logo"
              width={100}
              height={50}
              className="logo-image"
            />
          </Link>
          <Link to="h-wrapper" spy smooth offset={-100} className="logo-text">
            <span className="ticway-text">TICWAY</span>
          </Link>
        </div>
        {!mobileMenuOpened ? (
          <BiMenuAltRight size={30} onClick={() => setMobileMenuOpened(true)} />
        ) : (
          <RxCross2 size={30} onClick={() => setMobileMenuOpened(false)} />
        )}
        <div
          className="nm-menu"
          style={{ transform: mobileMenuOpened && "translateX(0)" }}
        >
          <Link
            onClick={() => setMobileMenuOpened(false)}
            to="outsourcing-wrapper"
            spy={true}
            smooth={true}
          >
            <span>Outsourcing Tecnológico</span>
          </Link>
          <Link
            onClick={() => setMobileMenuOpened(false)}
            to="servicios-head"
            spy={true}
            smooth={true}
            offset={-50} 
            
          >
            <span>Servicios</span>
          </Link>
          <Link
            onClick={() => setMobileMenuOpened(false)}
            to="ticway-wrapper"
            spy={true}
            smooth={true}
          >
            <span>Ticway Contigo</span>
          </Link>
          <Link
            onClick={() => setMobileMenuOpened(false)}
            to="soluciones-wrapper"
            spy={true}
            smooth={true}
          >
            <span>Soluciones</span>
          </Link>
          <Link
            onClick={() => setMobileMenuOpened(false)}
            to="contacto-wrapper"
            spy={true}
            smooth={true}
            offset={-50}
          >
            <span className="m-contact-button">Contacto</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
