import Image from "next/image";
import Marquee from "react-marquee-slider";
import "./Services.css";

const Services = () => {
  return (
    <div className="services-wrapper">
      <Marquee>
        <Image src="/image1.svg" alt="Image 1" width={300} height={150} className="logos-image" />
        <Image src="/image2.svg" alt="Image 2" width={300} height={150} className="logos-image" />
        <Image src="/images.png" alt="Image 3" width={400} height={150} className="logos-image" />
        <Image src="/image4.svg" alt="Image 4" width={300} height={150} className="logos-image" />
        <Image src="/image5.png" alt="Image 5" width={300} height={150} className="logos-images" />
        <Image src="/image6.svg" alt="Image 6" width={300} height={150} className="logos-images" />
        {/* Add more images as needed */}
        <div className="spacer" />
      </Marquee>
    </div>
  );
};

export default Services;
