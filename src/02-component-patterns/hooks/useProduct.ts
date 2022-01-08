import { useState, useEffect, useRef } from 'react';
import { onChangeArgs, Product } from '../interfaces/interfaces';

interface Props {
    product:Product,
    onChange?:(args:onChangeArgs) => void,
    value?:number
}

export const useProduct = ({ onChange, product, value = 0 }:Props) => {
    const [counter, setCounter] = useState(value);

    const isControlled = useRef<boolean>(!!onChange);

    useEffect(() => {
        setCounter(value);
    }, [value])

    const increaseBy = (value:number) => {
        if (isControlled.current) {
            return onChange!({ count:value, product });
        }

        const newValue = Math.max(counter + value, 0);
        setCounter(newValue);
        onChange && onChange({ count:newValue, product });
    }

    return { 
        counter,
        increaseBy,
    }
}