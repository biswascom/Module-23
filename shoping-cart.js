const shopingCart = [
    {names: 'shoe', price: 1200, quantity: 2},
    {names: 'shirt', price: 1500, quantity: 3},
    {names: 'pant', price: 2000, quantity: 1},
    {names: 'belt', price: 500, quantity: 4},
]

function totalCost (products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const totalCost = product.price * product.quantity;
        sum = sum + totalCost;
    }
    return sum;
}

const totalProductCost = totalCost (shopingCart);
console.log (totalProductCost);