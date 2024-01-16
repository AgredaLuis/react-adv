import { useContext } from "react";
import { ProductCardContext } from "./ProductCard";
import styles from "../styles/styles.module.css";
import Image from "../assets/no-image.jpg"


export const ProductImage = ({ img = "" }) => {

  const { product } = useContext(ProductCardContext);

  let imgToShow: string;

  if(img) {
    imgToShow = img;
  } else if(product.img) {
    imgToShow = product.img;
  } else {
    imgToShow = Image;
  }
  return (
    <img
      className={styles.productImg}
      src={imgToShow}
      alt="coffe Mug"
    />
  );
};