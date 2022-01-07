import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';

export const ProductImage = () => {
    const { product } = useContext(ProductContext);
    const { img } = product;
    return (
        <img className={ styles.productImg } src={ img ? img : noImage } alt="Product" />
    );
}