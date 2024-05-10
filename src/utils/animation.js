
{/**

Este código proporciona variantes de animación para diferentes elementos, como contenedores, etiquetas, títulos y descripciones. 
Estas variantes se utilizan en varios componentes, como Outsourcing, Servicios, etc. 
Al definir estas variantes una vez, podemos reutilizarlas fácilmente en múltiples componentes sin tener que declararlas nuevamente cada vez.

*/}

// Variante de animación para el contenedor principal
export const containerVariant = (delay = 0) => ({
    "offscreen": {
        opacity: 0,
        y: 30
    },
    "onscreen": {
        opacity: 1,
        y: 0,
        transition: {
            type: "string",
            duration: 2,
            delay
        }
    }
})

// Variante de animación para las etiquetas
export const tagVariants = {
    "offscreen": {
        opacity: 0,
        y: 10
    },
    "onscreen": {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            duration: 2,
        }
    }
}

// Variante de animación para los títulos
export const titleVariants = {
    "offscreen": {
        opacity: 0,
        y: 30
    },
    "onscreen": {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            duration: 2.2,
        }
    }
}

// Variante de animación para las descripciones
export const desVariants = {
    "offscreen": {
        opacity: 0,
        y: 20
    },
    "onscreen": {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            duration: 2.6,
            delay: .2
        }
    }
}
