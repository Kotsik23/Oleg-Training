function customArray(array) {
   this.array = array
}

customArray.prototype.first = function () {
   return this.array[0]
}

customArray.prototype.last = function () {
   return this.array[this.array.length - 1]
}

customArray.prototype.take = function (amount) {
   const result = this.array.filter((_, index) => index < amount)
   return new customArray(result)
}

customArray.prototype.skip = function (amount) {
   const result = this.array.filter((_, index) => index >= amount)
   return new customArray(result)
}

customArray.prototype.map = function (callback) {
   const result = this.array.map(callback)
   return new customArray(result)
}

customArray.prototype.filter = function (callback) {
   const result = this.array.filter(callback)
   return new customArray(result)
}

// TESTING
const array = new customArray([3, 5, 2, 4, 1])

console.log(array.first())
console.log(array.last())
console.log(array.skip(2))
console.log(array.take(2))
console.log(array.take(4).skip(3))
console.log(array.take(4).skip(2).first())

console.log(array.map(function (item) {
   return item * item
}))

console.log(array.filter(function (item) {
   return item % 2
}))

Array.prototype.take = function (amount) {
   return this.filter((_, index) => index < amount)
}

Array.prototype.skip = function (amount) {
   return this.filter((_, index) => index >= amount)
}

const arr = [1, 2, 3, 4, 5]
console.log(arr.take(2).skip(1))