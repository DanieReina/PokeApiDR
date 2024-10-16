const form = document.getElementById('pokemon-search-form');
const pokemonInfoDiv = document.getElementById('pokemon-info');
const pokemonImageEl = document.getElementById('pokemon-image');
const pokemonNameEl = document.getElementById('pokemon-name');
const pokemonTypesEl = document.getElementById('pokemon-types');
const pokemonDescriptionEl = document.getElementById('pokemon-description');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const pokemonName = document.getElementById('pokemon-name').value.toLowerCase();

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();

    pokemonImageEl.src = data.sprites.front_default;
    pokemonNameEl.textContent = data.name;
    pokemonTypesEl.textContent = data.types.map(type => type.type.name).join(', ');
    pokemonDescriptionEl.textContent = `This Pokémon is type ${pokemonTypesEl.textContent}.`;

    pokemonInfoDiv.classList.remove('hidden');
  } catch (error) {
    alert(`Error: ${error.message}`);
  }
});