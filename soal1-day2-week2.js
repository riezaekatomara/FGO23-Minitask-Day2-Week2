async function fetchPokemonData() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
    const data = await response.json();

    const pokemonDetail = await Promise.all(
      data.results.map(async (pokemon) => {
        const detailResponse = await fetch(pokemon.url);
        const detailData = await detailResponse.json();
        return detailData;
      })
    );
    const pokemonArray = pokemonDetail.map((pokemon) => {
      return {
        name: pokemon.name,
        abilities: pokemon.abilities.map((ability) => ability.ability.name),
      };
    });
    return pokemonArray;
  } catch (error) {
    console.error("Error fetching Pokemon data:", error);
  }
}

fetchPokemonData().then((result) => {
  console.log(result);
});
