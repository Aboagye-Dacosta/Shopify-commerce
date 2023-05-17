import { BsArrowRight } from "react-icons/all";
import Clickable from "./Clickable";

type HeroProps = {
  onClick: () => void;
  ImgOne?: string;
  ImgTwo?: string;
  description?: string;
  title: string;
  heading: string;
  btnText: string;
};

function Hero({
  ImgOne,
  ImgTwo,
  title,
  heading,
  btnText,
  onClick,
}: HeroProps) {
  return (
    <main className="w-full flex flex-col bg-[#333] py-10 px-10">
      <section className="flex flex-col lg:flex-row items-center justify-center">
        <div className="flex-1 text-white py-5 text-left">
          <h3 className="text-[1.3rem] font-bold text-slate-500 font-noto capitalize">
            {heading}
          </h3>
          <h1 className="text-[1.5rem]  md:text-[3rem] font-bold font-noto">
            {title}
          </h1>
        </div>
        <div className="flex-1 my-5 lg:my-0">
          <div className="relative w-full">
            <span
              className="absolute z-10 w-full  h-full inline-block bg-blue-400 left-0 top-0"
              style={{ borderRadius: "30% 70% 70% 30% / 46% 30% 70% 54% " }}
            ></span>
            <div className="flex">
              <img
                src={ImgOne}
                alt=""
                className="-rotate-45 transition-transform duration-500 z-20 w-[20rem] md:w-[30rem]"
              />
              <img
                src={ImgTwo}
                alt=""
                className="absolute w-[20rem] md:w-[30rem] z-30"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row  justify-between items-center">
        <Clickable onClick={onClick} styles="bg-blue-500 w-full md:w-[30rem]  ">
          <span className="mr-4 text-white font-noto md:text-[1.5rem] whitespace-nowrap">
            {btnText}
          </span>
          <BsArrowRight />
        </Clickable>
        <div className="relative flex-1">
          {/* <p className="bg-white my-2 py-2 lg:absolute lg:right-0 lg:w-3/4 lg:shadow shadow-neutral-900 -top-5 h-max font-mono">
            {description}
          </p> */}
        </div>
      </section>
    </main>
  );
}

export default Hero;
