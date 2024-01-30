export function Component(config: any) { // decorator factory
    return function (constructor: Function) {
        Object.defineProperty(constructor.prototype, 
            "selector", {"value": config.selector});
            Object.defineProperty(constructor.prototype, 
                "template", {"value": config.template}); // closure
    }
}

/*
    closure --> mechanism where returned functions can access all the members
    of outer function
*/