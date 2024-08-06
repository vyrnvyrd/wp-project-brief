import { FaTruck, FaCreditCard } from 'react-icons/fa';
import { FaHandshakeSimple } from 'react-icons/fa6';
import { Handlove } from '../Assets';

const DisplayTwo = () => {
  return (
    <div className="container-display-two flex items-center justify-center">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 xl:gap-[150px]">
        <div className="flex">
          <FaTruck className="text-[25px] mr-3 text-[#9B622F]" />
          <div>
            <p className="font-cabin text-[14px] font-bold">FREE DELIVERY</p>
            <p className="font-cabin text-[14px] text-[#868686]">
              For orders over $199
            </p>
          </div>
        </div>
        <div className="flex">
          <FaHandshakeSimple className="text-[25px] mr-3 text-[#9B622F]" />
          <div>
            <p className="font-cabin text-[14px] font-bold">30 DAYS RETURN</p>
            <p className="font-cabin text-[14px] text-[#868686]">
              No questions asked
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="mr-3">
            <img alt="handlove w-[26px]" src={Handlove} />
          </div>
          <div>
            <p className="font-cabin text-[14px] font-bold">ETHICALLY MADE</p>
            <p className="font-cabin text-[14px] text-[#868686]">
              From sustainable sources
            </p>
          </div>
        </div>
        <div className="flex">
          <FaCreditCard className="text-[25px] mr-3 text-[#9B622F]" />
          <div>
            <p className="font-cabin text-[14px] font-bold">SECURE PAYMENTS</p>
            <p className="font-cabin text-[14px] text-[#868686]">
              For a seamless checkout
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayTwo;
