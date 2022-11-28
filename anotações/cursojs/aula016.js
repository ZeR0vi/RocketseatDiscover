function Person(name){
    this.name = name
    this.andar = function(){
        return this.name + ' está andadando'
    }
}   

const pessoa = new Person('ZeR0')
const pessoa2 = new Person('AsD')

console.log(pessoa.andar())