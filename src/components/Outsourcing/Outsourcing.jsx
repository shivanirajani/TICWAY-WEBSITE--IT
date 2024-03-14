import React, { useState, useEffect } from "react";
import "./Outsourcing.css";
import { features } from "@/src/utils/data";
import Image from "next/image";
import { motion } from "framer-motion";
import { titleVariants, tagVariants } from "@/src/utils/animation";
import { FaDesktop, FaBullseye, FaBullhorn } from 'react-icons/fa';
import Select, { components } from 'react-select';

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

const Heading = () => {
  return (
    <div className="outsourcing-head" style={{ textAlign: 'left' }}>
      <motion.span
        variants={tagVariants}
        initial="offscreen"
        whileInView={"onscreen"} 
        className="tag"
        style={{ color: 'white' }}
      >
        Enfrenta el desafío con éxito
      </motion.span>
      <motion.span variants={titleVariants} initial="offscreen" whileInView={"onscreen"} className="title" style={{ color: '#f49e2b' }}>
        Outsourcing Tecnológico
      </motion.span>
    </div>
  );
};

const Outsourcing = () => {
  const [selectedSection, setSelectedSection] = useState("Outsourcing Tecnológico");
  const [animationKey, setAnimationKey] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const iconContainerVariant = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const handleContainerClick = (section) => {
    setSelectedSection(section);
    setAnimationKey((prevKey) => prevKey + 1);
  };

  const handleScreenResize = () => {
    setIsSmallScreen(window.innerWidth <= 768);
  };

  useEffect(() => {
    handleScreenResize();
    window.addEventListener('resize', handleScreenResize);
    return () => {
      window.removeEventListener('resize', handleScreenResize);
    };
  }, []);

  const CustomOption = ({ innerProps, label, data }) => (
    <components.Option {...innerProps}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {data.icon && <div style={{ marginRight: '8px' }}>{data.icon}</div>}
        {label}
      </div>
    </components.Option>
  );
  
  const CustomSingleValue = ({ children, ...props }) => (
    <components.SingleValue {...props}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {props.data.icon && <div style={{ marginRight: '8px' }}>{props.data.icon}</div>}
        {children}
      </div>
    </components.SingleValue>
  );

  const getContent = () => {
    const contentVariants = {
      offscreen: { opacity: 0, y: 50 },
      onscreen: { opacity: 1, y: 0, transition: { duration: 1 } },
    };

    switch (selectedSection) {
      case "Outsourcing Tecnológico":
        return (
          <>
            <motion.span
              key={`title-${animationKey}`}
              initial="offscreen"
              animate="onscreen"
              variants={contentVariants}
              className={`sec-titles ${isSmallScreen ? 'left-align' : ''}`}
            >
              Outsourcing Tecnológico
            </motion.span>
            <motion.span
              key={`text-${animationKey}`}
              initial="offscreen"
              animate="onscreen"
              variants={contentVariants}
              className="texts"
            >
              Outsourcing Tecnológico es confiar la administración de tus TICs a expertos externos. Descubre los beneficios: delega la gestión de tus servicios de Tecnologías de la Información a profesionales especializados. Satisface eficientemente las necesidades tecnológicas de tu empresa, optimiza recursos y fortalece tu posición en el mercado con nuestro servicio de Outsourcing Tecnológico.
            </motion.span>
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
            <motion.span
              key={`title-${animationKey}`}
              initial="offscreen"
              animate="onscreen"
              variants={contentVariants}
              className={`sec-titles ${isSmallScreen ? 'left-align' : ''}`}
            >
              Nuestras Especialidades
            </motion.span>
            <motion.span
              key={`text-${animationKey}`}
              initial="offscreen"
              animate="onscreen"
              variants={contentVariants}
              className="texts"
            >
              En la era interconectada, la adopción tecnológica es crucial. TICWAY brinda soluciones personalizadas, colaborando estrechamente contigo. Nuestro equipo especializado optimiza eficientemente los recursos, permitiéndote enfocarte en lo esencial de tu negocio, mientras nosotros nos encargamos de lo demás con profesionalismo y dedicación.
            </motion.span>
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
            <div className="mission-header">
              <motion.span
                key={`title-${animationKey}`}
                initial="offscreen"
                animate="onscreen"
                variants={contentVariants}
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
              className="texts"
            >
              En nuestra sociedad interconectada, Ticway es esencial para abordar dependencias tecnológicas y mejorar la competitividad. Ignorarlas resulta en pérdida de competitividad y soluciones perjudiciales a corto plazo. La disminución de productividad, subestimada al principio, se vuelve más impactante. Ticway ofrece asesoramiento en TIC, clave para enfrentar desafíos y aprovechar oportunidades, siendo una estrategia inteligente para el éxito a largo plazo en un entorno interconectado.
            </motion.span>
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
  <Heading />
  <div className="outsourcing-container">
    <div className="sourcing-container">
      {isSmallScreen && (
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
              // Determine the icon based on the selected section
              selectedSection === "Outsourcing Tecnológico" ? <FaDesktop size={16} color="var(--secondary-color)" /> :
              selectedSection === "Nuestras Especialidades" ? <FaBullseye size={16} color="var(--secondary-color)" /> :
              selectedSection === "El Objectivo de Ticway" ? <FaBullhorn size={16} color="var(--secondary-color)" /> :
              // Default icon if none of the above conditions match
              <FaDesktop size={16} color="var(--secondary-color)" />
            ),
          }}
          onChange={(selectedOption) => handleContainerClick(selectedOption.value)}
          components={{ SingleValue: CustomSingleValue }}
        />
      
          )}

          <div className="outsourcing-content-container">
            {!isSmallScreen && (
              <motion.div
                variants={outsourcingVariants}
                initial="offscreen"
                whileInView="onscreen"
                className="selection-container">
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

            <div className="outsourcing-content">{getContent()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Outsourcing;