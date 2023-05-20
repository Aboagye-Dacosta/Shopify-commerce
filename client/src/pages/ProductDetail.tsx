import { useParams } from "react-router-dom";
import useAppStore from "../store/appStore";
import CommerceLayout from "../layouts/CommerceLayout";
import ProductStars from "../components/ProductStars";
import { BsCurrencyDollar, BsBag } from "react-icons/all";
import { useState } from "react";
import SectionContainer from "../components/SectionContainer";
import ProductsDisplay from "../components/ProductListings";

function ProductDetail() {
  const [toggleTab, setToggleTab] = useState(true);

  const { id } = useParams();
  const products = useAppStore((state) => state.products);
  const product = useAppStore((state) =>
    state.products.find((p) => p["id"] == id)
  );

  if (!product) {
    return <div>Product does not exist</div>;
  }

  return (
    <CommerceLayout>
      <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] px-10 py-10 mx-36 gap-5">
        <div className="py-3 px-3 shrink-0 border border-slate-200 flex items-center justify-center">
          <img
            src={product["image"]}
            alt=""
            className="w-[15rem] object-cover"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <h1 className="text-[1.5rem] font-bold text-left mr-5">
              {product["title"]}
            </h1>
            <span className="self-start">status</span>
          </div>

          <span className="flex items-center px-2 text-left my-4">
            <span className="bg-blue-600 rounded-lg py-1 px-3 text-white mr-2 font-bold">
              Rating
            </span>
            <span className="font-bold text-[1.2rem] mr-2">
              {product["rating"]["rate"]}
            </span>
            <ProductStars rate={product["rating"]["rate"]} />
          </span>

          <span className="text-left flex items-center mb-4">
            <span className="bg-slate-100 rounded-lg py-1 px-1 mr-2 capitalize font-bold">
              rate count
            </span>
            {product["rating"]["count"]}
          </span>
          <div className="text-left my-4">
            CATEGORY
            <span className="bg-red-600 rounded-lg py-1 px-3 capitalize text-white ml-2 font-bold ">
              {product["category"]}
            </span>
          </div>
          <div className="flex items-center font-bold text-[1.5rem]">
            <BsCurrencyDollar />{" "}
            <span className="text-[3rem]">{product["price"]}</span>
          </div>
          <button className="rounded-md bg-slate-100 px-3 py-3 font-bold flex items-center justify-center">
            <span className="flex-1"> Add to cart</span>
            <BsBag className="text-orange-500" />
          </button>
        </div>
      </div>
      <div>
        <div className="px-10 py-10 mx-36 ">
          <ul className="flex capitalize font-bold cursor-pointer mb-3">
            <li className=" mr-5" onClick={() => setToggleTab(true)}>
              description
            </li>
            <li onClick={() => setToggleTab(false)}>feedback</li>
          </ul>
          <hr />
          <div className="flex font-bold cursor-pointer">
            <div className="mt-5">
              {toggleTab && (
                <p className="text-left text-gray-500">
                  {product["description"]}
                </p>
              )}
              {!toggleTab && <div>Feedback</div>}
            </div>
          </div>
        </div>
        <div className="mx-10">
          <SectionContainer
            title="Some goods you might like"
            description="similar"
            titleStyle="text-left"
          >
            <ProductsDisplay
              products={products
                .filter((item) => item["category"] == product["category"])
                .slice(0, 9)}
            />
          </SectionContainer>
        </div>
      </div>
    </CommerceLayout>
  );
}

export default ProductDetail;
