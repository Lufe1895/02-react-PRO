import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';

export interface Props {
    img?: string;
    className?: string;
    style?: React.CSSProperties 
}

export const ProductImage = ({ className, style }:Props) => {
    const { product } = useContext(ProductContext);
    const { img } = product;
    return (
        <img 
            className={ `${ styles.productImg } ${ className }` } 
            style={ style }
            src={ img ? img : noImage } 
            alt="Product" 
        />
    );
}