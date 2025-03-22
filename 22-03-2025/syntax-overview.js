// 'use strict'

// Functions

function functionDeclaration() {
  console.log('Function Declaration')
}

const functionExpression = function () {
  console.log('Function expression')
}

const lambdaFunction = () => {
  console.log('Function expression')
}

const user = {
  name: 'John',
  age: 25,
  // Function declaration
  greet1() {
    console.log(this.name, 'greet1')
  },
  // Function expression
  greet2: function () {
    console.log(this.name, 'greet2')
  },
  // Lambda function
  greet3: () => {
    console.log(this.name, 'greet3')
  },
}

const admin = {
  name: 'Admin',
}

// user.greet1() // John greet1
// user.greet2() // John greet2
// user.greet3() //  greet3

// const { greet1, greet2, greet3 } = user

// greet1() //  greet1
// greet2() //  greet2
// greet3() //  greet3

const greet1 = user.greet1.bind(admin)

greet1()

class Person {
  name
  age

  constructor(name, age) {
    this.name = name
    this.age = age
  }

  greet() {
    console.log(this.name)
  }
}

const person = new Person('Sanya', 18)

person.greet()

const greet = person.greet.bind(person)

greet()

class Multiplier {
  coefficient

  constructor(coefficient) {
    this.coefficient = coefficient
  }

  multiply(number) {
    return number * this.coefficient
  }

  sumAndMultiply(...numbers) {
    let sum = 0

    for (const item of numbers) {
      sum += item
    }

    return this.multiply(sum)
  }
}

const items = [1, 2, 3, 4, 5]

const multiplier = new Multiplier(2)

console.log(
  items.map(function (el) {
    return multiplier.multiply(el)
  })
)

// .bind
// func (this) -> func.bind(object) -> this === object
// apply, call -> func.apply(object, args) === object.func(...args)
//

// To save context
// .bind - сохраняет контекст и возвращает функцию
// .apply - вызывает функцию с заданным контекстом
// .call - вызывает функцию с заданным контекстом

console.log(multiplier.sumAndMultiply.call(multiplier, 1, 2, 3))
console.log(multiplier.sumAndMultiply.apply(multiplier, [1, 2, 3]))

const sum = (a, b) => a + b

function prepareData(items) {
  // LOGIC
}

// items.map(function (v) {
//   return v * 2
// })

const multipliedItems = items.map((v) => v * 2)
console.log(multipliedItems, items)

items.forEach((v) => {
  console.log(v)
})

// map array1 -> array2 (sizes are equal)
// forEach array1 -> void (side effect)
// filter array1 -> array2 (array2.length <= array1.length)

const oddItems = items.filter((v) => v % 2 === 1)

console.log(oddItems, items)

// var let const

// var (till ES6)

function greetLet() {
  for (var i = 0; i < 5; i++) {}

  console.log(i)
}

greetLet()
;(() => {
  var i = 10
})()

// console.log(i)

// var - function scoped variable
// let/const - block scoped variable

if (true) {
  const f = 5
}

// console.log(f)
// let f = 5

functionDeclaration2()

function functionDeclaration2() {
  console.log('Function declaration 2')
}

// person.handUp() // this === person

// Theme: ... - rest/spread operator
// Spread

console.log(items)

const itemsCopy = [...items] // Spread operator

itemsCopy[4] = 6

console.log('Copy', itemsCopy, 'original', items)

const persons = [{ name: 'Sanya' }, { name: 'Fedor' }, { name: 'Ksenia' }]

// const personsCopy = persons.map((p) => ({ ...p }))
const personsCopy = structuredClone(persons)

personsCopy[0].name = 'Artem'

console.log('Copy', personsCopy, 'original', persons)

// Rest operator

function sum2(a, b, ...others) {
  let sum = a + b + others

  // for (const item of others) {
  //   sum += item
  // }

  return sum
}

console.log(sum2(1, 2, 3, 4, `a`)) // a = 1, b = 2, others = [3, 4, 5]

// a + b = 3 - number
// 3 + others ~ '3' + '3,4,a' = '33,4,a'

console.log(3 + '3' - 3) // 33-3

// Варианты от зала
// 3
// '33'
// '33-3'
// 30 :ok:
// ''
// undefined
// 3 + '3' = '33' - 3 = 30

// Sanya & Ksenia
