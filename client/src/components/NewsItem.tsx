import { useNavigate } from "react-router-dom";

export type NewsItemProps = {
  id: string;
  date: string;
  title: string;
  description: string;
  image: string;
};

function NewsItem({ id, title, description, date, image }: NewsItemProps) {
  const navigate = useNavigate();
  return (
    <div
      className="flex items-start justify-between flex-col shadow shadow-slate-200  pt-5"
      onClick={() => navigate(`/news/${id}`)}
    >
      <div className="flex flex-col items-start justify-start w-full px-5 flex-1">
        <img src={image} alt="" className="Object-contain" />

        <span className="mt-2 font-semibold">{date}</span>
        <h1 className="text-[1.5rem] font-bold font-noto my-1">{title}</h1>
      </div>
      <p className="text-left line-clamp-4 px-5 mt-2 bg-slate-100">
        {description}
      </p>
    </div>
  );
}

export default NewsItem;
