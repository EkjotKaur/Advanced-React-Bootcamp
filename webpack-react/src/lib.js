const filter = (data, predicate) => {
    var result = [];
    data.forEach(elem => {
        if (predicate(elem)) {
            result.push(elem);
        }
    })
    return result;
}

export default filter;

export const map = (data, transformFn) => {
    var result = [];
    data.forEach(elem => {
        result.push(transformFn(elem));
    })
    return result;
}

