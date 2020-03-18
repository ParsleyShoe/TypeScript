"use strict";
let a = 0;
var b = 1;
const x = () => {
    return 1;
};
//let a1:number = "hello";
let a1 = 5;
let b1 = "hi";
//b1 = 9;
const add1 = (n) => n + 1;
add1(5);
class Customer {
    constructor(name = "NEW Customer") {
        this.id = 0;
        this.active = true;
        this.id = 0;
        this.name = name;
        this.active = true;
        this.sales = 0;
    }
    print1() {
        console.log(`${this.name}`);
    }
}
