let input = document.querySelector(‘input[name=tarefa]’);
let btn = document.querySelector(‘#botao’);
let lista = document.querySelector(‘#lista’);
let card = document.querySelector(‘.card’);
let tarefas = JSON.parse(localStorage.getItem(‘tarefas’)) || [];


function renderizarTarefas(){
    lista.innerHTML = ‘’;
    for(tarefa of tarefas){
    let itemLista = document.createElement(‘li’);
    itemLista.setAttribute(‘class’, ‘list-group-item list-grouptem-action’);
    itemLista.onclick = function(){
    deletarTarefa(this);
    }
    let itemTexto = document.createTextNode(tarefa);
    itemLista.appendChild(itemTexto);
    lista.appendChild(itemLista);
    76
    }
    }
renderizarTarefas();
    

btn.onclick = function(){
    let novaTarefa = input.value;
    if(novaTarefa !== “”){
    tarefas.push(novaTarefa);
    renderizarTarefas();
    input.value = ‘’;
    removerSpans();
    salvarDadosNoStorage();
    }else{
    removerSpans();
    77
    let span = document.createElement(‘span’);
    span.setAttribute(‘class’, ‘alert alert-warning’);
    let msg = document.createTextNode(‘Você precisa digitar a 
    tarefa que deseja registrar!’);
    span.appendChild(msg);
    card.appendChild(span);
    }
    }
    function removerSpans(){
    let spans = document.querySelectorAll(‘span’);
    for(let i = 0; i < spans.length; i++){
    card.removeChild(spans[i]);
    }
    }
    function deletarTarefa(tar){
        tarefas.splice(tarefas.indexOf(tar.textContent), 1);
        renderizarTarefas();
        78
        salvarDadosNoStorage();
        }
