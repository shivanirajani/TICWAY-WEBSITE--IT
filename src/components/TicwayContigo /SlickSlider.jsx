import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "./TicwayContigo.css";
import { motion } from "framer-motion";
import { tagVariants, titleVariants } from "@/src/utils/animation";
import { ticway } from "@/src/utils/data";

const SlickSlider = ({ features }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    touchMove: true,
    useCSS: true,
    autoplay: true,
    autoplaySpeed: 3500,
    customPaging: () => (
      <div className="custom-dots" />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {ticway.map((feature, i) => (
          <div key={i} className="ticway-feature">
            <div className="ticway-content">
              <Image src={feature.icon} alt="feature" width={128} height={128} />
              <motion.span
                className="sec-title"
                variants={tagVariants}
                initial="offscreen"
                whileInView={"onscreen"}
              >
                {feature.title}
              </motion.span>
              <motion.span
                className="text"
                variants={tagVariants}
                initial="offscreen"
                whileInView={"onscreen"}
              >
                {feature.des}
              </motion.span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlickSlider;

