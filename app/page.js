"use client"
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { StyleSheetManager } from "styled-components";
import BrandingVideo from "@/src/components/BrandingVideo/BrandingVideo";
import Hero from "@/src/components/Hero/Hero";
import Navbar from "@/src/components/Navbar/Navbar";
import Contacto from "@/src/components/Contacto/Contacto";
import "./page.css";
import Outsourcing from "@/src/components/Outsourcing/Outsourcing";
import TicwayContigo from "@/src/components/TicwayContigo /TicwayContigo";
import Servicios from "@/src/components/Servicios/Servicios";
import Footer from "@/src/components/Footer/Footer";
import Soluciones from "@/src/components/Soluciones/Soluciones";

const shouldForwardProp = (prop) => !["position"].includes(prop);

export default function Home() {
  // Initialize controls within the component
  const controls = useAnimation();

  useEffect(() => {
    // Call controls.start() within useEffect to ensure the component has mounted
    controls.start({
      backgroundColor: "var(--secondary-color)",
    });
  }, [controls]);

  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <motion.div className="app" animate={controls}>
        <Navbar />
        <Hero />

        <motion.div
          onViewportEnter={() =>
            controls.start({
              backgroundColor: "#FAFAFA",
            })
          }
          onViewportLeave={() =>
            controls.start({
              backgroundColor: "var(--secondary-color)",
            })
          }
          viewport={{ amount: 0.1 }}
        >

        <BrandingVideo />
         <Outsourcing /> 
       
        </motion.div>

        <motion.div
          onViewportEnter={() =>
            controls.start({
              backgroundColor: "var(--secondary-color)",
            })
          }
          onViewportLeave={() =>
            controls.start({
              backgroundColor: "#fafafa",
            })
          }
          viewport={{ amount: 0.1 }}
        >
          <Servicios />
        </motion.div>

        <motion.div
          onViewportEnter={() =>
            controls.start({
              backgroundColor: "#FAFAFA",
            })
          }
          onViewportLeave={() =>
            controls.start({
              backgroundColor: "var(--secondary-color)",
            })
          }
          viewport={{ amount: 0.4}}
        >
          <TicwayContigo />
        </motion.div>

        <motion.div
          onViewportEnter={() =>
            controls.start({
              backgroundColor: "var(--secondary-color)",
            })
          }
          onViewportLeave={() =>
            controls.start({
              backgroundColor: "#fafafa",
            })
          }
          viewport={{ amount: 0.3}}
        >
          <Soluciones />
        </motion.div>

        <motion.div
          onViewportEnter={() =>
            controls.start({
              backgroundColor: "var(--secondary-color)",
            })
          }
          onViewportLeave={() =>
            controls.start({
              backgroundColor: "var(--secondary-color)",
            })
          }
          viewport={{ amount: 0.4}}
        >
          <Contacto />
        </motion.div>

        <Footer />
      </motion.div>
    </StyleSheetManager>
  );
}
