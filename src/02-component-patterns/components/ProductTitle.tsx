import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';

export const ProductTitle = () => {
    const { product } = useContext(ProductContext);
    const { title } = product;
    return (
        <span className={ styles.productDescription }>{ title }</span>
    );
}