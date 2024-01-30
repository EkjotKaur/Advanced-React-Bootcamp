import Min from "./decorators/Min";

export default class User {
    
    name:string = "";
    @Min(5)
    age:number = 22;
}