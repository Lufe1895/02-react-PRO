import { ProductButtons, ProductTitle, ProductImage, ProductCard } from '../components';
import '../styles/custom-styles.css';
import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from '../data/products';

const product = products[0];

export const ShoppingPage = () => {

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />                

            <ProductCard 
                product={ product }
                className='bg-dark text-white'
                key={ product.id }
                initialValues={{
                    count: 4,
                    maxCount: 10,
                }}
            >
                <ProductImage className='custom-image' />

                <ProductTitle className='text-bold' />

                <ProductButtons className='custom-buttons' />
            </ProductCard>
        </div>
    )
}