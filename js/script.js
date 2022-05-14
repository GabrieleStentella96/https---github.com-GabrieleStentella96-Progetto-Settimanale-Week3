function digit(number) {
    document.form.barra.value = document.form.barra.value+number;
}

function reset() {
    document.form.barra.value = '';
}

var operation1
function operationDivide() {
    operation1 = +(document.getElementById('barra').value);
    document.getElementById('barra').value += '/'

}

var operation2
function operationMultiple () {
    operation2 = +(document.getElementById('barra').value);
    document.getElementById('barra').value += 'x'

}

var operation3
function operationMinus () {
    operation3= +(document.getElementById('barra').value);
    document.getElementById('barra').value += '-'

}

var operation4
function operationPlus () {
    operation4 = +(document.getElementById('barra').value);
    document.getElementById('barra').value += '+'

}


let primoMembro
function result() {
      
    primoMembro = document.getElementById('barra').value
    if(primoMembro.includes('-')){
        let secondoMembro = primoMembro.split('-') 
        barra = +secondoMembro[0]- +secondoMembro[1] 
        document.getElementById('barra').value = barra
    
    }else if (primoMembro.includes('+')){
        let secondoMembro = primoMembro.split('+') 
        barra = +secondoMembro[0]+ +secondoMembro[1] 
        document.getElementById('barra').value = barra

    }else if (primoMembro.includes('x')) {
        let secondoMembro = primoMembro.split('x')
        barra = +secondoMembro[0] * +secondoMembro[1]
        document.getElementById('barra').value = barra
    }
    else if (primoMembro.includes('/')) {
        let secondoMembro = primoMembro.split('/')
        barra = +secondoMembro[0] / +secondoMembro[1]
        document.getElementById('barra').value = barra
    } 

}


function radiceQuadrata () {
    
    let radiceQuadrata = +(document.getElementById('barra').value);
    document.getElementById('barra').value = Math.sqrt(radiceQuadrata)
}

