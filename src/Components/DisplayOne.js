import { Button, ConfigProvider } from 'antd';

const DisplayOne = () => {
  return (
    <div className="container-display-one mt-[60px] lg:mt-[100px] pl-5 lg:pl-[50px] xl:pl-[100px] md:flex md:items-center">
      <div className="padding-display-one">
        <div className="flex">
          <hr className="w-[25.02px] my-auto mr-3 border-b-[1px] border-black" />
          <p className="font-cabin font-bold text-[8px] lg:text-[12px]">
            MORE THAN JUST JEWELLERY
          </p>
        </div>
        <p className="font-playfair-display w-[140px] lg:w-full text-[28px] lg:text-[55px] xl:text-[64px] mt-3 lg:mt-[20px] font-bold">
          Elegance & Eternity.
        </p>
        <p className="text-[#868686] text-[8px] lg:text-[12px] mt-3 lg:mt-5">
          FINELY CRAFTED LAB-GROWN MOISSANITE JEWELLERY
        </p>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#9B622F',
            },
          }}
        >
          <div className="text-center md:text-left">
            <Button
              type="primary"
              className="mt-5 lg:mt-5 rounded-none text-white font-poppins text-[12px] p-[20px]"
            >
              SHOP COLLECTIONS
            </Button>
          </div>
        </ConfigProvider>
      </div>
    </div>
  );
};

export default DisplayOne;
