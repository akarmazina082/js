// const num = 42
// const float = 42.42
// const pow = 10e3

// console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER)
// console.log('Math.pow 53', Math.pow(2,53)-1)
// console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER)

// const names = 'Vladilen'
// console.log(names.length)
// console.log(names.toUpperCase())
// console.log(names.toLowerCase())
// console.log(names.charAt(2))
// console.log(names.indexOf('!'))
// console.log(names.toLowerCase().startsWith('vlad'))
// console.log(names.startsWith('vlad'))
// console.log(names.endsWith('en!'))
// console.log(names.repeat(3))

// const string = '    password     '
// console.log(string.trim())
// console.log(string.trimRight())

function logPerson (s, name, age) {
    if (age <0){
        age = 'еще не родился'
    }
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}

 const personName = 'Vladilen'
 const personAge = 26
 const personName2 = 'Makx'
 const personAge2 = -10
 
 const output = logPerson`Name: ${personName}, Age: ${personAge}!`
 const output2 = logPerson`Name: ${personName2}, Age: ${personAge2}!`
 console.log(output)
 console.log(output2)