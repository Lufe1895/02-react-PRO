import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';
import { ProductButtons } from './ProductButtons';
import { ProductCard as ProductCardHOC } from '../components/ProductCard';
import { ProductCardHOCProps } from '../interfaces/interfaces';

export { ProductTitle } from './ProductTitle';
export { ProductImage } from './ProductImage';
export { ProductButtons } from './ProductButtons';

export const ProductCard:ProductCardHOCProps = Object.assign(ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons,
});

export default ProductCard;