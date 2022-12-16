class Pair<KeyType, ValueType> {
	constructor(readonly key: KeyType, readonly value: ValueType) {}
}

class CustomMap<KeyType, ValueType> {
	private arr: Pair<KeyType, ValueType>[] = []

	public add(key: KeyType, value: ValueType): void {
		if (!this.has(key)) {
			this.arr.push(new Pair(key, value))
		} else {
			console.log(`Pair with key ${key} is already exists.`)
		}
	}

	public remove(key: KeyType): void {
		if (this.has(key)) {
			const removeIndex = this.arr.findIndex(item => item.key === key)
			this.arr.splice(removeIndex, 1)
		} else {
			console.log(`Pair with key ${key} doesn't exists.`)
		}
	}

	public get(key: KeyType): ValueType | undefined {
		if (this.has(key)) {
			return this.arr.find(item => item.key === key)?.value
		} else {
			console.log(`Pair with key ${key} doesn't exists.`)
		}
	}

	public has(key: KeyType): boolean {
		return this.arr.some(item => item.key === key)
	}

	public toString(): string {
		let result = ""
		this.arr.forEach(item => {
			result += `${item.key}->${item.value} `
		})
		return result
	}
}

interface City {
	title: string
	population: number
}

interface Country {
	capital: City
	totalArea: number
}

const moscow: City = {
	title: "Moscow",
	population: 12506468,
}

const minsk: City = {
	title: "Minsk",
	population: 2009786,
}

const russia: Country = {
	capital: moscow,
	totalArea: 17098246,
}

const belarus: Country = {
	capital: minsk,
	totalArea: 207600,
}

const myMap1 = new CustomMap<number, string>()
const myMap2 = new CustomMap<City, Country>()

myMap1.add(1, "first")
myMap1.add(2, "second")
myMap1.add(3, "third")
myMap1.add(1, "first again")
myMap1.remove(4)

console.log(myMap1.get(1))
console.log(myMap1.get(2))
console.log(myMap1.get(4))
console.log(myMap1.has(2))
console.log(myMap1.has(4))

myMap2.add(russia.capital, russia)
myMap2.add(belarus.capital, belarus)

console.log(myMap2.get(moscow))
console.log(myMap2.get(minsk))

console.log(`custom map output: ${myMap1}`)
