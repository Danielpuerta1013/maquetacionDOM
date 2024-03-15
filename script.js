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

let inputsT=document.querySelectorAll('#formulario input')
let inputs=[...inputsT]
inputs.forEach(input => {
   
   input.addEventListener('keyup',validarFormulario)
//    input.addEventListener('click',validarFormulario)
});


let expresionesRegulares={
    nombre:/^\p{L}+$/u,
    correo:/\b([\w\.-]+)@([\w\-]+)(\.\w{2,4})(\.\w{2,4})?\b/g,
    telefono:/^\d{10}$/,
    fecha_naciemiento:/^\d{4}-\d{2}-\d{2}$/,
    ciudad:/^\p{L}+$/u    
}
function validarFormulario(e) {    
    switch (e.target.name) {
        case "nombre":
            if (expresionesRegulares.nombre.test(e.target.value)) {
                document.getElementById('mensaje_nombre').textContent=""
                document.getElementById('mensaje_nombre').classList.remove('campoIncorrecto')

            }else{
                document.getElementById('mensaje_nombre').textContent="campo invalido"
                document.getElementById('mensaje_nombre').classList.add('campoIncorrecto')

            }
            break;
        case "correo":
            if (expresionesRegulares.correo.test(e.target.value)) {
                document.getElementById('mensajeEmail').textContent=""
                document.getElementById('mensajeEmail').classList.remove('campoIncorrecto')
            }else{
                document.getElementById('mensajeEmail').textContent="campo invalido"
                document.getElementById('mensajeEmail').classList.add('campoIncorrecto')
            }

            break
        case "telefono":
            if (expresionesRegulares.telefono.test(e.target.value)) {
                document.getElementById('mensajeTelefono').textContent=""
                document.getElementById('mensajeTelefono').classList.remove('campoIncorrecto')

            }else{
                document.getElementById('mensajeTelefono').textContent="campo invalido"
                document.getElementById('mensajeTelefono').classList.add('campoIncorrecto')
            }

            break
        case "fecha_naciemiento":
            if (expresionesRegulares.fecha_naciemiento.test(e.target.value)) {
                document.getElementById('mensajeFecha').textContent=""
                document.getElementById('mensajeFecha').classList.remove('campoIncorrecto')

            }else{
                document.getElementById('mensajeFecha').textContent="campo invalido"
                document.getElementById('mensajeFecha').classList.add('campoIncorrecto')
            }

            break
        case "ciudad":
            if (expresionesRegulares.ciudad.test(e.target.value)) {
                document.getElementById('mensajeCiudad').textContent=""
                document.getElementById('mensajeCiudad').classList.remove('campoIncorrecto')

            }else{
                document.getElementById('mensajeCiudad').textContent="campo invalido"
                document.getElementById('mensajeCiudad').classList.add('campoIncorrecto')
            }


            break          
    
        default:
            break;
    }
}

