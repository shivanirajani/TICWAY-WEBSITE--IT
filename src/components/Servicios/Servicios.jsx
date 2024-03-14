"use client"
import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";


import "./Servicios.css";

const Servicios = () => {
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
    // Add more service items as needed
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { ease: "easeInOut", duration: 0.8 } },
  };

  const tagVariants = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: { opacity: 1, y: 0 },
  };

  const titleVariants = {
    offscreen: { opacity: 0, y: 20 },
    onscreen: { opacity: 1, y: 0 },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto", transition: { ease: "easeInOut", duration: 0.5 } },
  };

  const [openIndex, setOpenIndex] = useState(null);
  const controls = useAnimation();

  const toggleDescription = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="container">
      <div className="servicios-container">
        <div className="servicios-head">
          <motion.span
            variants={tagVariants}
            initial="hidden"
            animate={controls}
            className="tag"
          >
            Añadimos valor a tu negocio con TIC
          </motion.span>
          <motion.span
            variants={titleVariants}
            initial="hidden"
            animate={controls}
            className="title"
          >
            Áreas de Servicio
          </motion.span>
        </div>
        <motion.div
          className="servicios-content"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          onViewportEnter={() => controls.start("visible")}
          onViewportLeave={() => controls.start("hidden")}
        >
          {serviciosData.map((item, index) => (
            <motion.div
              key={index}
              className="card"
              style={{
                backgroundColor: openIndex === index ? "var(--secondary-color)" : "rgba(51, 51, 51, 0.5)",
              }}
              variants={cardVariants}
            >
              <div className="service-header">
                <h2 className="question-title">{item.title}</h2>
                <span
                  className="toggle-sign"
                  onClick={(event) => {
                    // Check if the click is on "+" or "-"
                    const isToggleSignClicked = event.target.classList.contains("toggle-sign");
                    if (isToggleSignClicked) {
                      event.stopPropagation();
                      toggleDescription(index);
                    }
                  }}
                >
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>
              <motion.p
                className="description"
                variants={descriptionVariants}
                initial="hidden"
                animate={openIndex === index ? "visible" : "hidden"}
              >
                {item.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Image Slider */}
    
    </div>
  );
};

export default Servicios;