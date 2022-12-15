// CHECK VALUES
const arrayCheck = [1, 2, 3]
const dateCheck = new Date(2022, 12, 15)
const boolCheck = false
const numberCheck = 32
const stringCheck = "Programming"
const functionCheck = function log() { console.log("Hello world") }
const undefinedCheck = undefined
const NanCheck = NaN

const obj1 = {
   a: 1,
   b: { c: 2 }
}

const obj2 = {
   a: 1,
   b: { c: 2 },
}


console.log("isArray", ModuleLib.isArray(arrayCheck));
console.log("isDate", ModuleLib.isDate(dateCheck));
console.log("isBool", ModuleLib.isBool(boolCheck));
console.log("isNumber", ModuleLib.isNumber(numberCheck));
console.log("isString", ModuleLib.isString(stringCheck));
console.log("isFunction", ModuleLib.isFunction(functionCheck));
console.log("isUndefined", ModuleLib.isUndefined(undefinedCheck));
console.log("isNaN", ModuleLib.isNaN(NanCheck));
console.log("DeepEqual", ModuleLib.deepEqual(obj1, obj2))

const singleton = ModuleLib.singleton()

const instance1 = singleton.getInstance()
instance1.username = "Jack"
console.log("Instance 1:", instance1)

const instance2 = singleton.getInstance()
console.log("Is instances equals? ", instance1 === instance2)

console.log(ModuleLib.memoizedSum(2, 5))
console.log(ModuleLib.memoizedSum(2, 5))

console.log(ModuleLib.memoizedSum(5, 2))

console.log(ModuleLib.memoizedSum(11, 6))
console.log(ModuleLib.memoizedSum(11, 6))