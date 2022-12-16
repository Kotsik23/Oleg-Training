"use strict";
var Category;
(function (Category) {
    Category["laptops"] = "laptops";
    Category["phones"] = "phones";
    Category["watches"] = "watches";
})(Category || (Category = {}));
class Product {
    constructor(price, category, title) {
        this._id = Product.generateProductId();
        this._price = price;
        this._category = category;
        this._title = title;
    }
    static generateProductId() {
        return Math.floor(Math.random() * 100);
    }
    get id() {
        return this._id;
    }
    get title() {
        return this._title;
    }
    get category() {
        return this._category;
    }
    get price() {
        return this._price;
    }
}
class User {
    constructor() {
        this.basket = [];
    }
    addToBasket(things) {
        if (Array.isArray(things)) {
            things.forEach(product => this.addThing(product));
        }
        else {
            this.addThing(things);
        }
    }
    addThing(thing) {
        if (this.basket.some(product => product.id === thing.id)) {
            console.log(`Product ${thing.title} is already in basket`);
        }
        else {
            this.basket.push(thing);
        }
    }
    getProductsByCategory(category) {
        return this.basket.filter(product => product.category === category);
    }
    getMostExpensiveProduct() {
        return this.basket.reduce((prev, cur) => (prev.price > cur.price ? prev : cur));
    }
    getMostInexpensiveProduct() {
        return this.basket.reduce((prev, cur) => (prev.price < cur.price ? prev : cur));
    }
    removeProduct(id) {
        const removeIndex = this.basket.findIndex(item => item.id === id);
        if (removeIndex === -1) {
            console.log(`Product by id ${id} doesn't found`);
        }
        this.basket.splice(removeIndex, 1);
    }
    calculateTotalPrice() {
        return this.basket.reduce((total, product) => total + product.price, 0);
    }
    buy() {
        this.basket = [];
        console.log("Thanks for shopping :)");
    }
}
const iPhone = new Product(1500, Category.phones, "iPhone");
const galaxyNote = new Product(500, Category.phones, "Galaxy Note");
const macBookPro = new Product(2500, Category.laptops, "MacBook Pro");
const lenovo = new Product(800, Category.laptops, "lenovo");
const appleWatch = new Product(500, Category.watches, "Apple Watch");
const galaxyWatch = new Product(300, Category.watches, "Galaxy Watch");
const user = new User();
user.addToBasket(iPhone);
user.addToBasket([galaxyNote, macBookPro, galaxyWatch]);
user.addToBasket([lenovo, galaxyNote, appleWatch]);
console.log(user.calculateTotalPrice());
user.removeProduct(user.getMostExpensiveProduct().id);
console.log(user.calculateTotalPrice());
console.log(user.getProductsByCategory(Category.phones));
console.log(user.getMostInexpensiveProduct().title);
user.buy();
