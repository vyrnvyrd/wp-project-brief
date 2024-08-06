import { AiFillInstagram } from 'react-icons/ai';
import { IoLogoFacebook } from 'react-icons/io';

const Bottom = () => {
  return (
    <div className="bg-[#222224] text-white px-8 py-6 lg:px-[80px] lg:py-[60px]">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 font-cabin">
        <div className="col-span-2 md:col-span-3 lg:col-span-2 mb-8 lg:mb-0">
          <p className="font-bodoni text-[20px] lg:text-[28px]">LE DIAMONDS</p>
          <p className="text-[14px] lg:w-[70%] mt-7 leading-[22px]">
            With Le Diamonds, we hope to empower and inspire women of all ages,
            giving them the courage and confidence to power through each day
            with their choice of elegant and charming contemporary jewellery.
          </p>
          <div className="bg-bottom-one h-[32px] md:w-[30%] mt-5"></div>
        </div>
        <div className="text-[14px]">
          <p className="font-bold">COLLECTIONS</p>
          <p className="mt-4 cursor-pointer">Rings</p>
          <p className="mt-4 cursor-pointer">Earrings</p>
          <p className="mt-4 cursor-pointer">Necklaces</p>
          <p className="mt-4 cursor-pointer">Bracelets</p>
          <p className="mt-4 cursor-pointer">Pendants</p>
        </div>
        <div className="text-[14px]">
          <p className="font-bold">INFORMATION</p>
          <p className="mt-4 cursor-pointer">FAQ</p>
          <p className="mt-4 cursor-pointer">Help & Support</p>
          <p className="mt-4 cursor-pointer">Terms of Service</p>
          <p className="mt-4 cursor-pointer">Privacy Policy</p>
        </div>
        <div className="hidden lg:inline text-[14px]">
          <p className="font-bold">KNOW MORE</p>
          <p className="mt-4 cursor-pointer">All about clarities</p>
          <p className="mt-4 cursor-pointer">Partnerships</p>
        </div>
        <div className="text-[14px] mt-5 lg:mt-0 col-span-2 md:col-span-1 flex justify-end md:inline">
          <div>
            <p className="font-bold">CONTACT INFO</p>
            <p className="mt-4 cursor-pointer">(+603) 95441361</p>
            <p className="mt-4 cursor-pointer">info@lediamonds.com</p>
            <div className="hidden lg:flex mt-4">
              <IoLogoFacebook className="text-[18px] ml-5 mr-1 cursor-pointer" />
              <AiFillInstagram className="text-[18px] ml-1 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center lg:justify-end text-[14px] font-cabin mt-5 lg:mt-0">
        <p>©2022 Le Diamonds - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Bottom;
