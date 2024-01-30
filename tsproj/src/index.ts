import UserComponent from './UserComponent';
import Lib from './Libs';
import User from './User';

let user = new User();
 user.age = 2; // set name() {}
//@ts-ignore
if(user["error"]) {
    //@ts-ignore
    console.log(user["error"])
} else {
    console.log(user.age);
}
let lib = new Lib();

console.time("first");
    console.log(lib.fibanocci(34));
console.timeEnd("first");

console.time("second");
    console.log(lib.fibanocci(34)); // i want it from cache --> Memoization Pattern
console.timeEnd("second");

let c1 = new UserComponent();
//@ts-ignore
console.log(c1.name, c1['selector'], c1['template']);



// import { random } from 'lodash'

// function doTask() {
//     console.log(random(1, 100));
// }

// doTask();