import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import {
  DisplaySevenProductOne,
  DisplaySevenProductTwo,
  DisplaySevenProductThree,
  DisplaySevenProductFour,
  DisplaySevenProductFive,
} from '../Assets';

export default function CarouselView() {
  const [products, setProducts] = useState([]);
  const responsiveOptions = [
    {
      breakpoint: '1400px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '1199px',
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: '767px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '575px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const productTemplate = (product) => {
    return (
      <div className="mx-2 mb-5 flex justify-center">
        <img
          src={product.url}
          alt={product.id}
          className="w-[80%] md:w-[90%] lg:w-full"
        />
      </div>
    );
  };

  const fetchData = () => {
    let list = [];
    for (let i = 0; i < 15; i++) {
      if (i % 5 === 1) {
        list.push({
          id: i,
          url: DisplaySevenProductOne,
        });
      } else if (i % 5 === 2) {
        list.push({
          id: i,
          url: DisplaySevenProductTwo,
        });
      } else if (i % 5 === 3) {
        list.push({
          id: i,
          url: DisplaySevenProductThree,
        });
      } else if (i % 5 === 4) {
        list.push({
          id: i,
          url: DisplaySevenProductFour,
        });
      } else if (i % 5 === 0) {
        list.push({
          id: i,
          url: DisplaySevenProductFive,
        });
      }
    }

    setProducts(list);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="lg:px-5">
      <Carousel
        value={products}
        numScroll={1}
        numVisible={5}
        responsiveOptions={responsiveOptions}
        itemTemplate={productTemplate}
      />
    </div>
  );
}
