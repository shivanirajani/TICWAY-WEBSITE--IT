"use client"

{/**
 * Se encarga de renderizar la sección principal de la página web.
 * Esta sección incluye imágenes animadas, un título destacado y una descripción, así como enlaces a redes sociales.
 * */}


// Importaciones de módulos y componentes necesarios
import React from "react";
import Social from "../Social/Social";
import "./Hero.css";
import { HeroData } from "@/src/utils/data";
import { motion } from "framer-motion";

// Definición de componentes Hero
const Hero = () => {
    // Variaciones de animación para las imágenes
    const imgVariants = {
        initial: {
            y: "18rem",
        },
        animate: {
            y: "0rem",
            transition: {
                type: "spring",
                duration: 2,
                stiffness: 30,
            },
        },
    };

    // Variaciones de animación para los elementos del héroe
    const variants = (delay) => ({
        initial: {
            y: "18rem",
        },
        animate: {
            y: "0rem",
            transition: {
                type: "string",
                damping: 15,
                stiffness: 30,
                duration: 2,
                delay,
            },
        },
    });

    // Renderización del componente Hero
    return (
        <div className="h-wrapper">
            <div className="container">
                {/* Contenedor principal */}
                <div className="h-container">
                    <div className="h-left">
                        {/* Renderización de las primeras 3 imágenes */}
                        <div className="image-row">
                            {HeroData.slice(0, 3).map((person, i) => (
                                <div className="person-pill" key={i}>
                                    <motion.div
                                        initial="initial"
                                        animate="animate"
                                        variants={variants(person.delay)}
                                        style={{ backgroundColor: person.bg }}
                                        className="person-pill-bg"
                                    >
                                        <motion.img
                                            initial="initial"
                                            animate="animate"
                                            variants={imgVariants}
                                            src={person.src}
                                            alt={person.src}
                                        />
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                        {/* Renderización de las últimas 3 imágenes */}
                        <div className="image-row">
                            {HeroData.slice(3, 6).map((person, i) => (
                                <div className="person-pill" key={i}>
                                    <motion.div
                                        initial="initial"
                                        animate="animate"
                                        variants={variants(person.delay)}
                                        style={{ backgroundColor: person.bg }}
                                        className="person-pill-bg"
                                    >
                                        <motion.img
                                            initial="initial"
                                            animate="animate"
                                            variants={imgVariants}
                                            src={person.src}
                                            alt={person.src}
                                        />
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contenido del lado derecho */}
                    <div className="h-right">
                        {/* Título */}
                        <div className="h-title">
                            <span>Externaliza tu</span>
                            <span>Departamento IT</span>
                            <span>con Ticway</span>
                        </div>
                        {/* Descripción */}
                        <div className="h-des">
                            Avancemos juntos hacia una mayor competitividad
                        </div>
                     {/* El Componente Social ha sido importado */}
                        <Social />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
