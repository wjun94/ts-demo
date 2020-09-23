function say(name: string) {
    console.log(name)
}

say("test")

interface Struct {
    name: string
    age?: number
}

function people(s: Struct) {
    console.log(`${s.name}--${s.age}`)
}

people({name: 'test', age: 10})