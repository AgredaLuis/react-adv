import { ReactElement } from "react";

export interface ProductCardProps {
  product: Product;

  /* children?: ReactElement | ReactElement[]; */
  /* este children es para devolver JSX Element */
  children?: () => JSX.Element
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}


export interface onChangeArgs {
  product : Product;
  count: number;
}

export interface ProductInCart extends Product {
  count: number;
}
export interface InitialValues {
  count?: number;
  maxCount?: number;
}