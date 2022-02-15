//criando uma referencia aos elementos da pagina
function calcularNota() {
    let inValorSaque = document.getElementById('inValorSaque');
    let valor = +inValorSaque.value;
    let nota100 = Math.floor(valor / 100)
    if (nota100 > 0) {
        document.querySelector('#nota100').textContent = `Notas de R$ 100: ${nota100}`
    }
    let nota50 = Math.floor((valor % 100) / 50)
    if (nota50 > 0) {
        document.querySelector('#nota50').textContent = `Notas de R$ 50: ${nota50}`
    }
    let nota10 = Math.floor((valor % 50) / 10)
    if (nota10 > 0) {
        document.querySelector('#nota10').textContent = `Notas de R$ 10: ${nota10}`
    }
    let nota5 = Math.floor((valor % 10) / 5)
    if (nota5 > 0) {
        document.querySelector('#nota5').textContent = `Notas de R$ 5: ${nota5}`
    }
    let nota1 = Math.floor((valor % 5) / 1)
    if (nota1 > 0) {
        document.querySelector('#nota1').textContent = `Notas de R$ 1: ${nota1}`
    }

    //se não preencher ou NAN 

    if(valor == 0 || isNaN(valor)){
        alert("Valor Invalido")
        inValorSaque.focus();
        return;
    }


}

let btnExibir = document.getElementById('btExibir');
btnExibir.addEventListener('click', calcularNota);