const pokemonCardTpl = (pokemon) => `
  <div class="card">
    <div class="card-img-top">
      <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
    </div>
    <div class="card-body">
      <h2 class="card-title">Name: ${pokemon.name}</h2>
      <p class="card-text">Weight: ${pokemon.weight}</p>
      <p class="card-text">Height: ${pokemon.height}</p>

      <p class="card-text"><b>Abilities</b></p>
      <ul class="list-group">
        ${pokemon.abilities.map(ability => `<li class="list-group-item">${ability.ability.name}</li>`).join('')}
      </ul>
    </div>
  </div>
`;

export default pokemonCardTpl;
