let personas=[]

function capturaDatos() {
    console.log("captura de datos....")
    
    let persona={
        nombre: document.getElementById('nombre').value,
        correo:document.getElementById('correo').value,
        telefono:document.getElementById('telefono').value,
        fechaNacimiento:document.getElementById('fecha_nacimiento').value,
        ciudad:document.getElementById('ciudad').value
    }
    personas.push(persona)
    console.log(personas)
    mostrarTarjeta()
    
}
function mostrarTarjeta() {
    //definir mis variables
    // let imagen=document.createElement('img')
    // imagen.src='https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png'
    // let card=document.createElement('div')
    // card.className='tarjeta'
    // let nombre=document.createElement('p')
    // nombre.textContent=persona.nombre
    // let correo=document.createElement('p')
    // correo.textContent=persona.correo
    // let telefono=document.createElement('p')
    // telefono.textContent=persona.telefono
    // let fechaNacimiento=document.createElement('p')
    // fechaNacimiento.textContent=persona.fechaNacimiento
    // let ciudad=document.createElement('p')
    // ciudad.textContent=persona.ciudad
    // // agregar a la tarjeta con append 
    // card.append(imagen,nombre,correo,telefono,fechaNacimiento,ciudad)
    // card.classList.add('tarjeta')
    // document.getElementById('vacio').appendChild(card) 
    document.getElementById('cards').innerHTML="" // reemplazar el codigo limpiar
    personas.map(persona=>{
        console.log(persona)
        let card=document.createElement('section')
        card.className='tarjeta'
        let nombre=document.createElement('p')
        nombre.textContent=persona.nombre      
        let correo=document.createElement('p')
        correo.textContent=persona.correo
        let telefono=document.createElement('p')
        telefono.textContent=persona.telefono
        let fechaNacimiento=document.createElement('p')
        fechaNacimiento.textContent=persona.fechaNacimiento
        let ciudad=document.createElement('p')
        ciudad.textContent=persona.ciudad
        card.append(nombre,correo,telefono,fechaNacimiento,ciudad)
        document.getElementById('cards').append(card)
        card.classList.add('tarjeta')

    })  

    

}