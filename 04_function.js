// 1 Function declaration (можем обращатся когда захотим)
// function great(name) {
//     console.log('Hi -', name)
// }

// 2 Function expression
// const great2 = function great2(name) {
//     console.log('Hi -', name)
// }

// great('Lena')
// great2('Lena')

// console.dir(great)

// 3 Анонимніе функции

// let counter = 0 
// const interval = setInterval(function(){
//     if (counter ===5) {
//         clearInterval(interval)
//     }else{
//         console.log(++counter)
//     }
// }, 1000)

// 4 Стрелочные функции

function great(name) {
    console.log('Hi -', name)
}

const arrow = (name, age) => {
    console.log('Hi -', name)
}

const arrow2 = name => console.log('Hi -', name)

arrow2('valdilen')

const pow2 = num => num **2


console.log(pow2(5))

// 5 Параметры по умолчанию 

// const sum = (a = 40, b = a * 2) => a + b
// console.log(sum(41, 4))
// console.log(sum())

// function sumAll(...all) {
//     let result = 0 
//     for(let num of all) {
//         result += num
//     }
//     return result
// }

// const res = sumAll(1, 2, 3, 4, 5)
// console.log(res)

//Замыкания 
 function createMember(name) {
    return function(lastName){
        console.log(name + lastName)
    }
 }

 const logWithLastName = createMember('Vladilen')
 console.log(logWithLastName('Minin'))
 console.log(logWithLastName('kuz'))