class FourSides {
   constructor(height, width) {
      this.height = height
      this.width = width
   }

   square() {
      return this.height * this.width
   }
}

class Square extends FourSides {
   constructor(side) {
      super(side, side)
   }
}

class Rectangle extends FourSides {
   constructor(height, width) {
      super(height, width)
   }
}

class Circle {
   constructor(radius) {
      this.radius = radius
   }

   square() {
      return Math.PI * Math.pow(this.radius, 2)
   }
}

function totalSquare(array) {
   return array.reduce((sum, item) => {
      sum += item.square()
      return sum
   }, 0)
}

function check() {
   const square = new Square(5)
   const rectangle = new Rectangle(3, 6)
   const circle = new Circle(4)

   const figuresArray = [square, rectangle, circle]
   console.log(totalSquare(figuresArray))
}

check()