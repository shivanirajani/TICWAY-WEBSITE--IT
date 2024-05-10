{/**
El código define un componente llamado TicwayContigo en React. 
Este componente muestra un encabezado animado y un slider con contenido dinámico usando Framer Motion y SlickSlider, respectivamente. 
*/}
// Importaciones de módulos y componentes necesarios
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import "./TicwayContigo.css";
import SlickSlider from './SlickSlider'; 
import Image from "next/image";
import { tagVariants, titleVariants } from "@/src/utils/animation";

const TicwayContigo = () => {
  
  // Efecto para el desplazamiento
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Lógica para manejar el desplazamiento
    };

    // Agregar un event listener para el desplazamiento
    window.addEventListener('scroll', handleScroll);

    // Eliminar el event listener cuando se desmonta el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

 
  return (
    <div className="ticway-wrapper">
      <div className="container">
        <div className="ticway-container">
          {/* Encabezado */}
          <div className="ticway-head">
            {/* Animación del título */}
            <motion.span
              variants={tagVariants}
              initial="offscreen"
              whileInView={"onscreen"}
              className="tag"
              style={{ color: 'orange' }} 
            >
              Ventajas de Trabajar Con Nosotros
            </motion.span>

            {/* Animación del subtítulo */}
            <motion.span
              variants={titleVariants}
              initial="offscreen"
              whileInView={"onscreen"}
              className="title"
              style={{ color: '#09171f' }} 
            >
              Ticway Contigo
            </motion.span>
          </div>

          {/* Slider */}
          <SlickSlider /> {/* Renderizado del componente SlickSlider */}
        </div>
      </div>
    </div>
  );
};

export default TicwayContigo;
