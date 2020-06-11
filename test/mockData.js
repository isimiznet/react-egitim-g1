let faker = require('faker');

module.exports = function () {
    let products = [];
    for (let i = 0; i < 50; i++) {
        products.push({
            id: i,
            productName: faker.commerce.productName(),
            price: faker.commerce.price(),
            color: faker.commerce.color(),
            category: faker.commerce.product(),
            image: faker.image.imageUrl()
        })
    }

    return {
       products
    }
};
