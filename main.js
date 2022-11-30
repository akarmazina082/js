function cal(year) {
    return 2020 - year
}

// console.log(cal(1993))
// console.log(cal(2019))
// console.log(cal(1999))

function logInfoAbout(name, year){
    const age = cal(year)

    if(age>0){
        console.log('Человек по имени' + name + 'сейчас имеет возраст' + age)
    }else{
        console.log('Вообще-то єто уже будущее!')
    }
}

logInfoAbout('Владилен', 1993)
logInfoAbout('Elena', 1995)
logInfoAbout('Elena', 2022)

