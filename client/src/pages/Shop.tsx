import CategoryGroup from "../components/CategoryGroup";
import CommerceLayout from "../layouts/CommerceLayout";
import useAppStore from "../store/appStore";
import { shallow } from "zustand/shallow";

import {
  categoryRow1,
  categoryRow2,
  promoCardStrings,
} from "../document/strings";

import Container from "../components/Container";
import PromoCard from "../components/PromoCard";
import Clickable from "../components/Clickable";
import { HiOutlineArrowNarrowRight } from "react-icons/all";
import PromoCard2 from "../components/PromoCard2";
import SectionContainer from "../components/SectionContainer";
import ProductsDisplay from "../components/ProductListings";
function Shop() {
  const [products] = useAppStore((state) => [state.products], shallow);

  // fetchData("https://fakestoreapi.com/products");
  return (
    <CommerceLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 py-20 px-20 bg-slate-200 gap-5">
        <div className="flex flex-col items-center justify-between">
          <h1 className="font-bold font-noto text-[3rem] text-red-600">
            New Arrivals
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            aliquid quis veritatis, eveniet itaque temporibus dicta nobis
            repellat aperiam velit neque vitae commodi voluptates ipsam. Autem
            corrupti quis expedita est.
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
      <div className="w-full">
        <Container styles="">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_5fr] my-5 px-10">
            <div>
              <h1>Filters</h1>
            </div>
            <div>
              <CategoryGroup category={categoryRow1} order="normal" />
              <CategoryGroup category={categoryRow2} order="reverse" />
            </div>
          </div>
        </Container>
        <PromoCard2 />
        <div className="px-10">
          <SectionContainer description="Some Products" title="Products">
            <ProductsDisplay products={products.slice(0, 8)} />
          </SectionContainer>
        </div>
        <Container>
          <PromoCard {...promoCardStrings[0]} />
        </Container>
        <div className="md:px-10">
          <SectionContainer description="Some Products" title="Products">
            <ProductsDisplay products={products.slice(0, 8)} />
          </SectionContainer>
        </div>
        <Container>
          <PromoCard {...promoCardStrings[0]} styles="bg-green-700" />
        </Container>

        <div className="md:px-10">
          <SectionContainer description="Some Products" title="Products">
            <ProductsDisplay products={products.slice(0, 8)} />
          </SectionContainer>
        </div>
        <div className="my-10">
          <PromoCard2 />
        </div>
      </div>
    </CommerceLayout>
  );
}

export default Shop;
