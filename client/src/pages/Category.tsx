import { useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import useAppStore from "../store/appStore";
import CommerceLayout from "../layouts/CommerceLayout";
import ProductsDisplay from "../components/ProductListings";
import SectionContainer from "../components/SectionContainer";
import Hero2 from "../components/Hero2";

function Category() {
  let { title } = useParams();
  const focusRef = useRef<HTMLSpanElement>(null);
  title = title?.replaceAll("_", " ");

  //   console.log(title);
  const categoryProducts = useAppStore((state) =>
    state.products.filter((product) => product.category == title)
  );
  useEffect(() => {
    if (focusRef) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      focusRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [title]);

  return (
    <CommerceLayout>
      <Hero2 />
      <span ref={focusRef}></span>
      <div className="px-10">
        {categoryProducts.length <= 0 ? (
          <div>loading</div>
        ) : (
          <SectionContainer
            title={title ? title : ""}
            description="shoping never maid easy"
            titleStyle="text-left"
          >
            <ProductsDisplay products={categoryProducts} />
          </SectionContainer>
        )}
      </div>
    </CommerceLayout>
  );
}

export default Category;
