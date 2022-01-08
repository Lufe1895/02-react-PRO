import { ReactElement } from "react";
import { Props as ProductButtonsProps } from "../components/ProductButtons";
import { Props as ProductImageProps } from '../components/ProductImage';
import { Props as ProductTitleProps } from '../components/ProductTitle';


export interface ProductCardProps {
    children?:ReactElement | ReactElement[]
    product:Product,
    className?: string;
    style?: React.CSSProperties,
    onChange?:(args:onChangeArgs) => void,
    value?:number,
    initialValues?:InitialValues,
}

export interface Product {
    id:string;
    title:string;
    img?:string;
}

export interface ProductContextProps {
    counter:number;
    increaseBy:(value:number) => void;
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