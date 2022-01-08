import { useState } from "react";
import { products } from "../data/products";
import { Product, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<{ [key:string]:ProductInCart }>({});

    const onProductCountChange = ({ product, count }:{ count:number, product:Product }) => {
        setShoppingCart(old => {
            if(count === 0) {
                const { [product.id]: toDelete, ...rest } = old;
                return rest;
            }

            return {
                ...old,
                [product.id]: { ...product, count }
            }
        });
    }

    return {
        shoppingCart,
        onProductCountChange,
        products,
    }
}