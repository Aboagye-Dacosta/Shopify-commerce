import Clickable from "./Clickable";
import { Props } from "./Category2X";

function Category1xT1({
  categoryItem: { title, heading, image, btnText },
  onClick,
}: Props) {
  return (
    <div
      className={`flex-1 mr-5 px-3 flex flex-col shadow shadow-slate-200 hover:shadow-slate-300 transition-shadow duration-200 items-center justify-center py-5 h-full rounded-2xl group`}
    >
      <h3 className="text-[1.5rem] text-slate-300 font-sans font-bold">
        {heading}
      </h3>
      <h1 className="text-[2rem] md:text-[3rem] font-bold font-noto text-slate-600">
        {title}
      </h1>
      <div className="flex-1 relative w-full">
        <img
          src={image}
          className="h-full w-full hover:-rotate-45 transition-transform duration-500 object-contain"
          style={{ zIndex: 30 }}
        />
      </div>
      <Clickable
        onClick={onClick}
        styles={
          "text-sm md:text-[1rem] font-bold rounded-2xl self-start  mt-2 w-full shadow shadow-slate-200 group-hover:shadow-slate-400"
        }
      >
        {btnText}
      </Clickable>
    </div>
  );
}

export default Category1xT1;
