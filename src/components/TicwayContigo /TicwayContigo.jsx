import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import "./TicwayContigo.css";
import SlickSlider from './SlickSlider';
import Image from "next/image";
import { tagVariants, titleVariants } from "@/src/utils/animation";

const TicwayContigo = () => {
  


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

 
  return (
    <div className="ticway-wrapper">
      <div className="container">
        <div className="ticway-container">
          {/* Head */}
          <div className="ticway-head">
          <motion.span
          variants={tagVariants}
          initial="offscreen"
          whileInView={"onscreen"}
          className="tag"
          style={{ color: 'orange' }} 
          >
          Ventajas de Trabajar Con Nosotros
          </motion.span>

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
         <SlickSlider />
          </div>
        </div>
      </div>
  );
};

export default TicwayContigo;