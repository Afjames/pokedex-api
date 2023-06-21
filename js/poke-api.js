const limit = 10
const offset = 0
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`



const pokeapi = {}

function convertPokeApiDetailToPokemon(pokeDetail){
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.order
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)

    //primeira posição array
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon

}

pokeapi.getPokemonDetail = (pokemon) => {
    return fetch (pokemon.url)
    .then((response) => response.json())
    .then(convertPokeApiDetailToPokemon)
        
    
}

pokeapi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return fetch(url)
        //then: quando a proproidade fetch retornar seu resultado o metódo then vai executar a função.
        //arrow function: função sem contexto e  anônima. Síntaxe resumida existe um return implicito dentro da função.
        //converte a resposta da promessa(fetch) em um arquivo json.             
        .then((response) => response.json()) 
        
        //depois de convertido em json, filtra o results que é a lista de pokemons
        .then((jsonBody) => jsonBody.results)

        //transforma o results em uma nova lista (map) e a promessa pokemon.url em json. É a lista de promossa dos detalhes dos pokemons em formato json
        .then((pokemons) => pokemons.map((pokeapi.getPokemonDetail)))
              
        //aguarda o resultado promessa Promise.all   
        .then((detailRequest) => Promise.all(detailRequest) )

        .then((pokemonsDetails) => pokemonsDetails ) 

        //catch: manipulação o fracasso da solicição assíncrona (fetch)
        .catch((error) => console.error(error))
    }

//O método Promise.all(iterable) retorna uma única Promise que resolve quando todas as promises no argumento iterável forem resolvidas ou quando o iterável passado como argumento não contém promises. É rejeitado com o motivo da primeira promise que foi rejeitada.
