import {
  DisplayThreeProductFive,
  DisplayThreeProductFour,
  DisplayThreeProductOne,
  DisplayThreeProductSix,
  DisplayThreeProductThree,
  DisplayThreeProductTwo,
} from '../Assets';

const DisplayThree = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4">
      <div className="bg-display-three-one col-span-2 flex justify-center lg:justify-start items-center">
        <img
          alt="anting-1"
          src={DisplayThreeProductOne}
          className="w-[190px] lg:w-[350px] h-[190px] lg:h-[350px] xl:ml-10"
        />
        <div>
          <p className="font-cabin font-bold text-[10px] lg:text-[14px]">
            NEW JEWELLERY DESIGN
          </p>
          <p className="font-cabin text-[10px] lg:text-[14px] underline underline-offset-1 cursor-pointer hover:text-slate-400">
            SHOP NOW
          </p>
        </div>
      </div>
      <div className="bg-display-three-two">
        <div className="flex justify-center">
          <img
            alt="anting-2"
            src={DisplayThreeProductTwo}
            className="w-[190px] lg:w-[330px] h-[190px] lg:h-[330px]"
          />
        </div>
        <div className="pl-5">
          <p className="font-cabin font-bold text-[10px] lg:text-[14px]">
            EARRINGS COLLECTION
          </p>
          <p className="font-cabin text-[10px] lg:text-[14px] underline underline-offset-1 cursor-pointer hover:text-slate-400">
            SHOP NOW
          </p>
        </div>
      </div>
      <div className="bg-display-three-three">
        <div className="flex justify-center">
          <img
            alt="kalung-1"
            src={DisplayThreeProductThree}
            className="w-[190px] lg:w-[330px] h-[190px] lg:h-[330px]"
          />
        </div>
        <div className="pl-5">
          <p className="font-cabin font-bold text-[10px] lg:text-[14px]">
            BRACELETS COLLECTION
          </p>
          <p className="font-cabin text-[10px] lg:text-[14px] underline underline-offset-1 cursor-pointer hover:text-slate-400">
            SHOP NOW
          </p>
        </div>
      </div>
      <div className="hidden lg:inline bg-display-three-three">
        <div className="flex justify-center">
          <img
            alt="kalung-2"
            src={DisplayThreeProductFour}
            className="w-[190px] lg:w-[330px] h-[190px] lg:h-[330px]"
          />
        </div>
        <div className="pl-5">
          <p className="font-cabin font-bold text-[10px] lg:text-[14px]">
            NECKLACES COLLECTION
          </p>
          <p className="font-cabin text-[10px] lg:text-[14px] underline underline-offset-1 cursor-pointer hover:text-slate-400">
            SHOP NOW
          </p>
        </div>
      </div>
      <div className="bg-display-three-three col-span-2 flex justify-center lg:justify-start items-center">
        <img
          alt="cincin-1"
          src={DisplayThreeProductFive}
          className="w-[190px] lg:w-[350px] h-[190px] lg:h-[350px] xl:ml-10"
        />
        <div>
          <p className="font-cabin font-bold text-[10px] lg:text-[14px]">
            RINGS COLLECTION
          </p>
          <p className="font-cabin text-[10px] lg:text-[14px] underline underline-offset-1 cursor-pointer hover:text-slate-400">
            SHOP NOW
          </p>
        </div>
      </div>
      <div className="lg:hidden bg-display-three-three">
        <div className="flex justify-center">
          <img
            alt="kalung-2"
            src={DisplayThreeProductFour}
            className="w-[190px] lg:w-[330px] h-[190px] lg:h-[330px]"
          />
        </div>
        <div className="pl-5">
          <p className="font-cabin font-bold text-[10px] lg:text-[14px]">
            NECKLACES COLLECTION
          </p>
          <p className="font-cabin text-[10px] lg:text-[14px] underline underline-offset-1 cursor-pointer hover:text-slate-400">
            SHOP NOW
          </p>
        </div>
      </div>
      <div className="bg-display-three-one">
        <div className="flex justify-center">
          <img
            alt="liontin-1"
            src={DisplayThreeProductSix}
            className="w-[190px] lg:w-[330px] h-[190px] lg:h-[330px]"
          />
        </div>
        <div className="pl-5">
          <p className="font-cabin font-bold text-[10px] lg:text-[14px]">
            PENDANTS COLLECTION
          </p>
          <p className="font-cabin text-[10px] lg:text-[14px] underline underline-offset-1 cursor-pointer hover:text-slate-400">
            SHOP NOW
          </p>
        </div>
      </div>
    </div>
  );
};

export default DisplayThree;
