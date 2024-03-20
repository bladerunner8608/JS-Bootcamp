const square = (num) => num * num

const squareLong = (num) => {
    return num * num
}

console.log(square(5))

const people = [{
    name: 'Chris',
    age: 37
}, {
    name: 'Linda',
    age: 38
}, {
    name: 'Andrew',
    age: 29
}]

// const under30 = people.filter(function(person){
//     return person.age < 30
// })

const under30 = people.filter((person) => person.age < 30)

console.log(under30)

const age = people.find((person) => person.age === 38)
console.log(age.name)