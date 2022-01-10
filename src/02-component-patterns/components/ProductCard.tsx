import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { createContext, ReactElement } from 'react';
import { ProductContextProps, Product, onChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces/interfaces';
import { products } from '../data/products';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    children: (args:ProductCardHandlers) => JSX.Element,
    product:Product,
    className?:string,
    style?: React.CSSProperties,
    onChange?:(args:onChangeArgs) => void,
    value?:number,
    initialValues?:InitialValues,
}

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }:Props) => {
    const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({ onChange, product, value, initialValues });

    return (
        <Provider value={{
            counter,
            increaseBy,
            maxCount,
            product,
        }}>
            <div 
                className={ `${ styles.productCard } ${ className }` }
                style={ style }
            >
                { 
                    children({
                        count: counter,
                        isMaxCountReached,
                        increaseBy,
                        maxCount: initialValues?.maxCount,
                        product,
                        reset,
                    }) 
                }
            </div>
        </Provider>
    )
}