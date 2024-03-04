const btnBusca = document.getElementById("btnBuscar");
const inputBusca = document.getElementById("txtBusca").value.trim();

addEventListener.btnBusca("click",function(){
const url = "https://pokeapi.co/api/v2/pokemon/";
fetch(url + inputBusca)
.then(response =>{
if(!response.ok){
    throw new Error (`pokemon ${pokemonNameOrNumber} nao foi possivel ser encontrado`)
}
return response.json();
})
.then(data => {
    // Faça algo com os dados retornados pela API
    console.log(data);
  })
  .catch(error => {
    console.error('Houve um problema com a sua requisição fetch:', error);
  });

}

)