const pokemonList=document.querySelector('#pokemonList');
const URL="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
for(let i=1;i<800;i++){
const div=document.createElement('div');
const myPokemon=document.createElement('img');
const namePokemon=document.createElement('span');
div.appendChild(myPokemon);
div.appendChild(namePokemon);
namePokemon.innerText=`#${i}`;
myPokemon.src=`${URL}${i}.png`;
div.style.display="inline-block";
myPokemon.style.display="block";
div.style.textAlign="center";
pokemonList.appendChild(div);
}