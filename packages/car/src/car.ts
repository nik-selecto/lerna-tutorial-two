import { ICar } from "../../all-types-package/lib/car.interface";


export class Car {
    constructor(options: Partial<ICar>) {
        console.log('Create car:', options);
    }
}
