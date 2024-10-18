function desenharCards(cards, tagHTML){
    tagHTML.innerHTML = '';


    for (let i=0; i<cards.listaDeServicos.length; i++){
        tagHTML.innerHTML += `
            <div class='card'>
                <img src="${cards.listaDeServicos[i].foto}" class="img">
                <span class="descricao">${cards.listaDeServicos[i].descricao}</span>
                <span class="valor">${cards.listaDeServicos[i].valor}</span>
            </div>`;
    }
}
