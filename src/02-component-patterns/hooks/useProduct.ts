import { useEffect, useRef, useState } from "react"
import { Product, onChangeArgs } from '../interfaces/interfaces';

interface useProductArgs{
  product : Product,
  onChange?:  (args: onChangeArgs) => void
  value?: number;
}

export const useProduct = ( {onChange, product, value = 0} : useProductArgs) => {
  const [counter, setCounter] = useState(value) 

  /* el !! vuelve true si hay un onChange */
  const isControlled = useRef( !!onChange )

  const increaseBy = (value: number) => {

    if (isControlled.current) {
      /* isControlled  */
      /* el signo de ! para que sepa que no es null o undefined */
      /* es como confirmar que siempre tendra un valor */
      return onChange!({count: value, product})
    }

    const newValue = Math.max(counter + value, 0)
    setCounter(newValue)

    onChange && onChange({count: newValue, product})
  }

  useEffect(() => {
    setCounter(value)
  },[value])

  return {
    counter,
    increaseBy
  }
}