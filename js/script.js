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


let firstOper
function result() {
      
    firstOper = document.getElementById('barra').value
    if(firstOper.includes('-')){
        let secondOper = firstOper.split('-') 
        barra = +secondOper[0]- +secondOper[1] 
        document.getElementById('barra').value = barra
    
    }else if (firstOper.includes('+')){
        let secondOper = firstOper.split('+') 
        barra = +secondOper[0]+ +secondOper[1] 
        document.getElementById('barra').value = barra

    }else if (firstOper.includes('x')) {
        let secondOper = firstOper.split('x')
        barra = +secondOper[0] * +secondOper[1]
        document.getElementById('barra').value = barra
    }
    else if (firstOper.includes('/')) {
        let secondOper = firstOper.split('/')
        barra = +secondOper[0] / +secondOper[1]
        document.getElementById('barra').value = barra
    } 
   

}


function radiceQuadrata () {
    
    let radiceQuadrata = +(document.getElementById('barra').value);
    document.getElementById('barra').value = Math.sqrt(radiceQuadrata)
}

function radiceCubica () {
    let radiceCubica = +(document.getElementById('barra').value);
    document.getElementById('barra').value = Math.cbrt(radiceCubica)

}

function coseno () {
    let coseno = +(document.getElementById('barra').value);
    document.getElementById('barra').value = Math.cos(coseno)
}

function seno () {
    let seno = +(document.getElementById('barra').value);
    document.getElementById('barra').value = Math.sin(seno)
}

function potenzaDue () {
    let potenzaDue = +(document.getElementById('barra').value);
    document.getElementById('barra').value = Math.pow(potenzaDue, 2)

}

function potenzaTre () {
    let potenzaTre = +(document.getElementById('barra').value);
    document.getElementById('barra').value = Math.pow(potenzaTre, 3)

}
