

const pokeApi = {}

function convertDetailToPokemon(pokeDetail){
    const pokemon = new Pokemon()

    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name
    
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types
    pokemon.types = types
    pokemon.type = type
    
    pokemon.photo = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeDetail.id}.png`
    
    

    pokemon.height = pokeDetail.height
    pokemon.weight = pokeDetail.weight
    
    const abilities = pokeDetail.abilities.map((abilitiesSlot) => abilitiesSlot.ability.name)
    pokemon.abilities = abilities

    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
    .then((response) => response.json())
    .then(convertDetailToPokemon)
}

pokeApi.getPokemon = (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    return  fetch(url)
                .then((response) => response.json())
                .then((convertDetailToPokemon))
}

pokeApi.getPokemons = (offset = 0, limit = 24) => {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
  
    return  fetch(url)
                .then((response) => response.json())
                .then((jsonBody) => jsonBody.results)
                .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
                .then((detailRequests) => Promise.all(detailRequests))
                .then((pokemonsDetails) => pokemonsDetails)
}

