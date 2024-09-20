const boton = document.querySelector(".boton")//traido los elementos de html
const mensaje = document.querySelector(".mensaje")

function operacion() {
   return new Promise((resolve,reject) =>{   //hago una funcion con un setTimeout y un math.random donde tiene dos posibilades que te muestre el 
        setTimeout(()=>{                     //resolve si esta todo bien o el reject si hay un error (no me devuelve nunca el error y no se porque)
        if (Math.random() > 0.5){
            resolve("Datos cargados exitosamente") 
        } else{

            reject("Error al cargar los datos");
        }
        },3000)
    
    })
}

boton.addEventListener("click",function(){  //despues hice un evento para que cuando hagas click en el boton se muestren los resultados
    mensaje.textContent =""

    operacion()//llamo a la funcion que va a devolver la pormesa 
        .then(resultado =>mensaje.textContent = resultado)
        .catch(error => mensaje.textContent = error)

})