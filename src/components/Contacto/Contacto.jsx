import React, { useRef, useState } from "react";
import "./Contacto.css";
import { motion, useInView } from "framer-motion";
import { tagVariants } from "@/src/utils/animation";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Variants para las animaciones de entrada
const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

// Variants para los elementos hijos de la animación
const itemVariants = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

// Componente para mostrar el mapa
const Map = () => {
  const mapRef = useRef();
  const isInView = useInView(mapRef, { margin: "-100px" });

  return (
    <motion.div
      className="map-container"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2925.3975344678215!2d-2.682759724201596!3d42.843338504433234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4fc21294130993%3A0xd7fc38ec295efb2d!2sTicway!5e0!3m2!1sen!2ses!4v1705627115819!5m2!1sen!2ses"
        style={{ border: 0, width: "100%", height: "600px", maxWidth: "600px" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </motion.div>
  );
};

// Componente principal de la sección de contacto
const Contacto = () => {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const isInView = useInView(ref, { margin: "-50px" });

  // Función para enviar el formulario por correo electrónico
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_qqdmnkh', 'template_51mkiil', formRef.current, 'MvnhYMURvIpaeH_0a')
      .then(
        (result) => {
          toast.success("Su formulario se ha enviado correctamente. Nos comunicaremos pronto para atender sus consultas. ¡Gracias!");
          setError(false); // Reinicia el estado de error
          formRef.current.reset(); // Reinicia el formulario
        },
        (error) => {
          toast.error("Lo sentimos, pero ha habido un problema al procesar su formulario. Por favor, inténtelo de nuevo");
          setError(true);
          setSuccess(false); // Reinicia el estado de éxito
        }
      );
  }

  // Renderiza la sección de contacto
  return (
    <div className="contacto-wrapper">
      <motion.div
        ref={ref}
        className="contacto"
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <div className="textContainer" variants={variants}>
          <div className="item" variants={itemVariants}>
            <motion.h1 ref={ref}>Contacto</motion.h1>
            <Map />
          </div>
          <div className="item" variants={itemVariants}>
          </div>
        </div>
        <div className="formContainer">
          <motion.div
            className="phoneSvg"
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 0 }}
            transition={{ delay: 3, duration: 1 }}
          >
            <motion.svg viewBox="0 0 32.666 32.666">
              <motion.path
                strokeWidth={0.3}
                fill="none"
                initial={{ pathLength: 0 }}
                animate={isInView && { pathLength: 1 }}
                transition={{ duration: 2 }}
                d="M28.189,16.504h-1.666c0-5.437-4.422-9.858-9.856-9.858l-0.001-1.664C23.021,4.979,28.189,10.149,28.189,16.504z
                  M16.666,7.856L16.665,9.52c3.853,0,6.983,3.133,6.981,6.983l1.666-0.001C25.312,11.735,21.436,7.856,16.666,7.856z M16.333,0
                C7.326,0,0,7.326,0,16.334c0,9.006,7.326,16.332,16.333,16.332c0.557,0,1.007-0.45,1.007-1.006c0-0.559-0.45-1.01-1.007-1.01
                c-7.896,0-14.318-6.424-14.318-14.316c0-7.896,6.422-14.319,14.318-14.319c7.896,0,14.317,6.424,14.317,14.319
                c0,3.299-1.756,6.568-4.269,7.954c-0.913,0.502-1.903,0.751-2.959,0.761c0.634-0.377,1.183-0.887,1.591-1.529
                c0.08-0.121,0.186-0.228,0.238-0.359c0.328-0.789,0.357-1.684,0.555-2.518c0.243-1.064-4.658-3.143-5.084-1.814
                c-0.154,0.492-0.39,2.048-0.699,2.458c-0.275,0.366-0.953,0.192-1.377-0.168c-1.117-0.952-2.364-2.351-3.458-3.457l0.002-0.001
                c-0.028-0.029-0.062-0.061-0.092-0.092c-0.031-0.029-0.062-0.062-0.093-0.092v0.002c-1.106-1.096-2.506-2.34-3.457-3.459
                c-0.36-0.424-0.534-1.102-0.168-1.377c0.41-0.311,1.966-0.543,2.458-0.699c1.326-0.424-0.75-5.328-1.816-5.084
                c-0.832,0.195-1.727,0.227-2.516,0.553c-0.134,0.057-0.238,0.16-0.359,0.24c-2.799,1.774-3.16,6.082-0.428,9.292
                c1.041,1.228,2.127,2.416,3.245,3.576l-0.006,0.004c0.031,0.031,0.063,0.06,0.095,0.09c0.03,0.031,0.059,0.062,0.088,0.095
                l0.006-0.006c1.16,1.118,2.535,2.765,4.769,4.255c4.703,3.141,8.312,2.264,10.438,1.098c3.67-2.021,5.312-6.338,5.312-9.719
                C32.666,7.326,25.339,0,16.333,0z"
              />
            </motion.svg>
          </motion.div>
          <motion.form
          
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 4, duration: 1 }}
          >
             <motion.span
              variants={tagVariants}
              initial="offscreen"
              whileInView={"onscreen"}
              className="tag"
              style={{ color: 'orange' }}
            >
              Contamos con expertos para tu servicio
            </motion.span>
            <input type="text" required placeholder="Nombre" name="nombre" />
            <input type="text" required placeholder="Apellidos" name="apellidos" />
            <input
              type="email"
              required
              placeholder="Correo Electrónico"
              name="email"
            />
            <input type="text" required placeholder="Asunto" name="asunto" />
            <textarea rows={8} required placeholder="Mensaje" name="mensaje" />
            <button>Enviar</button>
          </motion.form>
        </div>
      </motion.div>
      <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
};

export default Contacto;