// VARIÁVES // => Um espaço da memória do computador que guardamos algo (numero , letra, texo, imagem)
// FUNÇÃO // => Um trecho de código que só é executado quando é chamado.

let chave ="a134125223f21da14ccfd01ed8ce42db"

function colocarnatela(dados){
    console.log(dados)

    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".icone").src ="https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"
}
async function buscarcidade(cidade){
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
    cidade + 
    "&appid=" + 
    chave +
    "&lang=pt_br" +
    "&units=metric"
    )
    .then(resposta => resposta.json())

    colocarnatela(dados)

    console.log(dados)
}


function cliqueinobotao(){
   let cidade = document.querySelector(".input-cidade").value

   buscarcidade(cidade)
}