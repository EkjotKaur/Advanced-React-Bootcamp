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
class TvRenderer extends Renderer {
    render() {
        //
    }
    other code
}
// Realization
class DomRenderer extends Renderer {
    render() {
        //
    }
    other code
}
```

