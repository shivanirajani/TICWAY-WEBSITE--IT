import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Social.css";
import { FaLinkedin, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { containerVariant } from "@/src/utils/animation";

const Social = () => {
  const iconColor = "#5889a0"; // Set the color for all icons

  return (
    <motion.div
      initial={{
        width: ".5rem",
        borderRadius: "100%",
      }}
      whileInView={{
        width: "70%",
        borderRadius: "999px",
        transition: {
          type: "easeOut",
          duration: 1,
        },
      }}
      className="socialBox"
    >
      <motion.div
        variants={containerVariant()}
        initial="offscreen"
        whileInView={"onscreen"}
        viewport={{
          once: true,
        }}
        className="iconContainer"
      >
        <motion.div variants={containerVariant(0.1)}>
          <a
            href="https://www.linkedin.com/company/ticwayvitoria/about/"
            style={{ textDecoration: "none", color: iconColor }}
          >
            <FaLinkedin size={30} color={iconColor} />
          </a>
        </motion.div>
        <motion.div variants={containerVariant(0.2)}>
          <a href="tel:945128060" style={{ textDecoration: "none", color: iconColor }}>
            <FaPhoneAlt size={30} color={iconColor} />
          </a>
        </motion.div>

      </motion.div>

      <Link
        to="outsourcing-wrapper"
        spy={true}
        smooth={true}
        className="contacto-button"
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
      >
        <span style={{ marginRight: "10px" }}>Descubre</span>
        <strong style={{ fontWeight: "bold" }}>TICWAY</strong>
      </Link>
    </motion.div>
  );
};

export default Social;