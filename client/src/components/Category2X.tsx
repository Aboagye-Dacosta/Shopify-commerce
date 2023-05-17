import Clickable from "./Clickable";

export type Props = {
  categoryItem: {
    heading: string;
    title: string;
    btnText: string;
    image: string;
  };
  onClick: () => void;
  styles?: string;
  btnStyle?: string;
};

function Category2X({
  categoryItem: { heading, title, btnText, image },
  btnStyle,
  onClick,
}: Props) {
  return (
    <div
      className={`hover:shadow-slate-300 transition-shadow duration-200 grid grid-cols-[1fr_2fr] shadow shadow-slate-200 rounded-2xl h-[20rem] px-5 group`}
    >
      <div className="flex flex-col items-start justify-center">
        <h3 className="text-[1rem] md:text-[2rem] font-noto font-bold">
          {heading}
        </h3>
        <h1 className="text-[2rem] md:text-[3rem] text-left font-bold">
          {title}
        </h1>
        <Clickable
          onClick={onClick}
          styles={
            "shadow shadow-slate-200 group-hover:shadow-slate-400 text-sm md:text-[1rem] rounded-2xl font-bold self-start ml-3 mt-2 w-full " +
            btnStyle
          }
        >
          {btnText}
        </Clickable>
      </div>
      <div className="relative z-10 flex items-center justify-center">
        <span
          className="absolute h-full w-full bg-white left-0 top-0 z-10"
          style={{ borderRadius: "30% 70% 70% 30% / 46% 30% 70% 54% " }}
        ></span>
        <div className="flex">
          <img
            src={image}
            alt=""
            className="z-20 rotate-45 hover:rotate-0 transition-transform duration-500 object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Category2X;
