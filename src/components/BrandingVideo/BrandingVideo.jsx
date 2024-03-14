"use client"
import React, { useRef } from "react";
import "./BrandingVideo.css";
import { motion, useScroll, useTransform } from "framer-motion";

// Componente funcional para el video de branding
const BrandingVideo = () => {
    // Referencia al elemento video
    const ref = useRef(null);

    // Obtén el progreso del scroll
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"],
    });

    // Transforma el progreso del scroll en una escala para el video
    const escala = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    // Renderiza el componente
    return (
        <div className="bv-container">
            <div className="container">
                {/* Video con animaciones */}
                <motion.video
                    ref={ref}
                    className="bv-video"
                    loop
                    muted
                    autoPlay
                    controls=""
                    style={{ scale: escala }}
                >
                    <source src="/Banner.mp4" type="video/mp4" />
                </motion.video>
            </div>
        </div>
    );
};

export default BrandingVideo;