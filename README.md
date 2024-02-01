# REACT
Banuprakash C

Full Stack Architect,

Co-founder Lucida Technologies Pvt Ltd.,

Corporate Trainer,

Emails: banu@lucidatechnologies.com; banuprakashc@yahoo.co.in; banuprakash.cr@gmail.com

https://www.linkedin.com/in/banu-prakash-50416019/

https://github.com/BanuPrakash/REACT

Softwares Required:

Visual Studio Code.
Chrome Web Browser
NodeJS Latest LTS

=============

React with Webpack
* CSR and SSR --> Rendering [data to presentation]

JavaScript build tools
* Grunt
* Gulp
* Webpack [ ng new / npx create-react-app ]
* vite
...

Grunt is a JavaScript task runner, a tool used to automatically perform frequent tasks such as minification, compilation, unit testing, E2E, and linting. 

Code: Latest version of JS [transcompiler {babel, Tracuer}], Typescript, Dart, LiveScript, Coffeescript
tsc a.ts --> a.js

50+ components
<script src="user.component.js"></script>
<script src="users.component.js"></script>

bundle
index.html
<script src="bundle.fdsdf#2c2.js"></script>

========================

React code without react libraries

React Demystify 

Initialize a node project: npm init --y

Babel is a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ code into backwards-compatible JavaScript code that can be run by older JavaScript engines.
Babel for JSX --> JavaScript object 


Adding dependencies:

npm i webpack webpack-cli babel-loader @babel/core @babel/preset-env @babel/preset-react html-webpack-plugin css-loader style-loader -D

not installing:
npm i react react-dom

import UserComponent from './UserComponent'

NodeJS understands CommonJS module system
const UserComponent = require('./UserComponent');

Polyfill
https://caniuse.com/

const data = new Map();

===========

css-loader

import './style.css'
<style>

</style>


npm i webpack-dev-server -D

npm i clean-webpack-plugin -D
====

// XML Code

Rendering 
https://github.com/chentsulin/awesome-react-renderer

=======================

JavaScript is dynamically typed
var name = "Sam"; // string
name.toUpperCase();
var age = 24;
age++;


TypeScript

* Optional TypeSystem to JavaScript
* Statically typed
* code quanlity and understandablity
* early detection of errors

TypeScript Compiler
npm i -g typescript 
tsc --version
Version 5.2.2

Types:
1) string
2) number
3) boolean
4) any
5) unknown
6) type
7) interface
8) class

Basic types: string, number, boolean

let name:string = "Peter";

```
function doTask() {
    cond1
    return "data";
    cond2
    return 404;
    cond3
    return {

    }
}

let data:any = doTask();
```

Type type is to declare shape of object
? --> optional
```
type Product = {
    id: number,
    name: string,
    price?: number
}

function addProduct(product:Product) : void {

}
addProduct({id: 1, name: 'P1', price: 311.11}); //valid
addProduct({id: 1, name: 'P1'}); // valid
```

interface can be used instead of 'type' to define a shape
* can be also used for realization relationship
* can extend

```
interface Product {
    id: number,
    name: string,
    price?: number
}
// inheritance
interface Mobile extends Product {
    camera:string,
    connectivity:string
}

interface Tv extends Product {
    screenType: string
}

interface Renderer {
    render();
}

// Realization
class TvRenderer implements Renderer {
    render() {
        //
    }
    other code
}
// Realization
class DomRenderer implements Renderer {
    render() {
        //
    }
    other code
}
```

let course: string|number;

course = 234;
course = "ReactJS";

=======

Keywords: "as", "is", "in"

Type Predicate functions

 tsc typepredicate.ts 

 node typepredicate.js
=========
tsc lib.ts
node lib.js
instead:

npx ts-node lib.ts


===========================



Recap:
1) webpack: babel-loader, @babel/core, @babel/preset-env, @babel/preset-react 
html-webpack-plugin
webpack.config.js
babel.config.js/ .babelrc / babel.config.json
2) Typescript: string, number, boolean, any, unknown, type, interface , class
"as" , "in" and "is" 
HOF: functions which accept function as argument/function which returns a function
filter, map

Day 2
-----

JavaScript in TypeScript
* react, react-dom, jquery, .... are all written in JavaScript

tsproj % npm init --y
tsproj % npm i typescript -D
tsproj % tsc --init
 tsproj % npm i lodash

tsconfig.json

"rootDir": "./src",
 "outDir": "./dist",

===========

JS in TS --> types definition

typings.d.ts
declare module 'lodash' {
    export function random(min:number, max:number): number
}

or

npm i @types/lodash -D

npm i react react-dom
npm i @types/react @types/react-dom -D

======================

Decorators --> metadata @
A Decorator is a special kind of declaration that can be attached to a class declaration, method, accessor, property, or parameter.

* Specialization pattern

class Product {
    members
}
class Mobile extends Product {

}

class Tv extends Product {

}

React Components:
class UserComponent extends Component {
    render() {}
 }

* Decorator pattern
Angular approach:
```
@Component({
    selector:'app-user',
    template: `
    <div>
        {{firstName}}
    </div>
    `
})
class UserComponent {
    firstName:string ="";
    age:number = 18;

    onNgInit(){
        
    }
}
```
every instance of UserComponent contains: firstName, age, selector, template

<app-user> </app-user>

```
@Component({
    selector:'app-product',
    templateUrl: 'templates\product.html'
    stylesUrl:['./styles.css', './product.css']
})
class ProductComponent {
    title:string ="";
    price:number = 0;
}
```
=========================

1) class level
function classDecorator(constructor:Function) {}
Example:
function Component(constructor:Function) {}

2) method level
function methodDecorator(target:any, methodName:string, descriptor?:PropertyDescriptor){}

function log(target:any, methodName:string, descriptor?:PropertyDescriptor){
    console.log(methodName + " called ");
}

class Demo {
    @log
    doTask() {
        // code
    }
}

let d = new Demo();
d.doTask();

3) property level
function propertyDecorator(target:any, propertyKey:string){}

function min(target:any, propertyKey:string){
    // logic
}

```
class User {
    @min(5)
    firstName:string;

    @min(10)
    address:string;
}
```
4) parameter level
function parameterDecorator(target:any, methodName:string, parameterIndex:number){}

Requirement:
 "experimentalDecorators": true, 

===================

@observable
class BookStore {
    books:Book[] = [];
}

========

```
function update(name) {
    this.name = name;
}

let product = {
    name: 'A',
    price: 122;
}

let user = {
    email : "a@gmail.com",
    name : "Larry"
}

update.call(product, "iPhone");
update.apply(product, ["iPhone"]);
update.call(user, "Peter");

```

TypeScript Utility:

1) Partial<Type>
2) Readonly<Type>
3) Omit
4) Pick

interface Product {
    id:number,
    name: string,
    price: number,
    description: string
}

function printProduct(product:Readonly<Product>) {
    product.price = 99999; // error
}

function addProduct(product:Product) {

}
function updateProduct(product:Partial<Product>) {
    Object.keys(product)
}

updateProduct({id: 1, price: 8000});

type ProductDTO = Omit<Product, "description">;
type json = {
    product:Product[]
}
json: Partial<ResponseType>

5) Record --> Dictionary key-value pairs, fixed number of keys

type Course = "React" | "NodeJS" | "Angular"

interface CourseInfo {
    duration: number,
    trainer: string
}

const courses: Record<Course, CourseInfo> = {
    "React": {
        duration: 48,
        trainer: "A"
    },
     "NodeJS": {
        duration: 48,
        trainer: "B"
    },
     "Angular": {
        duration: 48,
        trainer: "C"
    },

}

6) ReturnType

function getData(a)  {
    return parseInt(a);
}

async function getUser(): Promise<{
        id: number,
        name: string
    }> {
    return { id: 12, name: 'Peter'}
}

type A = ReturnType<typeof getData>; // number

let data:A = getData("65");

type P = ReturnType<typeof getUser>; // Promise
type User = Awaited<ReturnType<typeof getUser>>; // {id: number, name: string}

=======

1) Create React Application using TypeScript with hooks, React Context for State management, react-router-dom, react-bootstrap, Spectrum, React WebComponents, ...
2) State management --> Context to Redux Toolkit
3) State Management --> Context to Mobx
4) State management --> Context to MST

======

axios for Api call
https://fakestoreapi.com/products?limit=5


React Context: Context provides a way to pass data through the component tree without having to pass props down manually at every level.

=====

npx create-react-app productapp --template typescript

// hook useState
```
 const [count, setCount] = useState<number>(0);

class App extends Component {
    state = {
        count: 0
    }

    this.state.count = 100; // 
    setCount(no) {
        this.setState({
            count: no
        })
    }
}
```

React 18 concurrency uses Fiber architecture instead of Stack

performUnitOfWork
beginWork 21516
completeWork 22064
completeRootImpl

react-dom/cjs/react-dom.development.js

https://claudiopro.github.io/react-fiber-vs-stack-demo/

==========

```
function App() {
  const [count, setCount] = useState<number>(0);
  return (
    <div className="App">
      <h1>Counter Example</h1>
      <span>Count {count}</span>
      <button type="button" onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default App;
```

npm i react-router-dom axios bootstrap react-bootstrap @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons

react-specturum / react web components

=========================

Day 3:

App and it's children can be Consumer of Context
<ProductProvider>
    <App />
</ProductProvider>

A and B are children, they can be Cosnumers or its Children
<ProductProvider size="10" className="card">
   
</ProductProvider>
```
class ProductList extends Component {
    render(): JSXElement {
        return <ProductContext.Consumer>
            {
                value => {
                    value.products.map(...)
                }
            }

        </ProductContext.Consumer>
    }
}
```

href ==> Server side Routing ==> Whole page is reloaded
as={Link} ==> Client Side Routing

http://localhost:3000/details/

FCP --> Web Vitals


Recap:
useState()
Context --> remove props-drill
useContext()
useEffect()
bootstrap/tailswind/zurb/balma
react-router-dom --> SPA
index.html --> many views
lazy() and Suspense

https://createapp.dev/webpack

Day 4
Hooks:
1) useState()
2) useEffect()
3) useContext()
4) useReducer() 
use this instead of useState() if
a) conditionally mutate the state
b) mutation depends on previous state

Example:
```
State:
{
    count: 100
}

{
    cartItems: [],
    total : 0
}
ADD_TO_CART, INCREMENT, DECREMENT, CLEAR_CART

Case 1: INCREMENT by 10
{
    count: 110
}
Case 2: DECREMENT
{
    count: 109
}
case 3: RESET
{
    count: 0
}
```
Requirements for useReducer()
1) we need Action Object
{
    type: 'INCREMENT',
    payload?: 10
}
2) reducer function
(state, action) => new state;
returned new_state will update previous "state"
3) useReducer

const initialState = {
    cartItems: [],
    total: 0
}

let [state, dispatch] = useReducer(cartReducer, initialState);


dispatch({type:'ADD_TO_CART', payload: {....}})

=====================

http://adobe.com/products/1 ==> Path Parameter
useParams()
http://amazon.com?category=mobile&page=1&size=20 ==> Query Parameter
useSearchParams()

===========================

Controlled Components and Uncontrolled Components

Controlled Components:
```
    export default function ProductForm() {
        let [title, setTitle] = useState();
        let [price, setPrice] = useState();
        function submit() {

        }
        return <>
            Title : <input type="text" 
                onChange={(evt) => setTitle(evt.target.value)}/> <br />
            Price : <input type="text"
                onChange={(evt) => setPrice(evt.target.value)} /> <br />
            <button type="button" onClick={() => sumbit()}>
        </>
    }
```


UnControlled Components:
```
    export default function ProductForm() {
        let titleRef = useRef();
        let priceRef = useRef();
        function submit() {
            let product = {
                title: titleRef.current.value,
                price: priceRef.current.value
            }
            //
        }
        return <>
            Title : <input type="text" ref={titleRef}/> <br />
            Price : <input type="text" ref={priceRef}/> <br />
            <button type="button" onClick={() => sumbit()}>
        </>
    }
```
React Spectrum:
```
npm i @adobe/react-spectrum

For Web Components
npm i @lit/react 
npm i @swc-react/Card

import { Card } from '@swc-react/Card';

<Card heading={title} subheading="JPG Photo">
    <img
        slot="cover-photo"
        src={image}
        alt="Demo Image"
    />
    <div slot="footer">
        Rs. {price}
    </div>
</Card>
```

=======

React 18:
1) concurrency
2) AutoBatching
3) useDefferedValue
useDeferredValue is a React Hook that lets you defer updating a part of the UI
it prempts to any other high priority thread [ user interactions]
4) useTransition()
similar to useDefferedValue 

========
Context --> to avoid props-drill. can be used for state management for smaller application
Context provides a way to pass data through the component tree without having to pass props down manually at every level.

https://www.youtube.com/watch?v=8pDqJVdNa44

Predictable State Managment:
1) Flux Architecture
2) Redux
    Advantage :
    a) state managment --> module
    integrate with react, Angular, Server Side apps,
    plain vanilla JS
    ---
    b) Time Travel Debugging
    c) Can be used in MicroFrontend
3) Mobx

=====================
react-redux
HOC connect

connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

state = {
    user: {
        avatar: '...',
        name: '...
    },
    cart: {
        cartItems: [],
        total: 2323
    }
}
Redux:

function mapStateToProps(state) {
    return {
        profileImage: state.user.avatar,
        products: state.cart.cartItems
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (item) => dispatch({type:'ADD_TO_CART, payload: item}),
        increment: (id) => dispatch({type:'INC', payload: id})
    }
}

props.addToCart({..})
props.increment(3);

====

Redux Toolkit
immerjs
immutablejs
======

npm i @reduxjs/toolkit react-redux

Remove all references to CartContext and CardProvider:
1) index.tsx
2) ProductCard
3) CartComponent.tsx
