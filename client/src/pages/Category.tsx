import { useParams } from "react-router-dom";
import useAppStore from "../store/appStore";
import CommerceLayout from "../layouts/CommerceLayout";
import ProductsDisplay from "../components/ProductListings";
import SectionContainer from "../components/SectionContainer";
import Hero2 from "../components/Hero2";

function Category() {
  let { title } = useParams();
  title = title?.replaceAll("_", " ");

  //   console.log(title);
  const categoryProducts = useAppStore((state) =>
    state.products.filter((product) => product.category == title)
  );

  return (
    <CommerceLayout>
      <Hero2 />

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
