import { useEffect, useRef, useState } from 'react'
import { InitialValues, onChangeArgs, Product } from '../interfaces/interfaces';


interface useProductArgs {
    product: Product;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number;
    initialValues?: InitialValues;
}


export const useProduct = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {

    const [ counter, setCounter ] = useState( initialValues?.count || value );
    const isMounted = useRef(false)

    console.log(initialValues?.count)

    const increaseBy = ( value: number ) => {
      
        let newValue = Math.max( counter + value, 0 )
        if(initialValues?.maxCount){
            newValue = Math.min( newValue, initialValues?.maxCount)
        }
        setCounter( newValue );
        onChange && onChange({ count: newValue, product });
    }
    
    useEffect(() => {
        isMounted.current = true
    })
    useEffect(() => {
        if ( !isMounted.current ) return;
        setCounter( value );
    }, [ value ])

    return {
        counter,
        increaseBy
    }

}