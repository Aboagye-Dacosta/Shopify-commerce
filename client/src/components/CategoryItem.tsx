import { Link } from "react-router-dom";
export type Category = {
  heading: string;
  title: string;
  description: string;
  image: string;
};

function Category1xT2({ title, heading, image, description }: Category) {
  const linkTitle = title.replaceAll(" ", "_");
  return (
    <Link to={`/products/category/${linkTitle}`}>
      <div
        className={` h-[20rem] w-[18rem] mb-5 shadow hover:shadow-slate-300 transition-shadow duration-200 shadow-slate-100 rounded-2xl px-3 py-3 group mx-3`}
      >
        <img
          src={image}
          alt=""
          className="hover:-translate-x-10 hover:rotate-45 transition-transform duration-500 object-contain"
        />
        <h3 className="text-[1.5rem] text-slate-300 font-sans font-bold">
          {heading}
        </h3>
        <h1 className="text-[1.5rem] md:text-[2rem] font-bold font-noto text-slate-600">
          {title}
        </h1>

        <p>{description}</p>
      </div>
    </Link>
  );
}

export default Category1xT2;
