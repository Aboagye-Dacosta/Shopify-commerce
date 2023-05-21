import CommerceLayout from "../layouts/CommerceLayout";
import useAppStore from "../store/appStore";
import { shallow } from "zustand/shallow";

import { categories, promoCardStrings } from "../document/strings";

import Container from "../components/Container";
import PromoCard from "../components/PromoCard";

import PromoCard2 from "../components/PromoCard2";
import SectionContainer from "../components/SectionContainer";
import ProductsDisplay from "../components/ProductListings";
import { Category } from "../components/CategoryItem";
import Category1xT2 from "../components/CategoryItem";
import Hero2 from "../components/Hero2";

function Shop() {
  const [products, loadedCategories] = useAppStore(
    (state) => [state.products, state.categories],
    shallow
  );

  const setCategoryGroups = (categories: Category[]) => {
    const holder1 = [...categories];
    const holder = [];
    while (holder1.length > 0) {
      holder.push(holder1.splice(0, 3));
    }
    return holder;
  };

  const categoryGroups = setCategoryGroups(categories);
  console.log(
    "🚀 ~ file: Shop.tsx:30 ~ Shop ~ categoryGroups:",
    categoryGroups
  );

  return (
    <CommerceLayout>
      <Hero2 />
      <div className="w-full">
        <Container styles="">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_5fr] my-5 px-10">
            <div>
              <h1>Filters</h1>
            </div>
            <div className="flex flex-wrap w-full">
              {categories
                .slice(0, loadedCategories.length)
                .map((category, i) => (
                  <Category1xT2
                    {...category}
                    title={loadedCategories[i]}
                    key={i}
                  />
                ))}
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
