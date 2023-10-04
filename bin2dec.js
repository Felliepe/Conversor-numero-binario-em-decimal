// função para o input do valor (inputV).
// função que cria uma variável (binario) e atribui a ela o valor do id num em html convertido para número
function input(){
    binario = Number(document.getElementById("num").value);
    return binario
};
// função para converter o valor binário em decimal
// função bin2dec tem como parâmetro bin
function bin2dec(bin){
    // função para retornar o resultado de parseInt do bin na base 2 transformando em string na base 10
    // basicamente o js converte binários em decimais dessa forma
    return parseInt(bin,2).toString(10)
};
//o botão de converter no html chama a função abrir() que executa a função inputV() e depois trabalha o DOM com os dados determinados abaixo
function convert(){
    let bina = input();
    document.getElementById("res").innerText=bin2dec(bina)
}