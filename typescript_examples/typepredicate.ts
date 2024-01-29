interface Product {
    getName(): string
}

interface ErrorMsg {
    getMessage(): string
}

// Type Assertions : "as"
/*
function printData(data: Product | ErrorMsg) {
    if(typeof (data as Product).getName === 'function') {
        (data as Product).getName();
    }

   // data.getMessage();
}
printData({"getName": () => "Roger"});
*/

// Type Predicates function -=> "is"

function isProduct(data: Product | ErrorMsg): data is Product {
    return 'getName' in data;
}

function isErrorMsg(data: Product | ErrorMsg): data is ErrorMsg {
    return typeof (data as ErrorMsg).getMessage === 'function';
}

function printData(data: Product | ErrorMsg) {
    if (isProduct(data)) {
        console.log(typeof data);
        console.log(data.getName());
    }
    if (isErrorMsg(data)) {
        console.log(data.getMessage());
    }
}

printData({ "getMessage": () => "Boom :-(" })