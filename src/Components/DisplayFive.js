import { Button, ConfigProvider } from 'antd';
import { useEffect, useState } from 'react';
import { DisplayThreeProductFive, DisplayThreeProductTwo } from '../Assets';

const DisplayFive = () => {
  const displayNumber = 8;
  const [data, setData] = useState([]);

  const cardOne = (i) => {
    return (
      <div className="pic-display-five lg:w-[150px] xl:w-[200px] xl:h-[250px] bg-[#F2F2F2]">
        <img alt={`cincin-${i}`} src={DisplayThreeProductFive} />
        <p className="text-[12px] font-cabin text-center">STÉPHANE</p>
        <p className="text-[12px] font-cabin text-center text-[#868686]">
          $866.00 - $994.00
        </p>
      </div>
    );
  };

  const cardTwo = (i) => {
    return (
      <div className="pic-display-five lg:w-[150px] xl:w-[200px] xl:h-[250px] bg-[#F2F2F2]">
        <img alt={`anting-${i}`} src={DisplayThreeProductTwo} />
        <p className="text-[12px] font-cabin text-center">ANDRÉE</p>
        <p className="text-[12px] font-cabin text-center text-[#868686]">
          $943.00 - $1,186.00
        </p>
      </div>
    );
  };

  const fetchData = () => {
    let list = [];
    for (let i = 0; i < displayNumber; i++) {
      if (i < displayNumber / 2) {
        if (i % 2 === 0) {
          list.push(cardOne(i));
        } else {
          list.push(cardTwo(i));
        }
      } else {
        if (i % 2 === 1) {
          list.push(cardOne(i));
        } else {
          list.push(cardTwo(i));
        }
      }
    }
    setData(list);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="mt-10 lg:mt-[100px] lg:flex xl:justify-center">
      <div className="bg-display-five w-full h-[471px] lg:w-[400px] xl:w-[412px] xl:h-[518px] mr-4">
        <div className="pl-10 pt-[70px] lg:pt-0">
          <p className="font-playfair-display w-[70%] lg:w-full font-bold text-[28px] lg:text-[36px] lg:mt-[90px] leading-[42px]">
            Our Best Selling Products
          </p>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: '#9B622F',
              },
            }}
          >
            <Button
              type="primary"
              className="md:mt-5 rounded-none text-white font-poppins text-[12px] py-[10px] px-[25px]"
            >
              SHOP COLLECTIONS
            </Button>
          </ConfigProvider>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 justify-items-center lg:gap-4 md:grid-cols-4 mt-3 lg:mt-0">
        {data.map((el) => el)}
      </div>
    </div>
  );
};

export default DisplayFive;
