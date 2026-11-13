import iyiade from "../assets/iyiade.PNG";
import jerry from "../assets/jerry.jpeg";
import osuini from "../assets/osuini.jpeg";
import shalom from "../assets/shalom.jpeg";
import mushidat from "../assets/mushidat.jpeg";

const Pictures = () => {
  return (
    <section className=" bg-sectionGreen border-t border-b border-t-[#f3efe6]/30 border-b-[#f3efe6]/30 text-[#f3efe6] font-sans pt-32 md:pt-40 pb-20 px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-14 md:gap-16">
        <div className="flex gap-2 items-center text-[#fff]">
          <span className="text-buttonGreen">05</span>
          <p className="text-lg md:text-xl tracking-normal leading-relaxed capitalize">
            beyond the code
          </p>
        </div>
        <p className="text-[#fff] text-5xl md:text-6xl lg:text-7xl font-serif font-bold">
          the people and places i carry with me.
        </p>
        {/* image section */}
        <div className="flex flex-col gap-4 md:gap-6 w-full">
          <div className="justify-between flex flex-col  md:flex-row items-center">
            <p className="text-[#fff] text-lg md:text-xl">
              A little more life, a little less screen time.
            </p>
            <p className="text-base md:text-lg text-[#f3efe6]/50">
              moments gathered along the way.
            </p>
          </div>
          <div className="grid gap-2 md:gap-4 grid-cols-1 md:grid-cols-2">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={iyiade}
                alt="Allo Iyiade"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={jerry}
                alt="jerry"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-3">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={osuini}
                alt="osuini"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={mushidat}
                alt="mushidat"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={shalom}
                alt="shalom"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pictures;
