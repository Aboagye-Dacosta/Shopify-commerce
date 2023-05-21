import { BsBag, BsCurrencyDollar } from "react-icons/all";
import { Link } from "react-router-dom";
import Clickable from "./Clickable";
import { appStrings } from "../document/strings";

import ProductStars from "./ProductStars";

export type Product = {
  id: string;
  title: string;
  price: number;
  image: string;
  category: string;
  rating: { rate: number; count: number };
};

type ProductItemProps = {
  product: Product;
  onClick: () => void;
};

function ProductItem({ product, onClick }: ProductItemProps) {
  return (
    <div className="w-full shadow-sm shadow-slate-100 py-5 px-3 flex flex-col items-center justify-between hover:shadow-slate-300">
      <Link to={`/products/${product.id}`} className="w-full">
        <div className="w-full flex items-center justify-center">
          <img
            src={product["image"]}
            alt=""
            className="h-[10rem] object-contain"
          />
        </div>
        <div className="flex flex-col items-start justify-center mt-5 w-full">
          <div className="flex items-center justify-between w-full">
            <ProductStars rate={product.rating.rate} />
          </div>
          <span className="text-[1rem] font-bold text-left">
            {product["title"]}
          </span>
          <span className="text-slate-500 capitalize my-1">
            {product["category"]}
          </span>
          <span className="flex items-center text-[1.5rem] font-noto font-bold">
            <BsCurrencyDollar />
            {product["price"]}
          </span>
        </div>
      </Link>
      <Clickable
        onClick={onClick}
        styles="bg-white shadow shadow-slate-300 mt-3 w-full flex justify-between"
      >
        <span className="flex-1 text-center">
          {" "}
          {appStrings.productItemBtnText}
        </span>
        <BsBag className="text-orange-500" />
      </Clickable>
    </div>
  );
}

export default ProductItem;
