const phones = [
    {names: 'samsung', camera: '20 mp', storage: '32gb', color: 'silver', price: 32000},
    {names: 'iphone', camera: '25 mp', storage: '32gb', color: 'golden', price: 82000},
    {names: 'walton', camera: '28 mp', storage: '32gb', color: 'black', price: 22000},
    {names: 'oppo', camera: '15 mp', storage: '32gb', color: 'silver', price: 20000},
    {names: 'htc', camera: '10 mp', storage: '32gb', color: 'red', price: 60000},
    {names: 'symphony', camera: '30 mp', storage: '32gb', color: 'blue', price: 30000}
]

function cheapestPhone (phones) {
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones [i];
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}

const selectPhone = cheapestPhone (phones);
console.log (selectPhone);