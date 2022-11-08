
// map --> Siempre devuelve un array

let numbers = [2, 45, 7, 8, 34, 21, 43, 22]

let newArr = numbers.map((num)=>{
    return num + 20
})

console.log(newArr)

let coches = [
    {
        marca: "Hyundai",
        precio: 14000
    },
    {
        marca: "Audi",
        precio: 21000
    },
    {
        marca: "Daewo",
        precio: 12000
    },
    {
        marca: "Bugatti",
        precio: 300000
    }
]

let cochesArr = coches.forEach((e)=>{
    console.log(e.precio * 0.9)
})

console.log(coches)
console.log(cochesArr)

let nuevoArr = coches.map((e)=>{
    return e.marca
})

console.log(nuevoArr)

// map
    // 1. Haz una función que tome como parámetro un array de strings y devuelva ese array de strings pasados a mayúsculas.

    

    // 2. Haz una función que reciba como parámetro un array de números y devuelva un array de esos números pero multiplicados por 4 si son menores de 10 y multiplicados por 2 si son mayores de 10 o iguales


    // 3. Haz una función que reciba como parámetro un array de objetos, dada la estructura más abajo, devuelve un array solo con las edades

    let usuarios = [
        {
            username: "pepito_grillo",
            age: 27,
            conectado: false
        },
        {
            username: "alcubierre",
            age: 43,
            conectado: true
        },
        {
            username: "ternasco",
            age: 17,
            conectado: false
        },
        {
            username: "op_lop",
            age: 33,
            conectado: true
        }
    ]


    // sort
        // 1. dado el array anterior, haz una función que ordene los objetos por orden alfabético de sus usernames


    // forEach
        // 2. dado el mismo array de objetos que antes, se debe hacer console.log() de cada nombre pasado a mayúscula. No es una función

        