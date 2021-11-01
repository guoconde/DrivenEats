const listaPedido = {
    pedido: '',
    pedidoPreco: 0,
    bebida: '',
    bebidaPreco: 0,
    sobremesa: '',
    sobremesaPreco: 0,

    valorTotal: 0,

    nome: '',
    endereco: '',
}

//testando

function valorTotal() {
    const soma = parseFloat((listaPedido.pedidoPreco + listaPedido.bebidaPreco + listaPedido.sobremesaPreco).toFixed(2))
    const somaBRL = soma.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    listaPedido.valorTotal = somaBRL

    return listaPedido.valorTotal
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
    valorTotal()
    document.querySelector('section').classList.remove('invisivel')
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
        selecionado.querySelector('ion-icon').classList.add('invisivel')
    }

    botao.classList.add('principal')
    botao.querySelector('ion-icon').classList.remove('invisivel')

    listaPedido.pedido = botao.querySelector('h4').innerHTML
    const preco = botao.querySelector('.preco').innerHTML.split(' ')
    listaPedido.pedidoPreco = parseFloat(preco[1].replace(',', '.'))
}

function selecionarBebida(botao) {
    const selecionado = document.querySelector('.bebida')


    if (selecionado !== null) {
        selecionado.classList.remove('bebida')
        selecionado.querySelector('ion-icon').classList.add('invisivel')
    }

    botao.classList.add('bebida')
    botao.querySelector('ion-icon').classList.remove('invisivel')

    listaPedido.bebida = botao.querySelector('h4').innerHTML
    const preco = botao.querySelector('.preco').innerHTML.split(' ')
    listaPedido.bebidaPreco = parseFloat(preco[1].replace(',', '.'))
}

function selecionarSobremesa(botao) {
    const selecionado = document.querySelector('.sobremesa')

    if (selecionado !== null) {
        selecionado.classList.remove('sobremesa')
        selecionado.querySelector('ion-icon').classList.add('invisivel')
    }

    botao.classList.add('sobremesa')
    botao.querySelector('ion-icon').classList.remove('invisivel')

    listaPedido.sobremesa = botao.querySelector('h4').innerHTML
    const preco = botao.querySelector('.preco').innerHTML.split(' ')
    listaPedido.sobremesaPreco = parseFloat(preco[1].replace(',', '.'))
}

function pegarDados() {

    document.querySelector('.dadosEntrega').classList.add('invisivel')
    document.querySelector('.confirmar').classList.remove('invisivel')

    document.querySelector('.nomePrato').innerHTML = listaPedido.pedido
    document.querySelector('.precoPrato').innerHTML = listaPedido.pedidoPreco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    document.querySelector('.nomeBebida').innerHTML = listaPedido.bebida
    document.querySelector('.precoBebida').innerHTML = listaPedido.bebidaPreco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    document.querySelector('.nomeSobremesa').innerHTML = listaPedido.sobremesa
    document.querySelector('.precoSobremesa').innerHTML = listaPedido.sobremesaPreco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    document.querySelector('.totalValor').innerHTML = listaPedido.valorTotal

    document.querySelector('section div:last-child').classList.add('confirmar')

    const nome = document.querySelector('.pegarNome')
    listaPedido.nome = nome.value

    const endereco = document.querySelector('.pegarEndereco')
    listaPedido.endereco = endereco.value

    document.querySelector('section div .nomeDiv .nome').innerHTML = listaPedido.nome

    document.querySelector('section div .enderecoDiv .endereco').innerHTML = listaPedido.endereco
}

function cancelar() {
    document.querySelector('section').classList.add('invisivel')
    document.querySelector('section div').classList.add('dadosEntrega')
    document.querySelector('section div').classList.remove('invisivel')
    document.querySelector('section div:last-child').classList.add('invisivel')
}

function finalizar() {

    if (listaPedido.nome !== '' && listaPedido.endereco !== '') {
        let mensagem = `Olá, gostaria de fazer o pedido:
- Prato: ${listaPedido.pedido}
- Bebida: ${listaPedido.bebida}
- Sobremesa: ${listaPedido.sobremesa}
Total: ${listaPedido.valorTotal}
Nome: ${listaPedido.nome}
Endereço: ${listaPedido.endereco}
    `
        mensagem = encodeURIComponent(mensagem);
        let whatsapp = "https://wa.me/5562986514351" + "?text=" + mensagem;
        window.open(whatsapp, '_blank');

        document.querySelector('.preparando').classList.remove('invisivel')
    } else {
        alert('Favor preencher todos os dados de entrega!')
    }
}