{/**

Este fragmento de código es un componente de React que muestra una sección social, incluyendo enlaces a LinkedIn y a un número de teléfono, representados por los íconos de LinkedIn y teléfono respectivamente. 
Además, hay un botón "Descubre TICWAY" que al hacer clic redirige a la sección de Outsourcing.
*/}

// Importar React y los componentes necesarios
import React from "react";
import { Link } from "react-scroll";
import { FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { containerVariant } from "@/src/utils/animation"; 

// Componente Social
const Social = () => {
  // Definir el color de los iconos
  const iconColor = "#5889a0";

  return (
    <motion.div
      initial={{ width: ".5rem", borderRadius: "100%" }}
      whileInView={{ width: "70%", borderRadius: "999px", transition: { type: "easeOut", duration: 1 } }}
      className="socialBox" 
    >
      <motion.div
        variants={containerVariant()} 
        initial="offscreen"
        whileInView={"onscreen"}
        viewport={{ once: true }}
        className="iconContainer" 
      >
        {/* Enlace a la página de LinkedIn */}
        <motion.div variants={containerVariant(0.1)}>
          <a href="https://www.linkedin.com/company/ticwayvitoria/about/" style={{ textDecoration: "none", color: iconColor }}>
            <FaLinkedin size={30} color={iconColor} /> {/* Icono de LinkedIn */}
          </a>
        </motion.div>
        {/* Enlace al número de teléfono */}
        <motion.div variants={containerVariant(0.2)}>
          <a href="tel:945128060" style={{ textDecoration: "none", color: iconColor }}>
            <FaPhoneAlt size={30} color={iconColor} /> {/* Icono de teléfono */}
          </a>
        </motion.div>
      </motion.div>

      {/*Cuando haces clic en el botón, te redirige a la sección de Outsourcing.*/}
      <Link
        to="outsourcing-wrapper"
        spy={true}
        smooth={true}
        className="contacto-button" // Agregar clase para estilos de botón de contacto
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }} // Estilos para el enlace
      >
        {/*Texto que aparece dentro del botón*/}
        <span style={{ marginRight: "10px" }}>Descubre</span> {/* Texto del enlace */}
        <strong style={{ fontWeight: "bold" }}>TICWAY</strong> {/* Texto en negrita */}
      </Link>
    </motion.div>
  );
};

export default Social; 
