// ARRAYS 

// 1
console.log('\n1.')

const frutas = ['manzana', 'banana', 'pera']

frutas.push('ananá')
console.log(frutas)
frutas.pop()
console.log(frutas)

// 2
console.log('\n2.')

const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log(matriz[1][1])

// 3
console.log('\n3.')

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}

// 4
console.log('\n4.')

function elevarAlCuadrado(array) {
    return array.map(numero => numero ** 2)
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(elevarAlCuadrado(numeros))

// 5
console.log('\n5.')

function filtrarMayoresDe(array, valor) {
    return array.filter(numero => numero > valor)
}

console.log(filtrarMayoresDe(numeros, 4))

// 6
console.log('\n6.')

function sumarElementos(array) {
    return array.reduce((total, numero) => total + numero)
}

console.log(sumarElementos(numeros))

// 7
console.log('\n7.')

console.log(numeros.some(numero => numero > 10))

// 8
console.log('\n8.')

console.log(numeros.every(numero => numero >= 0))

// 9
console.log('\n9.')

const personas = [
    { nombre: 'nombre', edad: 10 },
    { nombre: 'nombre', edad: 123 },
    { nombre: 'nombre', edad: 23 },
    { nombre: 'nombre', edad: 14 },
    { nombre: 'nombre', edad: 100 },
    { nombre: 'nombre', edad: 1 }
]

console.log(personas.find(({ edad }) => edad >= 30))

// 10
console.log('\n10.')

const palabras = [
    'alfajor',
    'taza',
    'monitor',
    'mouse',
    'joystick',
    'pendrive'
]

console.log(palabras.sort())



// FUNCIONES

// 1
console.log('\n1.')

function suma(a, b) {
    return a + b
}

console.log(suma(1, 2))
console.log(suma(3, 2))
console.log(suma(10, 123))
console.log(suma(182381283, 1408182))

// 2
console.log('\n2.')

function multiplicar(a, b) {
    return a * b
}

console.log(multiplicar(1, 2))
console.log(multiplicar(3, 2))
console.log(multiplicar(10, 123))
console.log(multiplicar(182381283, 1408182))

// 3
console.log('\n3.')

function saludar(nombre = 'invitado') {
    return `Hola ${nombre}`
}

console.log(saludar())
console.log(saludar('Maximiliano'))

// 4
console.log('\n4.')

function crearPersona(nombre, edad) {
    return { nombre, edad }
}

const persona = crearPersona('Maxi', 21)
console.log(persona)

// 5
console.log('\n5.')

function actualizarEdad(persona, nuevaEdad) {
    persona.edad = nuevaEdad
    return persona
}

console.log(actualizarEdad(persona, 77))

// 6
console.log('\n6.')

function factorial(numero) {
    if (numero === 0) return 1
    return numero * factorial(numero - 1)
}

console.log(factorial(5))

// 7
console.log('\n7.')

function despedir() {
    function adios() {
        return 'chau'
    }

    return adios()
}

console.log(despedir())

// 8
console.log('\n8.')

function procesarArray(array = [], funcion = () => {}) {
    array.forEach(elemento => funcion(elemento))
}

const numeros1 = [1, 2, 3, 4, 5]

function multiplicarPor2(numero) {
    console.log(numero * 2)
}

procesarArray(numeros1, multiplicarPor2)

// 9
console.log('\n9.')

function crearMultiplicador(x) {
    return function(numero) {
        return numero * x
    }
}

console.log(crearMultiplicador(2)(10))

// 10
console.log('\n10.')

const sumarAnonima = function (a, b) {
    return a + b
}

console.log(sumarAnonima(1, 2))



// OBJETOS

// 1
console.log('\n1.')

const libro = {
    titulo: 'Título',
    autor: 'Autor',
    anioDePublicacion: 2024,
    descripcion: function() {
        return `
            Título: ${this.titulo}
            Autor: ${this.autor}
        `
    }
}

console.log(libro)

// 2
console.log('\n2.')

const estudiante = {
    nombre: 'Alquien',
    edad: 777,
    direccion: {
        calle: 'Una calle',
        ciudad: 'Una ciudad',
        pais: 'Un país'
    }
}

console.log(estudiante)

// 3
console.log('\n3.')

console.log(libro.descripcion())

// 4
const producto = {
    nombre: 'Producto',
    precio: 1571234,
    disponible: true
}

console.log('\n4.')

for (const key in producto) {
    console.log(key, producto[key])
}

// 5
console.log('\n5.')

producto.precio = 999999
console.log(producto)

// 6
console.log('\n6.')

function tienePropiedad(object, key) {
    return key in object
}

console.log(tienePropiedad(producto, 'precio'))
console.log(tienePropiedad(producto, 'cantidad'))

// 7
console.log('\n7.')

console.log(producto)
delete producto.disponible
console.log(producto)

// 8
console.log('\n8.')

const persona1 = { nombre: 'Persona1', algo1: 'algo1' }
const persona2 = { nombre: 'Persona2', algo2: 'algo2' }

console.log(Object.assign(persona1, persona2))

// 9
console.log('\n9.')

const objeto = { algo: 'algo' }
const copia = JSON.parse(JSON.stringify(objeto))

objeto.algo = 'otra cosa'

console.log('Original:', objeto)
console.log('Copia:', copia)

// 10
console.log('\n10.')

libro.getAnioDePublicacion = function() {
    return this.anioDePublicacion
}

libro.setAnioDePublicacion = function(anio) {
    this.anioDePublicacion = anio
}

console.log('original:', libro.anioDePublicacion)

libro.setAnioDePublicacion(1234)
console.log('nuevo:', libro.getAnioDePublicacion())


// USUAIOS
(async () => {
    async function obtenerUsuarios() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await response.json()

        return users
    }

    // 1
    console.log('\n1.')

    const users = await obtenerUsuarios()
    console.log(users)

    // 2
    console.log('\n2.')

    function imprimirNombresDeUsuarios(users = []) {
        users.forEach(({ name }) => console.log(name))
    }

    imprimirNombresDeUsuarios(users)

    // 3
    console.log('\n3.')

    const predefinido = { user: 'maxi', password: 'password1234' }
    const mal = { user: 'algoquenadaquever', password: 'contraseña' }

    function autenticarUsuario({ user, password }) {
        return user === predefinido.user && password === predefinido.password
    }

    console.log(autenticarUsuario(predefinido))
    console.log(autenticarUsuario(mal))

    // 4
    console.log('\n4.')

    function mapearUsuarios(users = []) {
        return users.map(({ name, email }) => { return { name, email } })
    }

    console.log(mapearUsuarios(users))

    // 5
    console.log('\n5.')

    function validarFormulario({
        nombre,
        email,
        password
    }) {
        return nombre.length !== 0 && email.length !== 0 && password.length !== 0
    }

    console.log({ nombre: 'nombre', email: 'email', password: 'password' })
    console.log({ nombre: 'nombre', email: 'email' })

    // 6
    console.log('\n6.')

    const datos = [
        [1, 2, 3, 4, 5],
        ['martes', 'lunes', 'sábado', 'domingo', 'viernes'],
        ['a', 'b', 'a', 'c', 'z'],
        ['"', '¿', '?', '!', '¡'],
    ]

    function obtenerPagina(array, pagina) {
        if (pagina - 1 > array.length || pagina < 1) throw new Error('La página está mal')
        return array[pagina - 1]
    }

    console.log(obtenerPagina(datos, 1))

    // 7
    console.log('\n7.')

    async function enviarDatos(data) {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            data
        })

        console.log(await response.json())
    }

    await enviarDatos({ algo: 'algo' })

    // 8
    console.log('\n8.')

    function buscarUsuarioPorEmail(users = [], email) {
        const user = users.find(user => user.email === email)
        if (user === undefined) throw new Error('usuario no encontrado')

        return user
    }

    console.log(buscarUsuarioPorEmail(users, users[8].email))

    // 9
    console.log('\n9.')

    function generarToken(user) {
        return btoa(JSON.stringify(user))
    }

    console.log(generarToken(users[1]))

    // 10
    console.log('\n10.')

    function actualizarUsuario(user, cambios = []) {
        cambios.forEach(({ campo, valor }) => {
            user[campo] = valor
        })

        return user
    }

    const cambios = [
        { campo: 'email', valor: 'asdf@asdf.com' },
        { campo: 'name', valor: 'unnombregracioso' }
    ]

    console.log(actualizarUsuario(users[7], cambios))
})()