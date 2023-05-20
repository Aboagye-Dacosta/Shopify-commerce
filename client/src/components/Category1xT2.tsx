import Clickable from "./Clickable";
import { Props } from "./Category2X";

function Category1xT2({
  categoryItem: { title, heading, image, btnText },
  onClick,
}: Props) {
  return (
    <div
      className={`flex-1 h-full shadow hover:shadow-slate-300 transition-shadow duration-200 shadow-slate-100 rounded-2xl px-3 w-full group`}
    >
      <img
        src={image}
        alt=""
        className="hover:-translate-x-10 hover:rotate-45 transition-transform duration-500 object-contain"
      />
      <h3 className="text-[1.5rem] text-slate-300 font-sans font-bold">
        {heading}
      </h3>
      <h1 className="text-[2rem] md:text-[3rem] font-bold font-noto text-slate-600">
        {title}
      </h1>
      <Clickable
        onClick={onClick}
        styles={
          " rounded-2xl font-bold self-start ml-3 mt-2 shadow shadow-slate-200 group-hover:shadow-slate-400 "
        }
      >
        {btnText}
      </Clickable>
    </div>
  );
}

export default Category1xT2;
