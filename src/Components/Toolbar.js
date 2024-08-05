import { FaShoppingCart, FaUser, FaBars } from 'react-icons/fa';

const Toolbar = () => {
  return (
    <div className="shadow-md h-[95px] flex items-center justify-between px-[30px] xl:px-[80px]">
      <div className="flex">
        <p className="font-bodoni text-[20px] xl:text-[28px] mr-[40px] cursor-pointer">
          LE DIAMONDS
        </p>
        <p className="hidden lg:inline font-cabin text-[16px] my-auto mx-[40px] cursor-pointer hover:underline underline-offset-1">
          Collections
        </p>
        <p className="hidden lg:inline font-cabin text-[16px] my-auto mx-[40px] cursor-pointer hover:underline underline-offset-1">
          Our Story
        </p>
        <p className="hidden lg:inline font-cabin text-[16px] my-auto mx-[40px] cursor-pointer hover:underline underline-offset-1">
          Blogs
        </p>
      </div>
      <div className="flex">
        <p className="hidden lg:inline text-[12px] font-cabin my-auto mr-[20px]">
          FREE DELIVERY FOR ORDERS ABOVE $199
        </p>
        <div>
          <FaShoppingCart className="text-[25px] text-[#9B622F] my-auto mx-[10px] lg:mx-[20px] cursor-pointer hover:text-[#9B622F]/50" />
        </div>
        <div>
          <FaUser className="hidden lg:inline text-[25px] text-[#9B622F] my-auto ml-[20px] cursor-pointer hover:text-[#9B622F]/50" />
        </div>
        <div>
          <FaBars className="lg:hidden text-[25px] my-auto ml-[10px] cursor-pointer hover:text-slate-400" />
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
