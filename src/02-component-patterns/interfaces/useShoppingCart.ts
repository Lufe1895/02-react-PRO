import { useState } from "react";
import { products } from "../data/products";
import { Product, ProductInCart } from "./interfaces";

export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<{ [key:string]:ProductInCart }>({});

    const onProductCountChange = ({ product, count }:{ count:number, product:Product }) => {
        setShoppingCart(old => {
            const productInCart:ProductInCart = old[product.id] || { ...product, count:0};
            if (Math.max(productInCart.count + count, 0) > 0) {
                productInCart.count += count;
                return {
                    ...old,
                    [product.id]:productInCart
                }
            }

            const { [product.id]:toDelete, ...rest } = old;
            return { ...rest };
        });
    }

    return {
        shoppingCart,
        onProductCountChange,
        products,
    }
}