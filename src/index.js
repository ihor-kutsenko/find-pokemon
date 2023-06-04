import './css/style.css';
import pokemonCardTpl from './helpers/pokemon-card'

const refs = {
  cardContainer: document.querySelector('.js-card-container'),
  searchForm: document.querySelector('.js-search-form'),
}

refs.searchForm.addEventListener('submit', onSearch);





function onSearch(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const inputSearch = form.elements.query.value;

fetchPokemon(inputSearch)
  .then(renderPokemonCard)
  .catch(onFetchErorr)
  .finally(() => form.reset());
}
  


function fetchPokemon(pokemonId) {

  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
 return fetch(url)
  .then(response => {
    return response.json();
  });
}



function renderPokemonCard(pokemon) {
  const markup = pokemonCardTpl(pokemon);
  refs.cardContainer.innerHTML = markup;
}

function onFetchErorr(erorr) {
  alert('Erorr. Do not find pokemon! Enter the number')
}

// ===============================================

// const url = 'https://newsapi.org/v2/everything?q=cars';
// const options = {
//   headers: {
//     Authorization: '4330ebfabc654a6992c2aa792f3173a3',
//   },
// };

// fetch(url, options)
//   .then(r => r.json())
//   .then(console.log);