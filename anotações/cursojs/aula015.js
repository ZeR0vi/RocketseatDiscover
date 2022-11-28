// callback - quando uma função retorna uma função

function myName(name) {
    name()
}

myName(
    () => {
        console.log('ZeR0')
    }
)