let students = []

let student = {
    name: 'zero',
    age: 10,
    weight: 48.5,
    isSubscribed: false
}

let newStudent = {
    name: 'Marcos',
    age: 0,
    weight: 37.8,
    isSubscribed: true
}

students = [
    student /*,
    newStudent*/
]

students[1] = newStudent 

console.log(students[0])
console.log(students[1])