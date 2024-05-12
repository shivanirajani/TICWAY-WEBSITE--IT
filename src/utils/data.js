{/**
El código proporciona datos estructurados para diversas secciones de la página web. 

Separar los datos en un archivo aparte facilita la organización, legibilidad y reutilización del código, además de simplificar la escalabilidad del proyecto. 
Esta práctica mejora de manera notable la estructura y el mantenimiento de los proyectos de software.
*/}

// Datos para la sección de héroe que contiene imágenes y colores de fondo

export const HeroData = [
  {
    src: "hero/person1.jpg",
    bg: "#808080",
    delay: 0.1,
  },
  {
    src: "hero/person2.jpg",
    bg: "#f1f1f1",
    delay: 0.3,
  },
  {
    src: "hero/person3.jpg",
    bg: "#fde490",
    delay: 0.2,
  },
  {
    src: "hero/person4.jpg",
    bg: "#83cfdf",
    delay: 0.2,
  },
  {
    src: "hero/person5.jpg",
    bg: "#293f26",
    delay: 0.3,
  },
  {
    src: "hero/person6.png",
    bg: "#2f3841",
    delay: 0.25,
  },
];


// Datos para la sección de características que contiene iconos y títulos
export const features = [
  {
    icon: "/features/tecnologias.png",
    title: "Abordar necesidades tecnológicas"

    
  },
  {
    icon: "/features/productividad.png",
    title: "Potenciar productividad empresarial",
   
  },
  {
    icon: "/features/competitividad.png",
    title: "Mejorar competitividad empresarial",

  },
  {
    icon: "/features/coste.png",
    title: "Costes Flexibles",
  },
  {
    icon: "/features/control.png",
    title: "Control y Seguimiento TIC",
  },
  {
    icon: "/features/innovación.png",
    title: "Innovación TIC",
  },

  {
    icon: "/features/soluciones.png",
    title: "Soluciones Personalizadas"

   
  },
  {
    icon: "/features/equipo.png",
    title: "Equipo TIC Multiespecializado"
    
  },
  {
    icon: "/features/asesoria.png",
    title: "Asesoría TIC"
    
  },





];


// Datos para la sección Ticway Contigo que contiene iconos, títulos y descripciones
export const ticway = [
  {
    icon: "/TicwayContigo/especialización.png",
    title: "Especialización",
    des: "Contamos con expertos en varias áreas para asesorarte. Nos encargamos de todo, permitiéndote enfocarte en tu negocio y ser competitivo.",
  },
  {
    icon: "/TicwayContigo/costesreducidos.png",
    title: "Costes Reducidos",
    des: "Nuestras capacidades se adaptan a tus necesidades con costos proporcionales. Obtén los servicios necesarios en el momento adecuado.",
  },
  {
    icon: "/TicwayContigo/riesgocero.png",
    title: "Riesgo Cero",
    des: "Ticway garantiza calidad en el servicio. Las alianzas duran cuando ambas partes están satisfechas. ¡Pruébanos y fortalece tu camino hacia el éxito!",
  },

   {
      icon: "/TicwayContigo/servicioflexible.png",
      title: "Servicio Flexible",
      des: "Podemos ser tu departamento externo especializado en Tecnología. Con infraestructura sólida y trabajadores cualificados para tus necesidades exactas.",
    },
    {
      icon: "/TicwayContigo/teletrabajo.png",
      title: "Teletrabajo",
      des: "No solo resolvemos incidencias; comprendemos tus necesidades para mejorar procesos, minimizar problemas y optimizar gastos para aportar valor real.",
    },
    {
      icon: "/TicwayContigo/transparencia.png",
      title: "Transparencia",
      des: "Ticway no es intermediario. Nos comprometemos a imparcialidad para las mejores condiciones, sin intereses, buscando beneficios claros para tu empresa.",
    },
      

];


// Datos para la sección Soluciones Outsourcing  que contiene iconos, títulos, descripciones y beneficios
export const soluciones = [
  {
    icon: "/soluciones1.jpg",
    title: "Asesoría",
    des: "Asesores ayudan con desafíos comerciales y brindan asistencia en problemas.",
    benefits: [
      "Ofrecen consejos sobre dónde encontrar recursos para mejora continua.",
      "Relación estable y duradera.",
      "Estratégico, alineado con procesos y objetivos de la compañía.",
      "Auditoría inicial.",
      "Elaboración de estrategia de actuación.",
      "Participación activa en decisiones TIC del cliente.",
      "Proposición continua de mejoras o soluciones.",
      "Gestión de proveedores (búsqueda, negociación, seguimiento, reporte, etc).",
    
    ],

    imageSrc: "/asesoria.jpg"

    
  },

  {
    image: "/howItWorks/Frame-1.png",
    title: "Desarrollo & Consultoría",
    des: "Facilitación de soluciones antes de necesidades o demandas concretas.",
    benefits: [
        "Duración comúnmente finita, enfocada a uno o más proyectos.",
        "Enfoque hacia la entrega final de un producto/solución.",
        "La entrega final suele derivar de un proyecto o desarrollo.",
        "Servicios contemplados incluyen análisis, planificación, desarrollo, ejecución, seguimiento, control y cierre de proyectos.",
        "Interconexión entre sistemas.",
        "Migración de sistemas.",
        "Desarrollo de informes automatizados."
    ],
   imageSrc: "/development.jpg" 
},

{
  icon: "/howItWorks/Frame-2.png",
  title: "Soporte & Monitorización",
  des: "Tareas de acción, de ejecución, de buscar una solución inmediata a los problemas, con menor aporte de valor que la consultoría o la asesoría.",
  benefits: [
      "Duración variable, puede haber servicios puntuales, periódicos, continuos o bajo demanda.",
      "Enfoque ligado a que éstos se presten de la forma más rápida y óptima posible.",
      "Servicios contemplados incluyen monitorización de servicios del cliente, soporte correctivo y preventivo de desarrollos y aplicaciones, y coordinación de soportes contratados por el cliente."
  ],
  imageSrc: "/working.jpg" 
},

{
  title: "Integral: Todo en un mismo plan",
  des: "Combinación de todas las opciones de servicio para maximizar la capacidad de actuación y responder eficientemente a las necesidades.",
  benefits: [
    "Relación estable y duradera.",
    "Acompañamiento y evolución continua.",
    "Servicios incluyen auditoría inicial, elaboración de estrategia, participación activa en decisiones TIC, proposición activa de mejoras, gestión de proveedores, gestión de proyectos, interconexión de sistemas, desarrollo de informes automatizados, monitorización de servicios, soporte correctivo y preventivo."
  ],

  imageSrc: "/team.jpg" 
}




];


