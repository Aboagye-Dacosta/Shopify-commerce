import Category1xT1 from "./Category1xT1";
import Category1xT2 from "./Category1xT2";
import Category2X, { Props } from "./Category2X";

type CategoryGroupProps = {
  category: Props[];
  order: "reverse" | "normal";
};

function CategoryGroup({ category, order }: CategoryGroupProps) {
  const catOrder1: string = order == "normal" ? "order-1" : "order-2";
  const catOrder2: string = order == "normal" ? "order-2" : "order-1";
  return (
    <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 gap-5 my-5">
      <div
        className={`flex items-center justify-center mr-3 h-[20rem] ${catOrder1}`}
      >
        <Category1xT1 {...category[0]} />
        <Category1xT2 {...category[1]} />
      </div>
      <div className={catOrder2}>
        <Category2X {...category[2]} />
      </div>
    </div>
  );
}

export default CategoryGroup;
