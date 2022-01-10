import { useState, useEffect, useRef } from 'react';
import { onChangeArgs, Product, InitialValues } from '../interfaces/interfaces';

interface Props {
    product:Product,
    onChange?:(args:onChangeArgs) => void,
    value?:number
    initialValues?:InitialValues
}

export const useProduct = ({ onChange, product, value = 0, initialValues }:Props) => {
    const [counter, setCounter] = useState<number>(initialValues?.count || value);
    
    const isMounted = useRef(false);
    
    useEffect(() => {
        isMounted.current = true;
    }, []);

    useEffect(() => {
        if (!isMounted.current) return;
        setCounter(initialValues?.count || value);
    }, [value]);

    const increaseBy = (value:number) => {
        let newValue = Math.max(counter + value, 0);
        if (initialValues?.maxCount) {
            newValue = Math.min(newValue, initialValues.maxCount);
        }
        setCounter(newValue);
        onChange && onChange({ count:newValue, product });
    }

    const reset = () => {
        setCounter(initialValues?.count || value);
    }

    return { 
        counter,
        increaseBy,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount,
        reset,
    }
}