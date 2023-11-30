function adicionar() {
    //recuperar valores: nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0]; // pega o que esta antes do hifem
    let valorUnitario = produto.split('R$')[1]; //pega o que esta depois do R$
    let quantidade = document.getElementById('quantidade');

    let preco = quantidade.value * valorUnitario


    //calcular o preço, o nosso subtotal
    //adicionar no carrinho
    //atualizar o valor total
}

function limpar() {

}