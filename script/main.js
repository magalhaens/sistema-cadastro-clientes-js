// Verifico se o arquivo JavaScript está conectado ao arquivo HTML
console.log('Conectado ao index.html')

// Crio as constantes do arquivo
const listaClientes = [];
const botao = document.querySelector('#cadButton');
const lista = document.querySelector('#lista')


// Declaro a função registrarClientes()
function registrarCliente(){

    // Crio a variável input que recebe a id #cadInput do input de texto do arquivo HTML
    let input = document.querySelector('#cadInput');

    // Crio a variável nomeCliente que recebe o valor da variável input
    let nomeCliente = input.value.trim();

    // Declaro uma condição onde caso o input esteja em branco, nada seja adicionado, apenas apareça um alerta na conta
    if (nomeCliente === ''){
        return window.alert('Espaço em branco')
    } 

    // Adiciono ao array o conteúdo da variável nomeCliente
    listaClientes.push(nomeCliente);

    // Crio a variável paragrafo que recebe a criação do elemento <p>
    let paragrafo = document.createElement('p');

    // Adiciono a variável paragrafo o conteúdo de texto que recebe, por sua vez, o nomeCliente
    paragrafo.textContent = nomeCliente;

    // Chamo a constante lista e adiciono paragrafo como seu elemento filho
    lista.appendChild(paragrafo);

    // Cada vez que um nome é adicionado, peço para o console chamar o array com os novos conteúdos que foram adicionados
    console.log(listaClientes)

    // No final do processo, retorno o valor da variável input para '' e mantenho o foco no input.
    input.value = "";
    input.focus();
}

// Chamo a variável botao e adiciono um EventListener para quando clicar no botão, ele chamar a função registrarCliente();
botao.addEventListener("click", registrarCliente)
