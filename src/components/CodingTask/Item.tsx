import { FC } from "react";

interface IItemProps {
  name: string;
  image: string;
  price: number;
  cartQuantity?: number;
}

const Item: FC<IItemProps> = ({
  name,
  image,
  price,
  cartQuantity,
}): JSX.Element => {
  return (
    <div>
      <div>{name}</div>
      <img src={image} alt="anyItem" />
      <div>price - {price}</div>
      <button>inc</button>
      <div>quantity{cartQuantity}</div>
      <button>dec</button>
    </div>
  );
};

export { Item };
