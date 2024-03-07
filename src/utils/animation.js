/* Container Variant Animation */
export const containerVariant= (delay= 0)=> ({
    "offscreen": {
        opacity:0,
        y:30
    },
    "onscreen": {
        opacity:1,
        y:0,
        transition:{
            type: "string",
            duration: 2,
            delay
        }
    }
})


/* Tag Variant Animation */
export const tagVariants={
    "offscreen":{
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

/* Title Variant Animation */
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

/* Description Variant Animation */
export const desVariants = {
    "offscreen": {
        opacity:0,
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




