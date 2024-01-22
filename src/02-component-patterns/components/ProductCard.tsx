import { createContext } from 'react';

import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, ProductCardProps, onChangeArgs } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css'

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


export const ProductCard = ({ children, product, className, style, onChange }: ProductCardProps ) => {

    const { counter, increaseBy } = useProduct( {onChange} );

    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div className={ `${styles.productCard} ${ className }` } style={ style }>
                { children }
            </div>
        </Provider>
    )
}