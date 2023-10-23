    // VARIABLES GLOBALES
    let campoDeEntrada = document.getElementById("txtMontoCalculo");
    let campoPorcentaje = document.getElementById("txtPorcentajeInteres");
    let campoMeses = document.getElementById("txtCantidadMeses"); 
    let monedaValue = document.getElementById("cboSeleccionMoneda");
    let monedaSeleccionada = monedaValue.value
    const monedas = ["ARS","USD","EUR"];
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
        
        
        alert("En el mes "+(index+1)+ ", Tendras " + calculoTotal * (index+1) + " " + monedaSeleccionada)

    }
    
    
   alert("A el final de los meses cumplidos tu saldo total será de: " + calculoFin+ " " + monedaSeleccionada
   + ", El dinero invertido sin los intereses fue de: " + montoInvertido +" " + monedaSeleccionada
   + ", Tu ganancia total fue de: " + dineroGanado + " "+ monedaSeleccionada + ""
   )

    }

    function Moneda(){  
        
        
        for (let index = 0; index < monedas.length; index++) {
            
            if (monedaValue.value == monedas[index]){
                monedaSeleccionada = monedas[index]
            }
                       
        }
        
    }
    