function doTaskUnknown(arg:unknown) {
    if(typeof arg === 'function') {
        arg();
    } else if(typeof arg === 'string') {
        console.log(arg.toUpperCase());
    }
}

doTaskUnknown("Hello World!!!");