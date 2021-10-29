const listaPedido = {
    pedido: '',
    bebida: '',
    sobremesa: '',
}

function pratoPrincipal(pedidoRecebido) {

    listaPedido.pedido = pedidoRecebido

    fazerPedido()
    selecionarPrincipal(pedidoRecebido)
}

function bebidas(bebidaRecebida) {

    listaPedido.bebida = bebidaRecebida

    fazerPedido()
    selecionarBebida(bebidaRecebida)
}

function sobremesa(sobremesaRecebida) {

    listaPedido.sobremesa = sobremesaRecebida

    fazerPedido()
    selecionarSobremesa(sobremesaRecebida)
}

function pedidoFinal() {
    console.log(listaPedido.pedido, listaPedido.bebida, listaPedido.sobremesa)
}

function fazerPedido() {
    if (listaPedido.pedido != '' && listaPedido.bebida != '' && listaPedido.sobremesa != '') {

        document.querySelector('footer button').classList.remove('invisivel')
    } else {
        document.querySelector('footer button').classList.add('invisivel')
    }
}

function selecionarPrincipal(botao) {
    const selecionado = document.querySelector('.principal')

    if (selecionado !== null) {
        selecionado.classList.remove('principal')
    }

    botao.classList.add('principal')
}

function colocaCheck(ion) {
    const check = document.querySelector('.pedido .invisivel')

    if (check === null) {
        check.classList.add('invisivel')
    }

    ion.classList.remove('invisivel')
}

// function selecionarPrincipal(elemento) {

//     function removeUm() {
//         document.querySelector(`.escolherPrincipal button:first-child`).classList.remove('principal')
//         document.querySelector(`.escolherPrincipal button:first-child .check`).classList.add('invisivel')
//     }

//     function removeDois() {
//         document.querySelector(`.escolherPrincipal button:nth-child(2)`).classList.remove('principal')
//         document.querySelector(`.escolherPrincipal button:nth-child(2) .check`).classList.add('invisivel')
//     }

//     function removeTres() {
//         document.querySelector(`.escolherPrincipal button:nth-child(3)`).classList.remove('principal')
//         document.querySelector(`.escolherPrincipal button:nth-child(3) .check`).classList.add('invisivel')
//     }

//     if (elemento == 'principalUm') {

//         document.querySelector(`.escolherPrincipal button:first-child`).classList.add('principal')
//         document.querySelector(`.escolherPrincipal button:first-child .check`).classList.remove('invisivel')

//         removeDois()
//         removeTres()

//     } else if (elemento == 'principalDois') {

//         document.querySelector(`.escolherPrincipal button:nth-child(2)`).classList.add('principal')
//         document.querySelector(`.escolherPrincipal button:nth-child(2) .check`).classList.remove('invisivel')

//         removeUm()
//         removeTres()

//     } else if (elemento == 'principalTres') {

//         document.querySelector(`.escolherPrincipal button:nth-child(3)`).classList.add('principal')
//         document.querySelector(`.escolherPrincipal button:nth-child(3) .check`).classList.remove('invisivel')

//         removeUm()
//         removeDois()

//     }
// }

// function selecionarBebida(elemento) {

//     function removeUm() {
//         document.querySelector(`.escolherBebida button:first-child`).classList.remove('principal')
//         document.querySelector(`.escolherBebida button:first-child .check`).classList.add('invisivel')
//     }

//     function removeDois() {
//         document.querySelector(`.escolherBebida button:nth-child(2)`).classList.remove('principal')
//         document.querySelector(`.escolherBebida button:nth-child(2) .check`).classList.add('invisivel')
//     }

//     function removeTres() {
//         document.querySelector(`.escolherBebida button:nth-child(3)`).classList.remove('principal')
//         document.querySelector(`.escolherBebida button:nth-child(3) .check`).classList.add('invisivel')
//     }

//     if (elemento == 'bebidaUm') {

//         document.querySelector(`.escolherBebida button:first-child`).classList.add('principal')
//         document.querySelector(`.escolherBebida button:first-child .check`).classList.remove('invisivel')

//         removeDois()
//         removeTres()

//     } else if (elemento == 'bebidaDois') {

//         document.querySelector(`.escolherBebida button:nth-child(2)`).classList.add('principal')
//         document.querySelector(`.escolherBebida button:nth-child(2) .check`).classList.remove('invisivel')

//         removeUm()
//         removeTres()

//     } else {

//         document.querySelector(`.escolherBebida button:nth-child(3)`).classList.add('principal')
//         document.querySelector(`.escolherBebida button:nth-child(3) .check`).classList.remove('invisivel')

//         removeUm()
//         removeDois()

//     }
// }

// function selecionarSobremesa(elemento) {

//     function removeUm() {
//         document.querySelector(`.escolherSobremesa button:first-child`).classList.remove('principal')
//         document.querySelector(`.escolherSobremesa button:first-child .check`).classList.add('invisivel')
//     }

//     function removeDois() {
//         document.querySelector(`.escolherSobremesa button:nth-child(2)`).classList.remove('principal')
//         document.querySelector(`.escolherSobremesa button:nth-child(2) .check`).classList.add('invisivel')
//     }

//     function removeTres() {
//         document.querySelector(`.escolherSobremesa button:nth-child(3)`).classList.remove('principal')
//         document.querySelector(`.escolherSobremesa button:nth-child(3) .check`).classList.add('invisivel')
//     }

//     if (elemento == 'sobremesaUm') {

//         document.querySelector(`.escolherSobremesa button:first-child`).classList.add('principal')
//         document.querySelector(`.escolherSobremesa button:first-child .check`).classList.remove('invisivel')

//         removeDois()
//         removeTres()

//     } else if (elemento == 'sobremesaDois') {

//         document.querySelector(`.escolherSobremesa button:nth-child(2)`).classList.add('principal')
//         document.querySelector(`.escolherSobremesa button:nth-child(2) .check`).classList.remove('invisivel')

//         removeUm()
//         removeTres()

//     } else {

//         document.querySelector(`.escolherSobremesa button:nth-child(3)`).classList.add('principal')
//         document.querySelector(`.escolherSobremesa button:nth-child(3) .check`).classList.remove('invisivel')

//         removeUm()
//         removeDois()

//     }
// }