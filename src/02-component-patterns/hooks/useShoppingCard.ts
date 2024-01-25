import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";


export const useShoppingCard = () => {
    const [shoppingCard, setShoppingCard] = useState<{
        [key: string]: ProductInCart;
      }>({});
    
      const onProductCountChange = ({
        count,
        product,
      }: {
        count: number;
        product: Product;
      }) => {
        setShoppingCard((oldShoppingCard) => {
          const productInCart: ProductInCart = oldShoppingCard[product.id] || {
            ...product,
            count: 0,
          };
    
          if (Math.max(productInCart.count + count, 0) > 0) {
            return {
              ...oldShoppingCard,
              [product.id]: {
                ...productInCart,
                count: Math.max(productInCart.count + count, 0),
              },
            };
          }
    
          // borrar el producto
          const { [product.id]: toDelete, ...rest } = oldShoppingCard;
          return rest;
        });
      };

      return{
        shoppingCard,
        onProductCountChange
      }

}