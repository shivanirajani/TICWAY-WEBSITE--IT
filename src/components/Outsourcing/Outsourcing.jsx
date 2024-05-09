{/**
El componente de Outsourcing muestra información sobre qué es el outsourcing tecnológico, las especialidades de Ticway y el objetivo de Ticway. 
Permite al usuario elegir qué sección desea leer. 
Además, el contenido se ajusta automáticamente al tamaño de la pantalla y utiliza animaciones para hacer la experiencia más atractiva.
 */}

// Importaciones de módulos y componentes necesarios
import React, { useState, useEffect } from "react";
import "./Outsourcing.css"; 
import { features } from "@/src/utils/data"; 
import Image from "next/image"; 
import {  motion } from "framer-motion"; 
import { titleVariants, tagVariants } from "@/src/utils/animation"; 
import { FaDesktop, FaBullseye, FaBullhorn } from 'react-icons/fa'; 
import Select, { components } from 'react-select'; 

// Variante de animación para el contenedor de outsourcing
const outsourcingVariants = {
  offscreen: {
    scale: 0.7, 
  },
  onscreen: {
    scale: 0.9, 
    transition: {
      type: "spring", 
      duration: 1.5, 
    }
  }
};

// Componente de encabezado
const Heading = () => {
  return (
    <div className="outsourcing-head" style={{ textAlign: 'left' }}>
      {/* Etiqueta animada para el encabezado */}
      <motion.span
        variants={tagVariants}
        initial="offscreen"
        whileInView={"onscreen"} 
        className="tag"
        style={{ color: 'white' }}
      >
        Enfrenta el desafío con éxito
      </motion.span>
      {/* Título animado para el encabezado */}
      <motion.span variants={titleVariants} initial="offscreen" whileInView={"onscreen"} className="title" style={{ color: '#f49e2b' }}>
        Outsourcing Tecnológico
      </motion.span>
    </div>
  );
};

// Componente principal de Outsourcing
const Outsourcing = () => {
  const [selectedSection, setSelectedSection] = useState("Outsourcing Tecnológico"); 
  const [animationKey, setAnimationKey] = useState(0); 
  const [isSmallScreen, setIsSmallScreen] = useState(false); 

  // Variante de animación para el contenedor de iconos
  const iconContainerVariant = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  // Manejador de clic en el contenedor
  const handleContainerClick = (section) => {
    setSelectedSection(section);
    setAnimationKey((prevKey) => prevKey + 1);
  };

  // Manejador de cambio de tamaño de pantalla
  const handleScreenResize = () => {
    setIsSmallScreen(window.innerWidth <= 768);
  };

  // Efecto de efectuar cambios cuando cambia el tamaño de la pantalla
  useEffect(() => {
    handleScreenResize();
    window.addEventListener('resize', handleScreenResize);
    return () => {
      window.removeEventListener('resize', handleScreenResize);
    };
  }, []);

  // Componente personalizado para las opciones del selector
  const CustomOption = ({ innerProps, label, data }) => (
    <components.Option {...innerProps}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {data.icon && <div style={{ marginRight: '8px' }}>{data.icon}</div>}
        {label}
      </div>
    </components.Option>
  );
  
  // Componente personalizado para el valor único del selector
  const CustomSingleValue = ({ children, ...props }) => (
    <components.SingleValue {...props}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {props.data.icon && <div style={{ marginRight: '8px' }}>{props.data.icon}</div>}
        {children}
      </div>
    </components.SingleValue>
  );

  // Obtener contenido según la sección seleccionada
  const getContent = () => {
    const contentVariants = {
      offscreen: { opacity: 0, y: 50 },
      onscreen: { opacity: 1, y: 0, transition: { duration: 1 } },
    };

    switch (selectedSection) {
      case "Outsourcing Tecnológico":
        return (
          <>
            {/* Título y texto para la sección "Outsourcing Tecnológico" */}
            <motion.span
              key={`title-${animationKey}`}
              initial="offscreen"
              animate="onscreen"
              variants={contentVariants}
              style={{color: "orange"}}
              className={`sec-titles ${isSmallScreen ? 'left-align' : ''}`}
            >
              Outsourcing Tecnológico
            </motion.span>
            <motion.span
              key={`text-${animationKey}`}
              initial="offscreen"
              animate="onscreen"
              variants={contentVariants}
              style={{fontWeight: "400"}}
              className="texts"
            >
              Outsourcing Tecnológico es confiar la administración de tus TICs a expertos externos. Descubre los beneficios: delega la gestión de tus servicios de Tecnologías de la Información a profesionales especializados. Satisface eficientemente las necesidades tecnológicas de tu empresa, optimiza recursos y fortalece tu posición en el mercado con nuestro servicio de Outsourcing Tecnológico.
            </motion.span>
            {/* Características de bloque para la sección "Outsourcing Tecnológico" */}
            <div className="block-features">
              {features.slice(0, 3).map((feature, i) => (
                <motion.div
                  key={`${i}-${animationKey}`}
                  initial="offscreen"
                  animate="onscreen"
                  variants={iconContainerVariant}
                  className="block-feature"
                >
                  <Image src={feature.icon} alt="feature" width={100} height={100} /> <br />
                  <span style={{ color: 'white', fontWeight: 'bolder', fontSize: "18px"}}>{feature.title}</span>
                </motion.div>
              ))}
            </div>
          </>
        );

      case "Nuestras Especialidades":
        return (
          <>
            {/* Título y texto para la sección "Nuestras Especialidades" */}
            <motion.span
              key={`title-${animationKey}`}
              initial="offscreen"
              animate="onscreen"
              variants={contentVariants}
              style={{color: "orange"}}
              className={`sec-titles ${isSmallScreen ? 'left-align' : ''}`}
            >
              Nuestras Especialidades
            </motion.span>
            <motion.span
              key={`text-${animationKey}`}
              initial="offscreen"
              animate="onscreen"
              variants={contentVariants}
              style={{fontWeight: "400"}}
              className="texts"
            >
              En la era interconectada, la adopción tecnológica es crucial. TICWAY brinda soluciones personalizadas, colaborando estrechamente contigo. Nuestro equipo especializado optimiza eficientemente los recursos, permitiéndote enfocarte en lo esencial de tu negocio, mientras nosotros nos encargamos de lo demás con profesionalismo y dedicación.
            </motion.span>
            {/* Características de bloque para la sección "Nuestras Especialidades" */}
            <div className="block-features">
              {features.slice(3, 6).map((feature, i) => (
                <motion.div
                  key={`${i}-${animationKey}`}
                  initial="offscreen"
                  animate="onscreen"
                  variants={iconContainerVariant}
                  className="block-feature"
                >
                  <Image src={feature.icon} alt="feature" width={100} height={100} /> <br />
                  <span style={{ color: 'white', fontWeight: 'bolder', fontSize: "18px"}}>{feature.title}</span>
                </motion.div>
              ))}
            </div>
          </>
        );

      case "El Objectivo de Ticway":
        return (
          <>
            {/* Título y texto para la sección "El Objectivo de Ticway" */}
            <div className="mission-header">
              <motion.span
                key={`title-${animationKey}`}
                initial="offscreen"
                animate="onscreen"
                variants={contentVariants}
                style={{color: "orange"}}
                className={`sec-titles ${isSmallScreen ? 'left-align' : ''}`}
              >
                El Objectivo de Ticway
              </motion.span>
            </div>
            <motion.span
              key={`text-${animationKey}`}
              initial="offscreen"
              animate="onscreen"
              variants={contentVariants}
              style={{fontWeight: "400"}}
              className="texts"
            >
              En nuestra sociedad interconectada, Ticway es esencial para abordar dependencias tecnológicas y mejorar la competitividad. Ignorarlas resulta en pérdida de competitividad y soluciones perjudiciales a corto plazo. La disminución de productividad, subestimada al principio, se vuelve más impactante. Ticway ofrece asesoramiento en TIC, clave para enfrentar desafíos y aprovechar oportunidades, siendo una estrategia inteligente para el éxito a largo plazo en un entorno interconectado.
            </motion.span>
            {/* Características de bloque para la sección "El Objectivo de Ticway" */}
            <div className="block-features">
              {features.slice(6, 9).map((feature, i) => (
                <motion.div
                  key={`${i}-${animationKey}`}
                  initial="offscreen"
                  animate="onscreen"
                  variants={iconContainerVariant}
                  className="block-feature"
                >
                  <Image src={feature.icon} alt="feature" width={100} height={100} /> <br />
                  <span style={{ color: 'white', fontWeight: 'bolder', fontSize: "18px"}}>{feature.title}</span>
                </motion.div>
              ))}
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="outsourcing-wrapper">
      {/* Encabezado */}
      <Heading />
      <div className="outsourcing-container">
        <div className="sourcing-container">
          {isSmallScreen && (
            // Selector para dispositivos pequeños
            <Select
              className="dropdown-menu"
              options={[
                { value: "Outsourcing Tecnológico", label: "Outsourcing Tecnológico", icon: <FaDesktop size={16} ccolor="var(--secondary-color)" /> },
                { value: "Nuestras Especialidades", label: "Nuestras Especialidades", icon: <FaBullseye size={16} color="var(--secondary-color)" /> },
                { value: "El Objectivo de Ticway", label: "El Objectivo de Ticway", icon: <FaBullhorn size={16} color="var(--secondary-color)" /> },
              ]}
              value={{
                value: selectedSection,
                label: selectedSection,
                icon: (
                  // Determinar el icono según la sección seleccionada
                  selectedSection === "Outsourcing Tecnológico" ? <FaDesktop size={16} color="var(--secondary-color)" /> :
                  selectedSection === "Nuestras Especialidades" ? <FaBullseye size={16} color="var(--secondary-color)" /> :
                  selectedSection === "El Objectivo de Ticway" ? <FaBullhorn size={16} color="var(--secondary-color)" /> :
                  // Icono predeterminado si ninguna de las condiciones anteriores coincide
                  <FaDesktop size={16} color="var(--secondary-color)" />
                ),
              }}
              onChange={(selectedOption) => handleContainerClick(selectedOption.value)}
              components={{ SingleValue: CustomSingleValue }}
            />
          )}

          <div className="outsourcing-content-container">
            {!isSmallScreen && (
              // Contenedor de selección para dispositivos de pantalla más grandes
              <motion.div
                variants={outsourcingVariants}
                initial="offscreen"
                whileInView="onscreen"
                className="selection-container">
                {/* Opciones de selección */}
                <motion.div
                  initial={{ opacity: 0, x: -100 , y: -100 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      type: "easeIn",
                      duration: 1,
                      delay: 0.1
                    }
                  }}
                  className={`section-container ${selectedSection === "Outsourcing Tecnológico" ? "active" : ""}`}
                  onClick={() => handleContainerClick("Outsourcing Tecnológico")}>
                  <div className="icon-container">
                    <FaDesktop size={30} style={{ color: 'white'}}/>
                  </div>
                  <div className="text-container">
                    <span style={{ marginLeft: '8px', color: "white"}}>Outsourcing Tecnológico</span>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -100, y: -100 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      type: "easeIn",
                      duration: 1,
                      delay: 0.3
                    }
                  }}
                  className={`section-container ${selectedSection === "Nuestras Especialidades" ? "active" : ""}`}
                  onClick={() => handleContainerClick("Nuestras Especialidades")}>
                  <div className="icon-container">
                    <FaBullseye size={30} style={{ color: 'white'}}/>
                  </div>
                  <div className="text-container">
                    <span style={{ marginLeft: '8px', color: "white" }}>Nuestras Especialidades</span>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -100 , y: -100 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      type: "easeIn",
                      duration: 1,
                      delay: 0.6
                    }
                  }}
                  className={`section-container ${selectedSection === "El Objectivo de Ticway" ? "active" : ""}`}
                  onClick={() => handleContainerClick("El Objectivo de Ticway")}>
                  <div className="icon-container">
                    <FaBullhorn size={30}  style={{ color: 'white', marginRight: "16px" }}/>
                  </div>
                  <div className="text-container">
                    <span style={{ marginLeft: '8px', color: "white" }}>El Objectivo de Ticway</span>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {/* Contenido de la sección */}
            <div className="outsourcing-content">{getContent()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Outsourcing;
