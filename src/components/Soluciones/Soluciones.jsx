// Importaciones de módulos y componentes necesarios
import React, { useState } from 'react';
import { motion } from 'framer-motion'; 
import Image from 'next/image'; 
import './Soluciones.css'; 
import { tagVariants, titleVariants } from "@/src/utils/animation"; 
import { soluciones } from '@/src/utils/data'; 

// Componente funcional Soluciones
const Soluciones = ({ imageSrc, description }) => {
  const [showDetails, setShowDetails] = useState(false); // Estado para controlar si se muestran los detalles de la solución

  // Función para manejar el clic en una solución y mostrar o ocultar los detalles
  const handleClick = () => {
    setShowDetails(!showDetails);
  };

  // Variantes de animación para las características de las soluciones
  const featureVariants = {
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

  // Estilos de texto para los detalles de la solución
  const textStyle = { color: '#FAFAFA' };

  return (
    <div className="soluciones-wrapper"> {/* Contenedor principal de soluciones */}
      <div className="soluciones-container"> {/* Contenedor de las soluciones */}
        <div className="container"> {/* Contenedor adicional */}
          <div className="soluciones-container"> {/* Contenedor interno */}
            {/* Encabezado de las soluciones */}
            <div className="soluciones-head">
              {/* Título */}
              <motion.span
                variants={tagVariants}
                initial="offscreen"
                animate="onscreen"
                className="tag"
                style={{ color: '#FAFAFA' }}
              >
                Elige la solución ideal para ti
              </motion.span>
              {/* Subtítulo */}
              <motion.span
                variants={titleVariants}
                initial="offscreen"
                animate="onscreen"
                className="title"
                style={{ color: 'orange' }}
              >
                Soluciones de Outsourcing
              </motion.span>
            </div>

            <div className='soluciones-features'> {/* Contenedor de las características de las soluciones */}
              {/* Mapea sobre las soluciones y muestra cada una */}
              {soluciones.map((feature, i) => (
                <div className='soluciones-feature' key={i}> {/* Característica individual */}
                  {/* Detalles de la solución */}
                  <motion.div
                    className='detail'
                    initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      transition: {
                        type: "easeIn",
                        duration: 1,
                        delay: 0.1,
                      },
                    }}
                  >
                    {/* Número de la solución */}
                    <span className='des' style={{ color: "orange"  }}>
                      <span style={{ fontSize: '1.5rem'}}>0{i + 1}</span>
                    </span>
                    {/* Título de la solución */}
                    <span className='sec-title' style={{ color: "#fafafa", textAlign: "left", fontWeight: "bold"}}>
                      <span style={{ fontSize: '1.5rem'}}>{feature.title}</span>
                    </span>
                    {/* Descripción de la solución */}
                    <span className='text' style={{ color: "#fafafa" }}>
                      <span style={{ fontSize: '1rem', lineHeight: "0" }}>{feature.des}</span>
                    </span>
                    {/* Beneficios de la solución mostrados como puntos */}
                    <ul style={{ paddingInlineStart: '20px', fontSize: '0.2rem' }}>
                      {feature.benefits.map((benefit, index) => (
                        <li key={index} style={{ ...textStyle, fontSize: '16px' }}>{benefit}</li>
                      ))}
                    </ul>
                  </motion.div>
                  {/* Contenedor de la imagen */}
                  <motion.div
                    className='image-container'
                    variants={featureVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                  >
                    {/* Imagen de la solución */}
                    <Image src={feature.imageSrc} alt={feature.title} width={400} height={400} />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Soluciones; 
