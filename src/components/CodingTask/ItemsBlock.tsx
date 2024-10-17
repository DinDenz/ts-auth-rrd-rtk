import { products } from "./dbImitation";
import { Item } from "./Item";
import "./styles.css";

const ItemsBlock = () => {
  return (
    <div className="poduct-block">
      <p>choose items</p>
      {products.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
};

export { ItemsBlock };
