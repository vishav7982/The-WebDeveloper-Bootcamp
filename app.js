
// link for github repo of pokemons 
//https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/1.png
const h1 = document.querySelector('h1')
h1.style.textAlign ='center'
const container = document.querySelector('#container');
const baseUrl = 'https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/'
for(let i =1;i<=150;i++)
{
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon')
    const label = document.createElement('label');
    label.innerText = `${i}`;
    const newImg = document.createElement('img');
    newImg.src = baseUrl + i + '.png';
    pokemon.appendChild(newImg);
    pokemon.appendChild(label);
    container.appendChild(pokemon);
}
