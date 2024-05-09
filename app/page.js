
"use client"

{/**
  Este código crea la página principal de una aplicación web con React, importando varios componentes como BrandingVideo, Hero, Navbar, Contacto, Outsourcing, TicwayContigo, Servicios, Footer, Soluciones y Services. 
  Se añaden efectos de animación con framer-motion, como el cambio de color de fondo al entrar y salir del viewport, y los estilos CSS se gestionan con Styled Components.
*/}

// Importaciones de módulos y componentes necesarios
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { StyleSheetManager } from "styled-components";
import BrandingVideo from "@/src/components/BrandingVideo/BrandingVideo";
import Hero from "@/src/components/Hero/Hero";
import Navbar from "@/src/components/Navbar/Navbar";
import Contacto from "@/src/components/Contacto/Contacto";
import "./page.css";
import Outsourcing from "@/src/components/Outsourcing/Outsourcing";
import Servicios from "@/src/components/Servicios/Servicios";
import Footer from "@/src/components/Footer/Footer";
import Soluciones from "@/src/components/Soluciones/Soluciones";
import Services from "@/src/components/Services/Services";
import TicwayContigo from "@/src/components/TicwayContigo /TicwayContigo";

// Función para decidir si se debe reenviar una propiedad al componente
const shouldForwardProp = (prop) => !["position"].includes(prop);

export default function Home() {
  // Control para la animación
  const controls = useAnimation();

  useEffect(() => {
    // Efecto de cambio de color de fondo al montar el componente
    controls.start({
      backgroundColor: "var(--secondary-color)", // Cambia el color de fondo
    });
  }, [controls]); // useEffect que se ejecuta cuando el control de animación cambia

  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <motion.div className="app" animate={controls}>
        <Navbar /> {/** // Estoy renderizando el componente de Navbar (Navegación) */}
        <Hero /> {/** // Estoy renderizando el componente de Hero, la sección principal de la página web. */}

        <motion.div
          onViewportEnter={() =>
            controls.start({
              backgroundColor: "#f6f7fb", // Cambia el color de fondo al entrar en el viewport
            })
          }
          onViewportLeave={() =>
            controls.start({
              backgroundColor: "var(--secondary-color)", // Cambia el color de fondo al salir del viewport
            })
          }
          viewport={{ amount: 0.1 }} // Configuración del viewport
        >
          <BrandingVideo /> {/** // Estoy renderizando el componente de Branding Video (El Video que aparece en la Página Web) */}
        </motion.div>

        <motion.div
          onViewportEnter={() =>
            controls.start({
              backgroundColor: "var(--secondary-color)", // Cambia el color de fondo al entrar en el viewport
            })
          }
          onViewportLeave={() =>
            controls.start({
              backgroundColor: "#f6f7fb", // Cambia el color de fondo al salir del viewport
            })
          }
          viewport={{ amount: 0.5 }} // Configuración del viewport
        >
          <Outsourcing /> {/** // Estoy renderizando el componente de Outsourcing Tecnológico*/}
        </motion.div>

        <motion.div
          onViewportEnter={() =>
            controls.start({
              backgroundColor: "#f6f7fb", // Cambia el color de fondo al entrar en el viewport
            })
          }
          onViewportLeave={() =>
            controls.start({
              backgroundColor: "var(--secondary-color)", // Cambia el color de fondo al salir del viewport
            })
          }
          viewport={{ amount: 0.4 }}
        >
          <TicwayContigo/> {/** // Estoy renderizando el componente de Ticway Contigo*/}
        </motion.div>

        <motion.div
          onViewportEnter={() =>
            controls.start({
              backgroundColor: "var(--secondary-color)", // Cambia el color de fondo al entrar en el viewport
            })
          }
          onViewportLeave={() =>
            controls.start({
              backgroundColor: "#f6f7fb", // Cambia el color de fondo al salir del viewport
            })
          }
          viewport={{ amount: 0.2 }} // Configuración del viewport
        >
          <Servicios /> {/** // Estoy renderizando el componente de Servicios */ }
        </motion.div>

        <motion.div
          onViewportEnter={() =>
            controls.start({
              backgroundColor: "#f6f7fb", // Cambia el color de fondo al entrar en el viewport
            })
          }
          onViewportLeave={() =>
            controls.start({
              backgroundColor: "var(--secondary-color)", // Cambia el color de fondo al salir del viewport
            })
          }
          viewport={{ amount: 0.1 }} // Configuración del viewport
        >
          <Services /> {/** Estoy renderizando el componente de Services. Este componente representa el carrusel de servicios utilizado en Ticway */}
        </motion.div>

        <motion.div
          onViewportEnter={() =>
            controls.start({
              backgroundColor: "var(--secondary-color)", // Cambia el color de fondo al entrar en el viewport
            })
          }
          onViewportLeave={() =>
            controls.start({
              backgroundColor: "#f6f7fb", // Cambia el color de fondo al salir del viewport
            })
          }
          viewport={{ amount: 0.3 }} // Configuración del viewport
        >
          <Soluciones /> {/** Estoy renderizando el componente de Soluciones Outsourcing */}
        </motion.div>

        <motion.div
          onViewportEnter={() =>
            controls.start({
              backgroundColor: "var(--secondary-color)", // Cambia el color de fondo al entrar en el viewport
            })
          }
          onViewportLeave={() =>
            controls.start({
              backgroundColor: "#f6f7fb", // Cambia el color de fondo al salir del viewport
            })
          }
          viewport={{ amount: 0.4 }} // Configuración del viewport
        >
          <Contacto /> {/** Estoy renderizando el componente de Contacto */}
        </motion.div>

        <Footer /> {/** Estoy renderizando el componente de Footer (Pie de Página de la aplicación) */}
      </motion.div>
    </StyleSheetManager>
  );
}
