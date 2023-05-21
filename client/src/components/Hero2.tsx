import Clickable from "./Clickable";
import { HiOutlineArrowNarrowRight } from "react-icons/all";

function Hero2() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-20 px-20 bg-slate-200 gap-5">
      <div className="flex flex-col items-center justify-between">
        <h1 className="font-bold font-noto text-[3rem] text-red-600">
          New Arrivals
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          aliquid quis veritatis, eveniet itaque temporibus dicta nobis repellat
          aperiam velit neque vitae commodi voluptates ipsam. Autem corrupti
          quis expedita est.
        </p>
        <Clickable
          onClick={() => console.log("clicked")}
          styles="flex justify-center items-center bg-red-600 mt-4"
        >
          <span className="text-white mr-3"> Check them out</span>
          <HiOutlineArrowNarrowRight className="text-white" />
        </Clickable>
      </div>
      <div className="flex flex-col items-center justify-center">
        <img
          src="../../images/Kick-3-gray.png"
          alt=""
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default Hero2;
