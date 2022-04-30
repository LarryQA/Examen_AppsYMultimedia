function calcularSalario(){
let valor = document.getElementById("salario").value


let bruto = document.getElementById("bruto")
bruto.value = valor

let inss = document.getElementById("inss")
inss.value = bruto * 0.07

let deducciones = document.getElementById("deducciones")
deducciones.value = bruto - inss

let ir = document.getElementById("ir")
ir.value = calculoIr(valor)

let salarioNeto  = document.getElementById("neto")
salarioNeto.value = deducciones - ir

}

function calculoIr(valor){

    let proyeccion = valor * 12
    let inssLaboral = proyeccion * 0.07
    let base = proyeccion - inssLaboral
    let ir = 0

    if (base < 100000){
        ir = 0
    }

    if (base >= 100000.01 && base <= 200000){
        ir = ((base - 100000) * 0.15)/12

    }

    if (base >= 200000.01 && base <= 350000){
        ir = (((base - 200000) * 0.20) + 15000)/12
    }

    if(base >= 350000.01 && base <= 500000){
        ir = (((base - 350000) * 0.25) + 45000)/12
    }

    if(base >= 500000){
        ir = (((base - 500000) * 0.30) + 82000)/12
    }

    return ir;

}