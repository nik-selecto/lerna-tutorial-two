"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Driver = void 0;
const util_1 = require("util");
class Driver {
    constructor(name) {
        this.driver = { name, cars: [] };
    }
    buyCar(car) {
        this.driver.cars.push(car);
    }
    info() {
        console.log((0, util_1.inspect)(this.driver, { colors: true, showHidden: true }));
    }
}
exports.Driver = Driver;
//# sourceMappingURL=driver.js.map