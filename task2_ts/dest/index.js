"use strict";
class Pair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
class CustomMap {
    constructor() {
        this.arr = [];
    }
    add(key, value) {
        if (!this.has(key)) {
            this.arr.push(new Pair(key, value));
        }
        else {
            console.log(`Pair with key ${key} is already exists.`);
        }
    }
    remove(key) {
        if (this.has(key)) {
            const removeIndex = this.arr.findIndex(item => item.key === key);
            this.arr.splice(removeIndex, 1);
        }
        else {
            console.log(`Pair with key ${key} doesn't exists.`);
        }
    }
    get(key) {
        var _a;
        if (this.has(key)) {
            return (_a = this.arr.find(item => item.key === key)) === null || _a === void 0 ? void 0 : _a.value;
        }
        else {
            console.log(`Pair with key ${key} doesn't exists.`);
        }
    }
    has(key) {
        return this.arr.some(item => item.key === key);
    }
    toString() {
        let result = "";
        this.arr.forEach(item => {
            result += `${item.key}->${item.value} `;
        });
        return result;
    }
}
const moscow = {
    title: "Moscow",
    population: 12506468,
};
const minsk = {
    title: "Minsk",
    population: 2009786,
};
const russia = {
    capital: moscow,
    totalArea: 17098246,
};
const belarus = {
    capital: minsk,
    totalArea: 207600,
};
const myMap1 = new CustomMap();
const myMap2 = new CustomMap();
myMap1.add(1, "first");
myMap1.add(2, "second");
myMap1.add(3, "third");
myMap1.add(1, "first again");
myMap1.remove(4);
console.log(myMap1.get(1));
console.log(myMap1.get(2));
console.log(myMap1.get(4));
console.log(myMap1.has(2));
console.log(myMap1.has(4));
myMap2.add(russia.capital, russia);
myMap2.add(belarus.capital, belarus);
console.log(myMap2.get(moscow));
console.log(myMap2.get(minsk));
console.log(`custom map output: ${myMap1}`);
