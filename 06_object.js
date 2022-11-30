const person = {
    name: 'Vladilen',
    age: 26,
    isProgrammer: true,
    languages: ['ru', 'en', 'de'],
    // 'complex key': 'Complex Value',
    // ['key_' + (1 + 3)]: 'Computed Key',
    greet() {
        console.log('greet from person')
    },
    info() {
        console.info('Информация про человека по именни:', this.name)
    }
}

// console.log(person.name)
// const ageKey = 'age'
// console.log(person[ageKey])
// console.log(person['complex key'])
// person.greet()

// person.age++
// person.language.push('by')
// console.log(person)
// person.key_4

// const {name, age: personAge = 10, language} = person

// for (let key in person){
//     if (person.hasOwnProperty(key)) {
//         console.log('key:', key)
//         console.log('value:', person[key])  
//     }
   
// }

    // Object.keys(person).forEach((key) => {
    //     console.log('key:', key);
    //     console.log('value:', person[key]);
    // });

// person.info()

//context

const logger = {
    keys() {
        console.log('Object Keys: ', Object.keys(this))
    },
    keysAndValues() {
        Object.keys(this).forEach(function (key){
            console.log(`"${key}": ${this[key]}`)
        }.bind(this))
    },
    withParams(top = false, between = false, bottom = false) {
        if (top) {
            console.log('--------Start-------')
        }
        Object.keys(this).forEach((key, index, array) => {
            console.log(`"${key}": ${this[key]}`)
        if (between && index !== array.length - 1) {
             console.log('--------------')
        }    
        })
        if (bottom) {
            console.log('--------End-------')
        }
    }
}
// const bound = logger.keys.bind(person)
// bound ()
// logger.key.call(person)
// logger.keysAndValues.call(person)
logger.withParams.call(person, true, true, true)
logger.withParams.apply(person, [true, true, true])