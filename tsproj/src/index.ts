import UserComponent from './UserComponent';

let c1 = new UserComponent();
//@ts-ignore
console.log(c1.name, c1['selector'], c1['template']);



// import { random } from 'lodash'

// function doTask() {
//     console.log(random(1, 100));
// }

// doTask();