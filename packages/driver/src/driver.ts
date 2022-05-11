import { ICar } from "../../all-types-package/lib/car.interface";
import { IDriver } from "../../all-types-package/lib/driver.interface";
import { inspect } from 'util';

export class Driver {
    private driver!: IDriver;

    constructor(name: string) {
        this.driver = { name, cars: [] };
    }

    public buyCar(car: ICar) {
        this.driver.cars.push(car);
    }

    public info() {
        console.log(inspect(this.driver, { colors: true, showHidden: true }));
    }
}