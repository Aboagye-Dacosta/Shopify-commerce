import { ComponentType } from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/all";

function ProductStars({ rate }: { rate: number }) {
  const stars: ComponentType[] = [];

  const starCont = Math.floor(rate);
  for (let index = 0; index < starCont; index++) {
    stars.push(BsStarFill);
  }
  if (rate - starCont >= 1) {
    for (let index = 0; index < rate - starCont; index++) {
      stars.push(BsStar);
    }
  } else if (rate - starCont > 0) {
    stars.push(BsStarHalf);
  }

  return (
    <span className="flex text-orange-500">
      {stars.map((Star, id) => (
        <Star key={id} />
      ))}
    </span>
  );
}

export default ProductStars;
