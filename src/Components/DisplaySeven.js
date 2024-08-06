import { FaInstagram } from 'react-icons/fa';
import CarouselView from './Carousel';

const DisplaySeven = () => {
  return (
    <div>
      <p className="font-playfair-display text-[36px] text-center font-medium">
        Get Inspired
      </p>
      <div className="flex justify-center my-5">
        <p className="font-cabin text-[16px]">Follow us at</p>
        <FaInstagram className="my-auto text-[#9B622F] mx-2" />
        <p className="font-cabin text-[16px] text-[#9B622F]">le_diamonds</p>
      </div>
      <div>
        <CarouselView />
      </div>
    </div>
  );
};

export default DisplaySeven;
