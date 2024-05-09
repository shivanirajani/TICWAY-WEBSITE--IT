import Image from "next/image";
import Marquee from "react-marquee-slider";
import "./Services.css";

const Services = () => {
  return (
    <div className="services-wrapper">
      <Marquee>
        <Image src="/image1.svg" alt="Image 1" width={300} height={100} className="logos-image" /> 
        <Image src="/power-bi.png" alt="Image 2" width={300} height={100} className="logos-image" />
        <Image src="/dynamics.png" alt="Image 3" width={300} height={100} className="logos-image" />
        <Image src="/nextcloud.png" alt="Image 4" width={300} height={100} className="logos-image" />
        <Image src="/watchguard.png" alt="Image 5" width={300} height={100} className="logos-images" />
        <Image src="/canon.svg" alt="Image 6" width={300} height={100} className="logos-images" />
        <Image src="/office.png" alt="Image 6" width={300} height={100} className="logos-images" />
        {/* Add more images as needed */}

      </Marquee>
    </div>
  );
};

export default Services;
