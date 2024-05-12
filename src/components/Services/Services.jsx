{/**
 * Componente que muestra una lista de imágenes en un carrusel horizontal.
 * Utiliza Next.js para renderizar las imágenes y React Marquee Slider para el carrusel.
*/}

// Importaciones de módulos y componentes necesarios
import Image from "next/image";
import Marquee from "react-marquee-slider";
import "./Services.css";


const Services = () => {
  return (
    <div className="services-wrapper">
      {/* Carrusel de imágenes */}
      <Marquee>
        {/* Imágenes */}
        <Image src="/services/fortinet.svg" alt="Imagen 1" width={300} height={100} className="logos-image" /> 
        <Image src="/services/power-bi.png" alt="Imagen 2" width={300} height={100} className="logos-image" />
        <Image src="/services/dynamics.png" alt="Imagen 3" width={300} height={100} className="logos-image" />
        <Image src="/services/nextcloud.png" alt="Imagen 4" width={300} height={100} className="logos-image" />
        <Image src="/services/watchguard.png" alt="Imagen 5" width={300} height={100} className="logos-images" />
        <Image src="/services/canon.svg" alt="Imagen 6" width={300} height={100} className="logos-images" />
        <Image src="/services/office.png" alt="Imagen 7" width={300} height={100} className="logos-images" />
        <Image src="/services/jetreports.png" alt="Imagen 7" width={300} height={100} className="logos-images" />
        {/* Agregar más imágenes según sea necesario */}
      </Marquee>
    </div>
  );
};

export default Services;
