import Container from "./Container";
import Clickable from "./Clickable";

type PromProduct = {
  image: string;
  description: string;
  discount: string;
  title: string;
  subTitle: string;
  date: string;
  caption: string;
  btnText: string;
};

export type PromoCardProps = {
  promoProduct: PromProduct;
  styles?: string;
};

function PromoCard({
  promoProduct: {
    description,
    title,
    subTitle,
    image,
    discount,
    date,
    caption,
    btnText,
  },
  styles,
}: PromoCardProps) {
  return (
    <Container styles="my-10">
      <div
        className={`flex flex-col items-center justify-center lg:grid lg:grid-cols-[2fr_1fr]  px-20 rounded-lg group ${styles}`}
      >
        <div
          className={` md:grid md:grid-cols-[1fr_2fr] items-center justify-center  py-5`}
        >
          <div className="flex flex-col items-start justify-center">
            <span className="text-[1rem] font-noto font-bold rounded-2xl bg-white text-slate-500 px-3 ">
              {discount} % Off
            </span>
            <h1 className="text-white text-[4rem] font-bold font-noto leading-tight ">
              {caption}
            </h1>
            <span className="relative text-[1.2rem] font-semibold font-mono text-slate-400 after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:bg-white after:h-[.1rem] after:w-0 group-hover:after:w-full after:transition-all after:duration-200  ">
              {date}
            </span>
          </div>
          <div className=" relative w-full">
            <div className="h-full w-full">
              <img
                src={image}
                alt=""
                className="w-full md:-translate-x-16  lg:scale-120 object-cover"
              />
            </div>
          </div>
        </div>
        <div className="py-5 flex flex-col items-center justify-between after:content-['']  after:bg-white after:visible after:w-0 after:h-full after:absolute relative h-full after:-z-10 after:flex group-hover:after:w-full after:transition-all after:duration-200 after:left-0 after:top-0 z-20">
          <span className="text-[1.2rem] font-bold font-noto uppercase ">
            {subTitle}
          </span>
          <h1 className="text-[2rem] font-bold text-noto text-white group-hover:text-current">
            {title}
          </h1>
          <p className="my-1 text-slate-300 group-hover:text-slate-500">
            {description}
          </p>
          <Clickable
            onClick={() => console.log("clicked")}
            styles="bg-white px-3 py-2 rounded-2xl w-max group-hover:bg-orange-500 group-hover:text-white"
          >
            {btnText}
          </Clickable>
        </div>
      </div>
    </Container>
  );
}

export default PromoCard;
