const documentBody = document.getElementById('body')

let id = 110;
function loadPokemon(id){
    pokeApi.getPokemon(id).then((pokemon) => {
        const newHtml = `
            <div class="${pokemon.type}">
                <header id="headerAbout" class="cabecalho">    
                    <div >
                        <nav class="navSuperior">
                        <a href="index.html"><img src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-vector-back-icon-png-image_4231989.jpg" alt=""></a>
                            <button>Botão favoritar</button>
                        </nav>
                        <section class="sectionHeader">
                            <div class="infoBasic">
                                <div>
                                    <h1>${pokemon.name}</h1>
                                    <div class="types">
                                        ${pokemon.types.map((type) => `<h3 class="type ${pokemon.type} "> ${type} </h3>`).join('')}
                                    </div>
                                </div>
                                <div class="number">
                                    <h2>${pokemon.number}</h2>
                                </div>   
                            </div>   
                            <img src="${pokemon.photo}" alt="${pokemon.name}">
                        </section>
                    </div>
                </header>
                <section class="contentBody">
                    <nav class="navBody">
                        <button id="aboutButton">About</button>
                        <button id="statsButton">Base Stats</button>
                        <button id="evolutionButton">Evolution</button>
                    </nav>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Species</th>
                                <th>Height</th>
                                <th>Weight</th>
                                <th style="">Abilities</th>
                            </tr>
                        </thead>
                        <tbody id="tableBody">
                        <tr>    
                            <td>${pokemon.specie}</td>
                            <td>${pokemon.height * 10} cm </td>
                            <td style="padding-bottom: 0;">${pokemon.weight} kg</td>
                            <td style="padding-top: 0;">
                                ${pokemon.abilities.map((ability) => `<p> ${ability} </p>`).join('')}
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <h2>Breeding</h2>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Species</th>
                                <th>Height</th>
                                <th>Weight</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        `
        documentBody.innerHTML = newHtml 
    })   
}
    
loadPokemon(id)