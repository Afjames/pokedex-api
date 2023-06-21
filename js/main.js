
//window acesso ao browser, a janela. Document é o document atua da janela. 
const loadMoreButton = document.getElementById('LoadMore')
const pokemonList = document.getElementById('pokemonList')
const page_limit = 10
let page_offset = 0




    function loadPokemonItens(page_offset, page_limit) {        

        //recebe a lista de pokemons do then anterior
        pokeapi.getPokemons(page_offset, page_limit).then((pokemons = []) => {

        const newHTML = pokemons.map((pokemon) => 
                `<li class=" pokemon ${pokemon.type}"  >
                        <span class="number">${pokemon.number}</span>
                        <span class="name">${pokemon.name}</span>           
                        <div class="detail">
            
                        <ol class="types">            
                            ${pokemon.types.map((type) => `<li class="type ${type} ">${pokemon.type}</li>`).join('')}
                        </ol>
            
                    <img src=${pokemon.photo} alt=${pokemon.name}> 
                </div>
            </li>`
         ).join('')

         //O método join() junta todos os elementos de um array (ou um array-like object) em uma string e retorna esta string.


        pokemonList.innerHTML += newHTML
        //O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.

        //transforma o resultado em string.

        //O método join() junta todos os elementos de um array (ou um array-like object) em uma string e retorna esta string. 
        
        console.log(url)

       
    })
    } 
    

   

    loadPokemonItens(page_offset, page_limit)

    loadMoreButton.addEventListener('click', () => {
        page_offset += page_limit
        loadPokemonItens(page_offset, page_limit)
    } )
    

  


