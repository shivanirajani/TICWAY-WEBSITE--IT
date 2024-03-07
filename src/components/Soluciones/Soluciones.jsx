import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import './Soluciones.css';
import { tagVariants, titleVariants } from "@/src/utils/animation";
import { soluciones } from '@/src/utils/data';

const Soluciones = ({ imageSrc, description }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => {
    setShowDetails(!showDetails);
  };

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

  const textStyle = { color: '#FAFAFA' };

  return (
    <div className="soluciones-wrapper">
      <div className="soluciones-container">
        <div className="container">
          <div className="soluciones-container">
            {/* Head */}
            <div className="soluciones-head">
              <motion.span
                variants={tagVariants}
                initial="offscreen"
                animate="onscreen"
                className="tag"
                style={{ color: '#FAFAFA' }}
              >
                Elige la solución ideal para ti
              </motion.span>

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

            <div className='soluciones-features'>
              {soluciones.map((feature, i) => (
                <div className='soluciones-feature' key={i}>
                  {/* Your text content */}
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
                    <span className='des' style={{ color: "orange"  }}>
                      <span style={{ fontSize: '1.9rem', '@media (max-width: 768px)': { fontSize: '0.5rem' } }}>0{i + 1}</span>
                    </span>
                    <span className='sec-title' style={{ color: "#fafafa"  }}>
                      <span style={{ fontSize: '1.9rem', '@media (max-width: 768px)': { fontSize: '0.4rem' } }}>{feature.title}</span>
                    </span>
                    <span className='text' style={{ color: "#fafafa" }}>
                      <span style={{ fontSize: '1.2rem', '@media (max-width: 768px)': { fontSize: '0.2rem' } }}>{feature.des}</span>
                    </span>
                    {/* Displaying benefits as bullet points */}
                    <ul style={{ paddingInlineStart: '20px', fontSize: '16px' }}>
                      {feature.benefits.map((benefit, index) => (
                        <li key={index} style={{ ...textStyle, fontSize: '18px' }}>{benefit}</li>
                      ))}
                    </ul>
                  </motion.div>
                  <motion.div
                    className='image-container'
                    variants={featureVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                  >
                    {/* Your image */}
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
