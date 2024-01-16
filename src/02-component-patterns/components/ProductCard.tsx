import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { createContext} from "react";
import { ProductCardProps, ProductContextProps, } from "../interfaces/interfaces";


export const ProductCardContext = createContext({ } as ProductContextProps);
const { Provider } = ProductCardContext;


export default function ProductCard({ children, product }: ProductCardProps) {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={styles.productCard}>
        {children}
      </div>
    </Provider>
  );
}

ProductCard.title = ProductTitle;
ProductCard.image = ProductImage;
ProductCard.buttons = ProductButtons;
