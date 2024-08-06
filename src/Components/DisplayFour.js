import { DisplayProductFour } from '../Assets';

const DisplayFour = () => {
  return (
    <div className="mt-10 lg:mt-[100px] grid grid-cols-1 lg:grid-cols-3 px-[50px] lg:px-0">
      <div className="col-span-2 m-auto">
        <p className="font-playfair-display text-[28px] lg:text-[36px] font-bold">
          Luxury Defined By Style, Not Price.
        </p>
        <div className="flex justify-center">
          <img
            alt="display-four"
            src={DisplayProductFour}
            width={335}
            className="lg:hidden mt-3"
          />
        </div>
        <div className="lg:w-[550px] font-cabin text-[16px]">
          <p className="mt-8">
            Moissanites are lab-grown gemstones, crafted by the most skilled
            hands to create a sparkle that is a class of its own.
          </p>
          <p className="mt-6">
            Every piece of moissanite comes with a certification as a testament
            to its quality. This gemstone is also durable, second only to
            diamonds in terms of hardness. Hence, your fine jewellery pieces
            from Le Diamonds cannot be easily scratched and keep their fire
            well. Due to its hardness, we are also able to create dazzling cuts
            that will shine brightly on you.
          </p>
          <p className="mt-6">
            Our attention to quality and detail ensures that all our moissanite
            jewellery is a work of art that you can be proud to wear.
          </p>
        </div>
      </div>
      <img
        alt="display-four"
        src={DisplayProductFour}
        width={400}
        className="hidden lg:inline"
      />
    </div>
  );
};

export default DisplayFour;
