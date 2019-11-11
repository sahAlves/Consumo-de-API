//Criação de variáveis que guardam o id dos elementos
const $container = document.getElementById('container_cards');
const $input = document.getElementById('campo_busca');
const $nome = document.getElementById('nome');
const $img = document.getElementById('img');


//Função que traz as informações pesquisadas conforme o usuário vai digitando, em "cards"
const cards = () =>{
    
    //Função que pega o json da url + a busca que o usuário está digitando
    const url = `https://rawg.io/api/games?search=`;
    
        fetch ( url + $input.value ).then(res => res.json()).then(res => mostrarUrl(res)).catch( () => console.log("Nome não encontrado"));
    
        //Função que pega o json/array e transforma nos "cards"
        const mostrarUrl = ( json ) => {

            console.log(json.results);
            // console.log(json.results.platforms[0].name);

            //Função que retorna os cards com as informações necessárias
            const card =  (acc, jogo) => {
                
                // console.log(jogo.name);
                return `${acc}<div class='card_jogos'>
                    <div class='card_foto'>
                       <img class='img' src='${jogo.background_image}'> 
                    </div>
                    <div class='card_nome'>
                        ${jogo.name}
                    </div>
                    <div class='card_plataforma'>
                        Plataformas: 
                        <p>${jogo.platforms.map(plat => plat.platform.name).join(", ")}</p>
                    </div>
                </div>`;
            
            }


            // Chama a função card e executa no html 
            $container.innerHTML = json.results.reduce(card, "");
            
        }
}