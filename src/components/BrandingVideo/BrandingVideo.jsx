"use client"
// Importaciones de módulos y componentes necesarios
import React, { useRef } from "react";
import "./BrandingVideo.css";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Componente funcional para el video de branding.
 * Muestra un video con animaciones y efectos de scroll dinámicos.
 * 
 * @returns {JSX.Element} Elemento de React que representa el video de branding.
 */
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
        // Contenedor principal del componente de video de branding
        <div className="bv-container">
            <div className="container">
                {/* Video con animaciones */}
                <motion.video
                    // Referencia al elemento de video
                    ref={ref}
                    // Clase CSS del video
                    className="bv-video"
                    // Reproducción en bucle
                    loop
                    // Audio desactivado
                    muted
                    // Reproducción automática
                    autoPlay
                    // Controles del video (vacío para deshabilitarlos)
                    controls=""
                    // Estilo de escala del video
                    style={{ scale: escala }}
                >
                    {/* Fuente del video */}
                    <source src="video/Banner.mp4" type="video/mp4" />
                </motion.video>
            </div>
        </div>
    );
};

export default BrandingVideo;
