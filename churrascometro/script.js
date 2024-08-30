function carnePP(duracao) {

    if(duracao >=6) {
      return 650;
    }else{
        return 400;
    }
}
 
function cervejaPP(duracao) {

    if(duracao){
        return 2000;
    }else{
        return 1200;
      }  
    }

    function bebidasPP(duracao)

 if(duracao>=6) {
    return 1500;
 }else{
    return 1000;
  }
}
 
    function calcular(){
        const adultos = inputAdultos.value;
        const criancas = inputCriancas.value;
        const duracao = inputDuracao.value;

        const qdtTotalCarne = carnePP(duracao)*adultos + (carnePP(duracao)/2* criancas);
        const qdtTotalCerveja = cervejaPP (duracao)*adultos
        const qdtTotalBerbidas = bebibasPP(duracao)*adultos + (bebidasPP(duracao)/ 2*cianca);

        //coloca-se o "+" após o sinal de "=" para deixar entendido que preciso imprimir mais de um inner HTML
        resultado.innerHTML=`<h2 class="result-info"> você vai precisar de:</h2>`
        resultado.innerHTML+=`
        <div class="result-block">
        <img src="./assets/carne.svg"/>
        <p>${qdtTotalCarne/1000}kg de Carne</p>
        </div>
        `
        resultado.innerHTML +=`
        <div class="result-block">
        <img src="./assets/cerveja/svg"/>
        <p>${Math.ceil(qdtTotalCerveja/355)}latas de Cerveja </p>
        </div>
        `
        resultado.innerHTML+=`
        resultado.innerHTML +=`
        <div class="result-block">
            <p>${Math.ceil(qdtTotalBebidas/2000)}garrafas de Bebidas</p>
            </div>
            </br>
            </br>
            </br>
            </br>
            </br>
            `

        }