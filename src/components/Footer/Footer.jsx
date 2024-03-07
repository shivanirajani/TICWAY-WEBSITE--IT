import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

// Componente para el pie de página
const Footer = () => {
  // Estado para controlar la visibilidad del pie de página
  const [showFooter, setShowFooter] = useState(false);

  // Efecto secundario para manejar el evento de desplazamiento
  useEffect(() => {
    const handleScroll = () => {
      // Verifica si se ha llegado al final de la página
      const isScrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;

      // Actualiza el estado de visibilidad del pie de página
      setShowFooter(isScrolledToBottom);
    };

    // Agrega el evento de desplazamiento
    window.addEventListener('scroll', handleScroll);

    // Limpia el evento al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Obtiene el año actual
  const currentYear = new Date().getFullYear();

  // Renderiza el componente del pie de página si es visible
  return (
    <>
      {showFooter && (
        <footer className="footer">
          <div className="copyright">
            <p>&copy; {currentYear} Ticway. Todos los derechos reservados.</p>
          </div>
          <div className="social-icons">
            {/* Enlace a LinkedIn */}
            <a href="https://www.linkedin.com/company/ticwayvitoria/about/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} />
            </a>
            {/* Enlace a número de teléfono */}
            <a href="tel:945128060" target="_blank" rel="noopener noreferrer">
              <FaPhoneAlt size={24} />
            </a>
            {/* Enlace de Correo Electrónico */}
            <a href="mailto:info@ticway.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope size={24} />
            </a>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
