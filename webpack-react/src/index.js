import filter, { map } from './lib';

const products = [
    { "id": 1, "name": "iphone 14", "price": 89000.00, "category": "mobile" },
    { "id": 2, "name": "LG", "price": 72000.00, "category": "tv" },
    { "id": 3, "name": "Wacom", "price": 4200.00, "category": "computer" },
    { "id": 4, "name": "Sony Bravia", "price": 289000.00, "category": "tv" },
    { "id": 5, "name": "Samsung z fold", "price": 189000.00, "category": "mobile" }
]

let mobiles = filter(products, e => e.category === 'mobile');

mobiles.forEach(mobile => console.log(mobile));

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