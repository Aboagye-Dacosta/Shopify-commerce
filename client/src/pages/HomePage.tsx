import Hero from "../components/Hero";
import InfoTab from "../components/InfoTab";
import PromoCard from "../components/PromoCard";
import Container from "../components/Container";
import CommerceLayout from "../layouts/CommerceLayout";

import ProductsDisplay from "../components/ProductListings";
import SectionContainer from "../components/SectionContainer";
import useAppStore from "../store/appStore";
import { shallow } from "zustand/shallow";
import {
  heroStrings,
  infoTabs,
  promoCardStrings,
  appStrings,
  newItems,
} from "../document/strings";
import NewsDisplay from "../components/NewsDisplay";

function HomePage() {
  const [data] = useAppStore(
    (state) => [state.products, state.categories],
    shallow
  );

  // console.log(categories);
  return (
    <CommerceLayout>
      <div>
        <Hero
          btnText={heroStrings.btnString}
          description={heroStrings.description}
          heading={heroStrings.heading}
          title={heroStrings.title}
          ImgOne={heroStrings.ImgOne}
          ImgTwo={heroStrings.ImgTwo}
          onClick={() => console.log("clicked")}
        />
        {/* <Container styles="mt-0">
          <CategoryGroup order="reverse" category={categoryRow1} />
          <CategoryGroup order="normal" category={categoryRow2} />
        </Container> */}
        <div className="w-full px-10">
          <Container styles="mt-3 py-3">
            <div className="flex item-center flex-wrap justify-center">
              {infoTabs.map((info) => (
                <InfoTab {...info} key={info.id} />
              ))}
            </div>
          </Container>
          <PromoCard {...promoCardStrings[0]} />

          <SectionContainer
            title={appStrings.homePageBestSellerTitle}
            description={appStrings.homePageBestSellerTitleDesc}
          >
            <ProductsDisplay products={data.slice(0, 8)} />
          </SectionContainer>
          <PromoCard {...promoCardStrings[1]} />
          <SectionContainer
            title={appStrings.homePageBestSellerTitle}
            description={appStrings.homePageBestSellerTitleDesc}
          >
            <ProductsDisplay products={data.slice(9, 17)} />
          </SectionContainer>

          <SectionContainer
            title={appStrings.newsSectionTitle}
            description={appStrings.newsSectionDescription}
          >
            <NewsDisplay data={newItems} />
          </SectionContainer>
        </div>
      </div>
    </CommerceLayout>
  );
}

export default HomePage;
