export default function () {
    const cache:Map<string, any> = new Map(); // closure
    return function memoize(target: any, methodName: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value; 
        descriptor.value = function(...args: any[]) {
            const cacheKey = `${methodName}: ${args.join('_')}`; // fibanocci:34, getProducts:mobile_3
            if(cache.has(cacheKey)) {
                console.log("cache hit " , args);
                return cache.get(cacheKey);
            }
            const result = originalMethod.apply(this, args);
            cache.set(cacheKey, result);
            return result;
        }
        return descriptor
    }
}