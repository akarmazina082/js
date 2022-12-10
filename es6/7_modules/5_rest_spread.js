//Rest
function average(a, b, ...args) {
    return args.reduce((acc, i) => acc += i, 0) / args.length
}
// console.log(average(10, 20, 30, 40, 50))

//spread
// const array = [1, 2, 3, 5, 8, 13]
// console.log(...array)
// console.log(Math.max(...aray))
// console.log(Math.min(...aray))
// console.log(Math.max.apply(null, array))

// const fib = [1, ...array]
// console.log(fib)

//destructuring
const array = [1, undefined, 3, 5, 8, 13]  
// const [a, b = 42, ...c] = array
// console.log(a, b, c )

// const [a,, c] = array
// console.log(a, c)

//object

const address = {
    country: 'Ukraine',
    city: 'Kiev',
    // street: 'Shevchenka',
    concat: function() {
        return `${this.country} ${this.city} ${this.street}`
    }
}
// const {city, country, street = 'Tverskaya', concat: adressConcat} = address

// console.log (adressConcat.call(address))
// console.log(street)
const {city, ...rest} = address
console.log(city)
console.log(rest)

const newAddress = {...address, street: 'Tverskaya', code: 123}
console.log(newAddress)

// console.log(address.concat()) 