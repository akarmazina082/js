const cars = ['Мазда', 'Форд', 'БМВ', 'Мерседс']
// const people = [
//     {name: 'Vladilen', budget: 4200},
//     {name: 'Elena', budget: 3500},
//     {name: 'Victoria', budget: 1700},
// ]
const fib = [1,1,2,3,5,8,13]

//metod
// cars.push('Рено')
// cars.unshift('Волга')

// const firstCar = cars.shift()
// const lastCar = cars.pop()


// console.log(cars)
// console.log(cars.reverse())
// console.log(cars)

// const index = cars.indexOf('BMW')
// const index = cars.findIndex('BMW')
// cars[index] = 'Porsche'
// console.log(cars)
// let findedPerson
// for (const person of people) {
//     if (person.budget === 3500) {
//         findedPerson = person
//     }
// }

// console.log(findedPerson)
// const person = people.find(function(person){
//     return person.budget = 3500
// })
// const person = people.find(person => person.budget === 3500)
// console.log(person)

// const upperCaseCars = cars.map(car =>{
//     return car.toUpperCase()
// })
// const pow2 = num => num ** 2
// const pow2Fib = fib.map(pow2)
// const filteredNumbers = pow2Fib.filter(num => num > 20)
// console.log(pow2Fib)
// console.log(filteredNumbers)
// const pow2Fib = fib.map(pow2).map(Math.sqrt)
// console.log(pow2Fib)
// console.log(cars)
//task

// const text = 'ПРивет сы изучаем js'
// const reverseText = text.split('').reverse().join(' ')
// console.log(reverseText)

const people = [
    {name: 'Vladilen', budget: 4200},
    {name: 'Elena', budget: 3500},
    {name: 'Victoria', budget: 1700},
]

const allBudget = people
    .filter(person => person.budget > 2000)
    .reduce((acc, person) =>{
        acc += person.budget
        return acc
    }, 0)
    

console.log(allBudget)