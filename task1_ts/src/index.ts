enum Category {
	laptops = "laptops",
	phones = "phones",
	watches = "watches",
}

class Product {
	private _id: number
	private _price: number
	private _category: Category
	private _title: string

	constructor(price: number, category: Category, title: string) {
		this._id = Product.generateProductId()
		this._price = price
		this._category = category
		this._title = title
	}

	private static generateProductId(): number {
		return Math.floor(Math.random() * 100)
	}

	get id(): number {
		return this._id
	}

	get title(): string {
		return this._title
	}

	get category(): Category {
		return this._category
	}

	get price(): number {
		return this._price
	}
}

class User {
	private basket: Product[] = []

	public addToBasket(things: Product | Product[]): void {
		if (Array.isArray(things)) {
			things.forEach(product => this.addThing(product))
		} else {
			this.addThing(things)
		}
	}

	private addThing(thing: Product): void {
		if (this.basket.some(product => product.id === thing.id)) {
			console.log(`Product ${thing.title} is already in basket`)
		} else {
			this.basket.push(thing)
		}
	}

	public getProductsByCategory(category: Category): Product[] {
		return this.basket.filter(product => product.category === category)
	}

	public getMostExpensiveProduct(): Product {
		return this.basket.reduce((prev, cur) => (prev.price > cur.price ? prev : cur))
	}

	public getMostInexpensiveProduct(): Product {
		return this.basket.reduce((prev, cur) => (prev.price < cur.price ? prev : cur))
	}

	public removeProduct(id: number): void {
		const removeIndex = this.basket.findIndex(item => item.id === id)

		if (removeIndex === -1) {
			console.log(`Product by id ${id} doesn't found`)
		}

		this.basket.splice(removeIndex, 1)
	}

	public calculateTotalPrice(): number {
		return this.basket.reduce((total, product) => total + product.price, 0)
	}

	public buy(): void {
		this.basket = []
		console.log("Thanks for shopping :)")
	}
}

const iPhone = new Product(1500, Category.phones, "iPhone")
const galaxyNote = new Product(500, Category.phones, "Galaxy Note")
const macBookPro = new Product(2500, Category.laptops, "MacBook Pro")
const lenovo = new Product(800, Category.laptops, "lenovo")
const appleWatch = new Product(500, Category.watches, "Apple Watch")
const galaxyWatch = new Product(300, Category.watches, "Galaxy Watch")

const user = new User()

user.addToBasket(iPhone)
user.addToBasket([galaxyNote, macBookPro, galaxyWatch])
user.addToBasket([lenovo, galaxyNote, appleWatch])

console.log(user.calculateTotalPrice())

user.removeProduct(user.getMostExpensiveProduct().id)

console.log(user.calculateTotalPrice())

console.log(user.getProductsByCategory(Category.phones))
console.log(user.getMostInexpensiveProduct().title)

user.buy()
