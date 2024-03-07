"use client"
import React from "react";
import Social from "../Social/Social";
import "./Hero.css";
import { HeroData } from "@/src/utils/data";
import { motion } from "framer-motion";


const Hero = () => {
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

    

    return (
        <div className="h-wrapper">
            <div className="container">

              
                <div className="h-container">
                    <div className="h-left">
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

                    {/* right side */}
                    <div className="h-right">
                        <div className="h-title">
                            <span>Externaliza tu</span>
                            <span>Departamento IT</span>
                            <span>con Ticway</span>
                        </div>
                        <div className="h-des">
        Avancemos juntos hacia una mayor competitividad
      </div>

                        <Social />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
