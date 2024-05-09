{/**
Implementación de una barra de navegación en React compatible con escritorio y móviles.
Utiliza react-scroll para un desplazamiento fluido entre secciones de la página y efectos pegajosos al hacer scroll. Incluye enlaces y un menú desplegable para dispositivos móviles. 
**/}


// Importaciones de módulos y componentes necesarios

import React, { useState } from "react";
import "./Navbar.css";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Link } from "react-scroll";
import Image from "next/image";

/**
 * Componente de barra de navegación.
 * 
 * @returns {JSX.Element} Elemento de React que representa la barra de navegación.
 */
const Navbar = () => {
  // Estado para controlar la apertura del menú móvil
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  // Estado para controlar el estilo de la barra de navegación
  const [navStyle, setNavStyle] = useState();
  // Obtiene el progreso del desplazamiento de la página
  const { scrollYProgress } = useScroll();

  // Cambia el estilo de la barra de navegación dependiendo del progreso de desplazamiento
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
            {/* Enlace al inicio de la página */}
            <Link to="h-wrapper" spy smooth offset={-100}>
              <Image
                src="/logo.png"
                alt="Logo de TICWAY"
                width={110}
                height={60}
                className="logo-image"
              />
            </Link>
            <div className="n-logo">
              {/* Texto del logo con enlace al inicio de la página */}
              <Link to="h-wrapper" spy smooth offset={-100} className="logo-text">
                <span className="ticway-text">TICWAY</span>
              </Link>
            </div>
          </div>
          <div className="n-right">
            <div className="n-menu">
              {/* Enlaces a secciones de la página */}
              <Link to="outsourcing-wrapper" spy={true} smooth={true}>
                <span>Outsourcing Tecnológico</span>
              </Link>
              <Link to="ticway-wrapper" spy smooth offset={100}>
                <span>Ticway Contigo</span>
              </Link>
              <Link to="servicios-container" spy={true} smooth={true}>
                <span>Servicios</span>
              </Link>
              <Link to="soluciones-wrapper" spy smooth offset={100}>
                <span>Soluciones</span>
              </Link>
            </div>
            <div className="contact-button">
              {/* Enlace al formulario de contacto */}
              <Link to="contacto-wrapper" spy smooth offset={40}>
                <span>Contacto</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Versión movil del Menú de navegación */}
      <div className="nm-container">
        <div className="n-logo-container">
          <Link to="h-wrapper" spy smooth offset={-100}>
            <Image
              src="/logo.png"
              alt="Logo de TICWAY"
              width={100}
              height={50}
              className="logo-image"
            />
          </Link>
          <Link to="h-wrapper" spy smooth offset={-100} className="logo-text">
            <span className="ticway-text">TICWAY</span>
          </Link>
        </div>
        {/* Ícono para abrir o cerrar el menú móvil */}
        {!mobileMenuOpened ? (
          <BiMenuAltRight size={30} onClick={() => setMobileMenuOpened(true)} />
        ) : (
          <RxCross2 size={30} onClick={() => setMobileMenuOpened(false)} />
        )}
        {/* Contenedor del menú móvil */}
        <div
          className="nm-menu"
          style={{ transform: mobileMenuOpened && "translateX(0)" }}
        >
          {/* Enlaces del menú móvil */}
          <Link
            onClick={() => setMobileMenuOpened(false)}
            to="outsourcing-wrapper"
            spy={true}
            smooth={true}
            offset={100}
          >
            <span>Outsourcing Tecnológico</span>
          </Link>
          <Link
            onClick={() => setMobileMenuOpened(false)}
            to="ticway-wrapper"
            spy={true}
            smooth={true}
            offset={1070}
          >
            <span>Ticway Contigo</span>
          </Link>
          <Link
            onClick={() => setMobileMenuOpened(false)}
            to="servicios-head"
            spy={true}
            smooth={true}
            offset={-100} 
          >
            <span>Servicios</span>
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
