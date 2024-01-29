interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
}

function filter<T>(data: T[], predicate: (elem: T) => boolean): T[] {
    var result: T[] = [];
    data.forEach(elem => {
        if (predicate(elem)) {
            result.push(elem);
        }
    })
    return result;
}

const products: Product[] = [
    { "id": 1, "name": "iphone 14", "price": 89000.00, "category": "mobile" },
    { "id": 2, "name": "LG", "price": 72000.00, "category": "tv" },
    { "id": 3, "name": "Wacom", "price": 4200.00, "category": "computer" },
    { "id": 4, "name": "Sony Bravia", "price": 289000.00, "category": "tv" },
    { "id": 5, "name": "Samsung z fold", "price": 189000.00, "category": "mobile" }
]

let mobiles = filter(products, e => e.category === 'mobile');

mobiles.forEach(mobile => console.log(mobile));

let numbers = [4, 13, 90, 31, 9, 5, 1, 8];

let evens = filter(numbers, e => e % 2 === 0);
evens.forEach(e => console.log(e));

// convert into TypeScript
function map(data, transformFn) {
    var result = [];
    data.forEach(elem => {
        result.push(transformFn(elem));
    })
    return result;
}


function transformToDiv(p) {
    return `
        <div className='card'>
            <div className='card-header'>
                ${p.name}
            </div>
            <div className='card-body'>
                ${p.category}, Rs. ${p.price}
            </div>
        </div>
    `
}

let cards = map(products, transformToDiv)
cards.forEach(card => console.log(card));

let doubles = map(numbers, (e) => e * 2);
console.log(doubles);

