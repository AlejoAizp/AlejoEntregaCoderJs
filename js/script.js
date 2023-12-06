    // VARIABLES GLOBALES
    let campoDeEntrada = document.getElementById("txtMontoCalculo");
    let campoPorcentaje = document.getElementById("txtPorcentajeInteres");
    let campoMeses = document.getElementById("txtCantidadMeses"); 
    let monedaValue = document.getElementById("cboSeleccionMoneda");
    let monedaSeleccionada = monedaValue.value
    const monedas = ["ARS","USD","EUR"];
    const Historial = document.getElementById("historial")
    let arry = []
    let arryHst = []   
    let valorStorage = ""
    //-------------------
    // FUNCION VALIDA CAMPOS
  function CalcularValidar() {
    if (isNaN(campoDeEntrada.value)){
        alert("El monto debe ser un numero!")
        return false;
    }
    if (campoDeEntrada.value < 10000 ){
        alert("el monto minimo debe ser de 10.000")
        return false;
    }
    if (isNaN(campoPorcentaje.value)){
        alert("El porcentaje debe ser un numero!")
        return false;
    }
    if (campoPorcentaje.value > 15){
        alert("El porcentaje maximo es de 15%")
        return false;
    }
    if (isNaN(campoMeses.value ) || campoMeses.value < 1){
        alert("El campo meses debe ser un numero valido!")
        return false;
    }
    if (campoMeses.value > 12){
        alert("El maximo es de 12 meses.")
        return false;
    }
   
    //Luego de validar, inicia el proceso del calculo.
    Calculo()

   }

 

   //Funcion calculo
   function Calculo() {
    let monto = parseInt(campoDeEntrada.value,10);
    let porcentaje = parseInt(campoPorcentaje.value,10);
    let meses = parseInt(campoMeses.value,10);

    let calculoTotal =  monto * porcentaje / 100 + monto;
    let calculoFin =  (calculoTotal * meses)
    let montoInvertido = monto * meses;
    
    let dineroGanado = calculoFin - montoInvertido;
    for (let index = 0; index < meses; index++) {
        
        let valor = calculoTotal * (index+1) + " " + monedaSeleccionada
        Alert("En el mes "+(index+1)+ ", Tendras " + calculoTotal * (index+1) + " " + monedaSeleccionada,"skyblue",1000)

        arry.push(valor)
        arryHst.push(valor)

        for (let i = 0; i < arry.length; i++) {
    
            nuevoH2 = document.createElement("h2");
            //valida si es el array numero 1, para agregar el id correspondiente, si no es el 1 solo agarra el ultimo
            // que se ingreso y le agrega +1 ya que es el que le sigue.
            if(arry.length == 1 && arryHst.length == 1){
                nuevoH2.innerHTML  = `<h2 id ="textHst${i}">${arry[i]}</h2>`;
            }else{
                nuevoH2.innerHTML  = `<h2 id ="textHst${(arryHst.length-2)+1}">${arry[i]}</h2>`;
            }
               
            
    }
    
    Historial.appendChild(nuevoH2)
   
   }

   arry.length = 0
   Alert("A el final de los meses cumplidos tu saldo total será de: " + calculoFin+ " " + monedaSeleccionada
   + ", El dinero invertido sin los intereses fue de: " + montoInvertido +" " + monedaSeleccionada
   + ", Tu ganancia total fue de: " + dineroGanado + " "+ monedaSeleccionada + "","skyblue",1000000)

   Alert("Calculo realizado!","green",4000)
    }

    //guarda la moneda seleccionada
    function Moneda(){  
               
        for (let index = 0; index < monedas.length; index++) {
            
            if (monedaValue.value == monedas[index]){
                monedaSeleccionada = monedas[index]
            }
                       
        }
        
    }

    
    const borrarHistorial = () =>{
           
    for (let i = 0; i < arryHst.length; i++) {
        let txtHst = "textHst"+i
        const textoHistorial = document.getElementById(txtHst)
        textoHistorial.remove()    
    }  
    Alert("Historial Eliminado","red",3000)
    arryHst.length = 0

      };

       //Alerta hecha con toastify
       const Alert = (texto,color,duracion) => {


            Toastify({
                text: texto,
                duration: duracion,
                newWindow: true,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "center", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: color,
                  color: "black"
                },
              }).showToast();
                       
            
       }

       const apiKey = 'a4011b8cea113c518c8f1ea5517711b0';
       const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Argentina&appid=' + apiKey;

        // Realizar una solicitud con fetch
        fetch(apiUrl)
            .then(response => {
                // Verificar si la solicitud fue exitosa (código de respuesta 200)
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                // Parsear la respuesta como JSON
                return response.json();
            })
            .then(data => {
                // Obtener la temperatura actual en grados Celsius
                const temperatureCelsius = data.main.temp - 273.15;
                // Mostrar la temperatura en la página

                Alert('Temperatura actual en Argentina: ' + temperatureCelsius.toFixed(2) + '°C',10000)
            })
            .catch(error => {
                // Manejar errores de red u otros errores
                console.error('Error:', error);
            });

          //ACA SE UTILIZA EL LOCAL STORAGE PARA GENERAR UN USUARIO/CODIGO UNICO 
       document.addEventListener('DOMContentLoaded', function() {
        if(localStorage.length == 0){
            const codigoAleatorio = Math.random().toString(36).substr(2, 8);
            localStorage.setItem('codigo', codigoAleatorio)
            valorStorage = localStorage.getItem('codigo')
          }
          valorStorage = localStorage.getItem('codigo')

        Alert("Bienvenido Usuario: "+valorStorage,"skyblue",3000)
    });
        
        