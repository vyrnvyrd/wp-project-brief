import { ConfigProvider, Button } from 'antd';

const DisplayEight = () => {
  return (
    <div className="flex flex-wrap justify-center items-center h-[110px] lg:h-[100px] bg-[#9B622F] text-white">
      <div className="flex items-center mt-3 md:mt-0">
        <p className="text-[20px] lg:text-[28px] font-cabin pr-2 md:pr-[40px] lg:pr-[60px] border-r-2">
          FREE DELIVERY
        </p>
        <p className="px-2 md:px-[40px] lg:px-[60px] text-[14px] font-cabin">
          For orders over $199
        </p>
      </div>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: 'white',
          },
        }}
      >
        <Button
          type="primary"
          className="rounded-none text-[#9B622F] font-poppins text-[12px] py-[10px] px-[25px] mb-3 md:mb-0"
        >
          SHOP COLLECTIONS
        </Button>
      </ConfigProvider>
    </div>
  );
};

export default DisplayEight;
