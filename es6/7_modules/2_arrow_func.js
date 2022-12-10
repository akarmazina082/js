// function sum(a, b) {
//     return a + b
// }

// function cube(a) {
//     return a**3
// }

const sum = (a, b) => a + b
const cube = a => a**3

// console.log(sum(41, 1))
// console.log(cube(2))

setTimeout(() => console.log('After 1 second'), 1000)

//context

const arrowLog = () => console.log(this)

const person = {
    name: 'Elena',
    age: 20,
    log: log,
    arrowLog: arrowLog,
    delayLog: function() {
        setTimeout(function() {
            console.log(this.name + '' + this.age)
        }, 5000)
    }
}
person.delayLog()