

btnBusca.addEventListener("click",function(){
  const btnBusca = document.getElementById("btnBuscar");
const inputBusca = document.getElementById("txtBusca").value.trim();

const url = "https://pokeapi.co/api/v2/pokemon/";
const ul = document.getElementById('pokemonPesquisado');
const list = document.createDocumentFragment();


fetch(url + inputBusca)
.then(response =>{
if(!response.ok){
    throw new Error (`pokemon ${pokemonNameOrNumber} nao foi possivel ser encontrado`)
}
return response.json();
})
.then(data => {
console.log(data);
   /* let pokemon = data;
   pokemon.map(function(info) {
      let li = document.createElement('li');
      let nome = document.createElement('h2');
      let abilidade = document.createElement('span');

      nome.innerHTML = `${info.nome}`;
     abilidade.innerHTML = `${info.abilidade}`;

      li.appendChild(nome);
      li.appendChild(abilidade);
      list.appendChild(li); */
  })
})

