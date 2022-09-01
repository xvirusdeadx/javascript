const suma = prompt("numero a sumar")
let sumatoria = 0
let resultado = 0

for(let index = 1; index <= suma; index++){
    const loger = prompt("ingrese su suma: "+ index)
sumatoria = sumatoria + parseFloat(loger)
    console.log(sumatoria)
}

resultado = sumatoria  / suma

alert("el resultado es: "+ resultado)