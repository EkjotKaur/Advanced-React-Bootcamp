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
function isProduct(data) {
    return 'getName' in data;
}
function isErrorMsg(data) {
    return typeof data.getMessage === 'function';
}
function printData(data) {
    if (isProduct(data)) {
        console.log(data.getName());
    }
    else if (isErrorMsg(data)) {
        console.log(data.getMessage());
    }
}
printData({ "getMessage": function () { return "Boom :-("; } });
