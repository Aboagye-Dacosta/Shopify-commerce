import {
  BsHeadset,
  TbTruckDelivery,
  RiSecurePaymentFill,
  GiTakeMyMoney,
} from "react-icons/all";

import { Props } from "../components/Category2X";
import { InfoTabProps } from "../components/InfoTab";
import { PromoCardProps } from "../components/PromoCard";
import { NewsItemProps } from "../components/NewsItem";

export const appStrings = {
  appTitle: "Hex-store",
  appDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              cupiditate aliquid Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Ea aut qui numquam aliquid sapiente et harum
              suscipit provident? Architecto quod harum eligendi tempore eaque`,
  productItemBtnText: "Add to cart",
  homePageBestSellerTitle: " Best Seller Products",
  homePageBestSellerTitleDesc: "Let your feet be heard",
  newsSectionTitle: "Recent News",
  newsSectionDescription: "How our customers enjoy our services",
};

export const appContacts = [
  "+2272839238328",
  "someone@mail.com",
  "company ,Austan streets-44",
  "German host",
];

export const heroStrings = {
  heading: "Let your feet be heard - Audible",
  title: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              cupiditate aliquid Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Ea aut qui numquam aliquid sapiente et harum
              suscipit provident? Architecto quod harum eligendi tempore eaque
              tenetur labore quibusdam voluptates laborum quo!`,
  ImgOne: "/images/Kick-1-cover-flipped.webp",
  ImgTwo: "/images/Kick-1-cover.webp",
  btnString: "Let's shop",
};

export const categoryRow1: Props[] = [
  {
    categoryItem: {
      title: "Puma Fit",
      btnText: "Browse",
      heading: "You will love it",
      image: "/images/Kick-1.png",
    },
    onClick: () => console.log("clicked"),
  },
  {
    categoryItem: {
      title: "Jordan",
      btnText: " New is always good",
      heading: "Browse",
      image: "../../public/images/kick-3-blue.png",
    },
    onClick: () => console.log("clicked"),
  },
  {
    categoryItem: {
      title: "Nike Brand",
      btnText: "Browse",
      heading: "Trend",
      image: "/images/Kick-2.png",
    },
    onClick: () => console.log("clicked"),
  },
];

export const categoryRow2: Props[] = [
  {
    categoryItem: {
      title: "Nike",
      btnText: "Browse",
      heading: "Trend",
      image: "../../public/images/Kick-3-gray.png",
    },

    onClick: () => console.log("clicked"),
  },
  {
    categoryItem: {
      title: "Puma Fit",
      btnText: "Browse",
      heading: "You will love it",
      image: "/images/Kick-1-flipped.png",
    },

    onClick: () => console.log("clicked"),
  },
  {
    categoryItem: {
      title: "Jordan",
      btnText: " New is always good",
      heading: "Browse",
      image: "../../public/images/kick-3-black.png",
    },

    onClick: () => console.log("clicked"),
  },
];

export const infoTabs: InfoTabProps[] = [
  {
    id: " 1",
    title: "Title",
    description: "Small Description",
    Icon: TbTruckDelivery,
  },
  {
    id: "2",
    title: "Title",
    description: "Small Description",
    Icon: BsHeadset,
  },
  {
    id: "3",
    title: "Title",
    description: "Small Description",
    Icon: GiTakeMyMoney,
  },

  {
    id: "4",
    title: "Title",
    description: "Small Description",
    Icon: RiSecurePaymentFill,
  },
];

export const promoCardStrings: PromoCardProps[] = [
  {
    promoProduct: {
      btnText: "Let Shop it",
      caption: "HAPPY FEET",
      date: "now till 14th",
      description:
        "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque fugit alias, eos cum mollitia, architecto modi repudiandae ",
      discount: "30",
      image: "/images/Kick-1-flipped.png",
      subTitle: "Solo steps",
      title: "SUMMER DEALS",
    },
    styles: "bg-red-500 gap-10",
  },
  {
    promoProduct: {
      btnText: "check it out",
      caption: "LEAP WALK",
      date: "two days remain",
      description:
        "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque fugit alias, eos cum mollitia, architecto modi repudiandae ",
      discount: "30",
      image: "../../public/images/Kick-2.png",
      subTitle: "let hike",
      title: "ANY TIME DEALS",
    },
    styles: "bg-green-700",
  },
];

export const newItems: NewsItemProps[] = [
  {
    id: "1",
    date: "12th November 2023",
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus atque eius modi, ducimus suscipit eum quis quidem
                corrupti maxime velit sed aut praesentium`,
    image: "../../images/Kick-2.png",
    title: " Micheal Jordan's Hit Kick",
  },
  {
    id: "2",
    date: "12th November 2023",
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus atque eius modi, ducimus suscipit eum quis quidem
                corrupti maxime velit sed aut praesentium`,
    image: "../../images/Kick-2.png",
    title: " Micheal Jordan's Hit Kick",
  },
  {
    id: "3",
    date: "12th November 2023",
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus atque eius modi, ducimus suscipit eum quis quidem
                corrupti maxime velit sed aut praesentium`,
    image: "../../images/Kick-2.png",
    title: " Micheal Jordan's Hit Kick",
  },
];
