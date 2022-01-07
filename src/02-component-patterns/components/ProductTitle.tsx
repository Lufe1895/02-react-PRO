import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';

export interface Props {
    className?: string 
    title?: string, 
    activeClass?: string;
    style?: React.CSSProperties 
}

export const ProductTitle = ({ className, style }:Props) => {
    const { product } = useContext(ProductContext);
    const { title } = product;
    return (
        <span 
            className={ `${ styles.productDescription } ${ className }` }
            style={ style }
        >
            { title }
        </span>
    );
}