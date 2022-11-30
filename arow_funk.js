// context
function log() {
    console.log(this)
}

const arrowLog = () => console.log(this)

const person = {
    name: 'Elena',
    age: 20,
    log: log,
    arrowLog: arrowLog,
    global.setTimeout(() => {
        console.log(this.name + ' ' + this.age)
    }, 500)
}

person.arrowLog()