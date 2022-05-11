import { ICar } from "../../all-types-package/lib/car.interface";
export declare class Driver {
    private driver;
    constructor(name: string);
    buyCar(car: ICar): void;
    info(): void;
}
