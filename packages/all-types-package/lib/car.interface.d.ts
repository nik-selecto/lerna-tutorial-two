import { BrandEnum } from "./brand.enum";
import { ColorType } from "./color.type";
export interface ICar {
    brand: BrandEnum;
    maxSpeed: number;
    price: number;
    weight: number;
    colors: ColorType;
}
