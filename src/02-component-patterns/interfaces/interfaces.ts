import { ReactElement } from "react";
import { Props as ProductButtonsProps } from "../components/ProductButtons";
import { Props as ProductImageProps } from '../components/ProductImage';
import { Props as ProductTitleProps } from '../components/ProductTitle';
import { Props as ProductCardProps } from '../components/ProductCard';

export interface Product {
    id:string;
    title:string;
    img?:string;
}

export interface ProductContextProps {
    counter:number;
    increaseBy:(value:number) => void;
    maxCount?:number;
    product:Product;
}

export interface ProductCardHOCProps {
    ({ children, product, className, style }: ProductCardProps ):JSX.Element,
    Buttons: ( Props: ProductButtonsProps ) => JSX.Element,
    Image:   ( Props: ProductImageProps ) => JSX.Element,
    Title:   ( Props: ProductTitleProps ) => JSX.Element,
}

export interface onChangeArgs {
    product:Product, 
    count:number,
}

export interface ProductInCart extends Product {
    count:number
}

export interface InitialValues {
    count?:number;
    maxCount?:number;
}

export interface ProductCardHandlers {
    count:number,
    isMaxCountReached:boolean,
    maxCount?:number,
    product:Product,

    increaseBy:(val:number) => void,
    reset:() => void,
}