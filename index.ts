let a = 0;
var b = 1;
const x = () => {
    return 1;
};
//let a1:number = "hello";
let a1:number = 5;
let b1:string = "hi";
//b1 = 9;
const add1 = (n:number):number => n + 1;
add1(5);

class Customer {
    id:number = 0;
    name:string;
    active:boolean = true;
    sales:number;
    constructor(name:string = "NEW Customer") {
        this.id = 0;
        this.name = name;
        this.active = true;
        this.sales = 0;
    }
    print1():void {
        console.log(`${this.name}`);
    }
}