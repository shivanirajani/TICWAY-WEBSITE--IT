

"use client"

{/**
Sección de Servicios: Funciona como un conjunto de preguntas frecuentes, cada tarjeta representa una pregunta.
Al hacer clic en una tarjeta, muestra la respuesta correspondiente, ofreciendo detalles adicionales.
La interacción permite al usuario acceder fácilmente a la información deseada.
**/}


// Importaciones de módulos y componentes necesarios
import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";


import "./Servicios.css";

const Servicios = () => {
  // Datos de los servicios que se ofrecen
  const serviciosData = [
    {
      title: "Creo que necesitamos sentarnos y reflexionar en una perspectiva más a largo plazo",
      description: "Estamos dispuestos a conocer en detalle en qué se basa tu negocio y de qué forma se desarrolla para que en los tiempos y condiciones que precises, poder asesorarte y ayudarte en la transformación TIC"
    },
    {
      title: "Mi proveedor de siempre no cubre todas mis necesidades",
      description: "Tenemos la capacidad de analizar tu entorno TIC y en base a las necesidades no cubiertas, con los proveedores y recursos que tú consideres, guiarte y asesorarte"
    },
    {
      title: "Creo que estoy desperdiciando recursos, las TIC me cuestan demasiado y no veo resultados",
      description: "Consideramos a las TIC como un valor básico de competitividad, por ello analizaremos y auditaremos la totalidad de los recursos dedicados, con la finalidad de optimizar tanto sus cometidos, como sus costes"
    },
    {
      title: "Acabo de montar una empresa y no sé por dónde empezar",
      description: "Sabemos qué es indispensable y qué no, sabemos que lo importante es adaptar las soluciones a la empresa y no la empresa a las soluciones"
    },  
    {
      title: "Tengo un comercio pero ni idea de tecnología: No sé qué hacer ante tantas opciones",
      description: "Procuramos estar siempre al tanto de las soluciones existentes en el mercado, lo cual nos permite buscar la opción que más encaje en cada caso"
    },
    {
      title: "Sé que necesito mejorar, pero mi presupuesto es limitado y debo priorizar",
      description: "Disponemos de la experiencia suficiente para diferenciar lo urgente y lo importante, priorizando y planificando las necesidades sobre las que actuar"
    },
    // Agregar más elementos de servicio según sea necesario
  ];

  // Variantes para la animación del contenedor
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  // Variantes para la animación de la tarjeta
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { ease: "easeInOut", duration: 0.8 } },
  };

  // Variantes para la animación de la etiqueta
  const tagVariants = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: { opacity: 1, y: 0 },
  };

  // Variantes para la animación del título
  const titleVariants = {
    offscreen: { opacity: 0, y: 20 },
    onscreen: { opacity: 1, y: 0 },
  };

  // Variantes para la animación de la descripción
  const descriptionVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto", transition: { ease: "easeInOut", duration: 0.5 } },
  };

  // Estado para el índice de la tarjeta abierta
  const [openIndex, setOpenIndex] = useState(null);
  // Control de animación
  const controls = useAnimation();

  // Función para alternar la visibilidad de la descripción
  const toggleDescription = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

// Renderizado del componente Servicios
return (
  <div className="container">
    <div className="servicios-container">
      {/* Encabezado de los servicios */}
      <div className="servicios-head">
        {/* Etiqueta animada que resalta la importancia de los servicios */}
        <motion.span
          variants={tagVariants}
          initial="hidden"
          animate={controls}
          className="tag"
        >
          Añadimos valor a tu negocio con TIC
        </motion.span>
        {/* Título animado */}
        <motion.span
          variants={titleVariants}
          initial="hidden"
          animate={controls}
          className="title"
        >
          Áreas de Servicio
        </motion.span>
      </div>
      {/* Contenedor de los servicios */}
      <motion.div
        className="servicios-content"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        // Control de animación al entrar y salir del viewport
        onViewportEnter={() => controls.start("visible")}
        onViewportLeave={() => controls.start("hidden")}
      >
        {/* Iteración sobre los datos de los servicios para renderizar cada tarjeta */}
        {serviciosData.map((item, index) => (
          <motion.div
            key={index}
            className="card"
            style={{
              // Estilo dinámico basado en si la tarjeta está abierta o no
              backgroundColor: openIndex === index ? "var(--secondary-color)" : "rgba(51, 51, 51, 0.5)",
            }}
            variants={cardVariants}
          >
            <div className="service-header">
              {/* Título del servicio */}
              <h2 className="question-title">{item.title}</h2>
              {/* Icono de "+" o "-" para expandir o contraer la descripción */}
              <span
                className="toggle-sign"
                onClick={(event) => {
                  // Comprobamos si el clic es en el icono "+" o "-"
                  const isToggleSignClicked = event.target.classList.contains("toggle-sign");
                  if (isToggleSignClicked) {
                    event.stopPropagation();
                    toggleDescription(index);
                  }
                }}
              >
                {/* Se muestra "+" si la tarjeta está cerrada, "-" si está abierta */}
                {openIndex === index ? "−" : "+"}
              </span>
            </div>
            {/* Descripción del servicio */}
            <motion.p
              className="description"
              variants={descriptionVariants}
              initial="hidden"
              // Animación de entrada o salida basada en si la tarjeta está abierta o no
              animate={openIndex === index ? "visible" : "hidden"}
            >
              {item.description}
            </motion.p>
          </motion.div>
        ))}
         </motion.div>
      </div>
    </div>
  );
};

export default Servicios;