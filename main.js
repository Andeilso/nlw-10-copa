// Variaveis
let mainHTML = document.querySelector('#cards'); // Selecionando a div MAIN
let bandeiras = document.getElementsByClassName("bandeira"); // Selecionando todos cards
let body = document.getElementsByTagName('body');
let select = document.getElementById('categoria');
let data = new Date();

//Array dos times setado na mão para o site não travar
let arrayDosTimes = [
    [
        ['holanda', 'Holanda', 2, 1, 0, 4],
        ['senegal', 'Senegal', 2, 0, 1, 1],
        ['equador', 'Equador', 1, 1, 1, 1],
        ['catar', 'Catar', 0, 0, 3, -6],
        ['Grupo A']
    ],
    [
        ['inglaterra', 'Inglaterra', 2, 1, 0, 7],
        ['estados-unidos', 'EUA', 1, 2, 0, 1],
        ['ira', 'Irã', 1, 0, 2, -3],
        ['pais-de-gales', 'Gales', 0, 1, 2, -5],
        ['Grupo B']
    ],
    [
        ['argentina', 'Argentina', 2, 0, 1, 3],
        ['polonia', 'Polônia', 1, 1, 1, 0],
        ['mexico', 'México', 1, 1, 1, -1],
        ['arabia-saudita', 'Arábia S.', 1, 0, 2, -2],
        ['Grupo C']
    ],
    [
        ['franca', 'França', 2, 0, 1, 3],
        ['australia', 'Austrália', 2, 0, 1, -1],
        ['tunisia', 'Tunísia', 1, 1, 1, 0],
        ['dinamarca', 'Dinamarca', 0, 1, 2, -2],
        ['Grupo D']
    ],
    [
        ['japao', 'Japão', 2, 0, 1, 1],
        ['espanha', 'Espanha', 1, 1, 1, 6],
        ['alemanha', 'Alemanha', 1, 1, 1, 1],
        ['costa-rica', 'Costa Rica', 1, 0, 2, -8],
        ['Grupo E']
    ],
    [
        ['marrocos', 'Marrocos', 2, 1, 0, 3],
        ['croacia', 'Croácia', 1, 2, 0, 3],
        ['belgica', 'Bélgica', 1, 1, 1, -1],
        ['canada', 'Canadá', 0, 0, 3, -5],
        ['Grupo F']
    ],
    [
        ['brasil', 'Brasil', 2, 0, 1, 2],
        ['suica', 'Suiça', 2, 0, 1, 1],
        ['camaroes', 'Camarões', 1, 1, 1, 0],
        ['servia', 'Sérvia', 0, 1, 2, -3],
        ['Grupo G']
    ],
    [
        ['portugal', 'Portugal', 2, 0, 1, 2],
        ['coreia-do-sul', 'Coréia do Sul', 1, 1, 1, 0],
        ['uruguai', 'Uruguai', 1, 1, 1, 0],
        ['gana', 'Gana', 1, 0, 2, -2],
        ['Grupo H']
    ]
];

//Array das Oitavas setado na mão para o site não travar
let arrayOitavas = [   
    [
        ['holanda', 'Holanda', 2, 1, 0, 4],
        ['estados-unidos', 'EUA', 1, 2, 0, 1]
    ],
    [
        ['argentina', 'Argentina', 2, 0, 1, 3],
        ['australia', 'Austrália', 2, 0, 1, -1]
    ],
    [
        ['japao', 'Japão', 2, 0, 1, 1],
        ['croacia', 'Croácia', 1, 2, 0, 3]
    ],
    [
        ['brasil', 'Brasil', 2, 0, 1, 2],
        ['coreia-do-sul', 'Coréia do Sul', 1, 1, 1, 0]
    ],
    [
        ['inglaterra', 'Inglaterra', 2, 1, 0, 7],
        ['senegal', 'Senegal', 2, 0, 1, 1]
    ],
    [
        ['franca', 'França', 2, 0, 1, 3],
        ['polonia', 'Polônia', 1, 1, 1, 0]
    ],
    [
        ['marrocos', 'Marrocos', 2, 1, 0, 3],
        ['espanha', 'Espanha', 1, 1, 1, 6]
    ],
    [
        ['portugal', 'Portugal', 2, 0, 1, 2],
        ['suica', 'Suiça', 2, 0, 1, 1]
    ]
];

//Array das Quartas
let arrayQuartas = [
    ['holanda', 'Holanda'],
    ['argentina', 'Argentina'],
    ['inglaterra', 'Inglaterra'],
    ['franca', 'França'],
    ['croacia', 'Croácia'],
    ['brasil', 'Brasil'],
    ['marrocos', 'Marrocos'],
    ['portugal', 'Portugal']
];

//Array das Semifinais
let arraySemifinais = [
    ['croacia', 'Croácia'],
    ['argentina', 'Argentina'],
    ['franca', 'França'],
    ['marrocos', 'Marrocos'],
];

//Array da disputa pelo terceiro lugar
let arrayTerceiroLugar = [
    ['croacia', 'Croácia'],
    ['marrocos', 'Marrocos']
];

//Array da Final
let arrayFinal = [
    ['argentina', 'Argentina'],
    ['franca', 'França']
];



// Funções
// Animação na Bandeira - MOUSEOVER
const ouvindoBandeiras = (e) => {
    let strong = e.target.parentElement.parentElement.children[1];
    let img = e.target.parentElement.children[0];
    let p = e.target.parentElement.children[1];
    
    strong.style.visibility = "visible";
    strong.style.transform = "none";
    strong.style.transition = "unset";
    
    img.style.transform = "scale(1.2)";
    img.style.marginTop = "-30px";
    img.style.transition = "0.5s";
    
    p.style.visibility = "visible";
    p.style.transition = "0.5s";
    p.style.transform = "scale(1.7)";        
};

//Setando o placar dos jogos que já passaram
const jogosAteOntem = (ulAtual, key, pegarHoraJogo) => {
    //Trabalhando no Objeto JogosPassados
    let dataJogosPassadosKey = Object.keys(JogosPassados);
    let jogosPassadosKey = Object.keys(JogosPassados[dataJogosPassadosKey[key]])
    
    //Para cada li dentro da ul atual faça:
    for (let i = 0; i < ulAtual.children.length; i++) {
        
        //Resultado do jogo dentro do Objeto JogosPassados
        let resultadoJogo = JogosPassados[dataJogosPassadosKey[key]][jogosPassadosKey[i]];

        //Tirar erro do Objeto JogosAnteriores, que não estão com todos os jogos da data setados
        if (resultadoJogo === undefined) {
            return
        }
        
        //Keys dos resultados dos jogos dentro do Objeto JogosPassado
        let resultadoJogoKey = Object.keys(resultadoJogo);
        
        //Div com a class horaPlacar
        let horaPlacar = ulAtual.children[i].children[1];
        
        
        //Trocando horário por resultado dos jogos
        horaPlacar.innerHTML = `
        <strong class="tituloPlacar">Placar</strong>
        <div class="placar">
        <p>${resultadoJogo[resultadoJogoKey[0]]}</p>
        <p>x</p>
        <p>${resultadoJogo[resultadoJogoKey[1]]}</p>
        </div>
        `
    }
}

//Setando Ao vivo se o jogo estiver acontecendo, se já passou e não tem placar seta Aguardando.
const jogosHoje = (ulAtual, pegarHoraJogo) => {
    //Data atual usando new Date()
    let horaAtual = data.getHours();
    let jogo = Object.keys(pegarHoraJogo)

    //Para cada li dentro da ul atual faça:
    for (let i = 0; i < ulAtual.children.length; i++) {
        //Tratando o Objeto pegarHoraJogo para pegar as Horas
        let horaDoJogo = pegarHoraJogo[jogo[i]].hora.split(':')[0];

        //Div com a class horaPlacar
        let horaPlacar = ulAtual.children[i].children[1];

        if( (horaAtual >= horaDoJogo) 
        && (horaAtual <= (Number(horaDoJogo)+1)) ){
            horaPlacar.innerHTML = `
                <strong class="aoVivo">Ao Vivo</strong>
            `
        } else if (horaAtual > horaDoJogo){
            if(ulAtual.children[i].children[1].children.length < 2){
                horaPlacar.innerHTML = `
                    <strong class="aguarde">Aguardando<strong>
                `
            }
        }
        
    }
}

//Chama as funçoes que setam o placar ou as frases no lugar do horário.
const horaOuPlacar = (ulAtual, dataDoJogo, key, pegarHoraJogo) => {
    //Data atual usando new Date()
    let dataAtual = data.getDate();
    let mesAtual = (data.getMonth())+1;

    if ( (dataAtual >= dataDoJogo.split('/')[0])
    && (mesAtual >= dataDoJogo.split('/')[1])
    || (mesAtual >= dataDoJogo.split('/')[1]) ) {
        jogosAteOntem(ulAtual, key, pegarHoraJogo);
    }

    if ( (dataAtual.toString() === dataDoJogo.split('/')[0])
    && (mesAtual.toString() === dataDoJogo.split('/')[1]) ){
        jogosHoje(ulAtual, pegarHoraJogo);
    }
}

// Animação na Bandeira - MOUSEOUT
const esconderNomeBandeiras = (e) => {
    let strong = e.target.parentElement.parentElement.children[1];
    let img = e.target.parentElement.children[0];
    let p = e.target.parentElement.children[1];
    
    strong.style.visibility = "visible";
    
    img.style.transform = "scale(1)";
    img.style.marginTop = "0px";
    img.style.transition = "0.2s";
    
    p.style.transform = "scale(0.1)";
    p.style.visibility = "hidden";
    p.style.transition = "0.1s";
};

//Se for maior retorna
const maiorRetorna = (arrayGrupo) => {
    let pontos = [];
    let arrayNova = [];
    let arrayHaIgual = [];

    //Se arrayGrupo ainda possuir grupo, mesmo retirando antes
    if (arrayGrupo.length > 4) {
        arrayGrupo.pop();
    }

    //Setando os Pontos que ficaram dentro do array pontos
    for (let i = 0; i < arrayGrupo.length; i++) {
        pontos.push((arrayGrupo[i][2]*3) + arrayGrupo[i][3]);
    }

    //Ajustado os número da array em ordem crescente
    pontos.sort();
    //Ajustado os número da array para ordem decrescente
    pontos.reverse();
    
    //Cada ponto dentro do array Pontos faça
    for (let i = 0; i < arrayGrupo.length; i++) {
        let repete = 0;

        //Para cada pontos dentro do time dentro da arrayGrupo faça
        for (let j = 0; j < arrayGrupo.length; j++) {

            //Se pontos for igual soma ao repete (sempre vai ser 1 pelo menos).
            if (pontos[i] === (arrayGrupo[j][2]*3) + arrayGrupo[j][3]) {
                repete += 1; 
            }
        }

        //Se repete for igual a 1 vai receber false, quer dizer que não repete mais de uma vez.
        if (repete === 1) {
            arrayHaIgual.push(false);

        //Se repetir mais de uma vez adiciona o indice a arrayHaIgual.
        } else if (repete > 1){
            arrayHaIgual.push(i);
        }
    }

    //Para cada ponto dento do array pontos faça:
    for (let i = 0; i < arrayGrupo.length; i++) {

        //Para cada time dentro da arrayGrupo faça
        for (let j = 0; j < arrayGrupo.length; j++) {

            //Se o ponto atual for igual aos pontos do time atual faça:
            if(pontos[i] === (arrayGrupo[j][2]*3) + arrayGrupo[j][3]){

                //Variável criada para ver se o arrayNova já possui o time passado.
                let jaPossui = false;

                //Para cada time dentro da arrayNova faça:
                for (let k = 0; k < arrayNova.length; k++) {
                    
                    //Se o nome do time atual for encontrado dentro da arrayNova faça:
                    if (arrayGrupo[j][1] === arrayNova[k][1]) {
                        //a variável recebe true para não adicionar o time na arrayNova
                        jaPossui = true;
                    }

                }
                
                //Se a variável jaPossui for false então adicione o time na arrayNova.
                if (jaPossui === false && arrayNova.length < 4) {

                    //Os pontos do indice atual se repete?
                    if(arrayHaIgual[i] && arrayHaIgual[i+1] && arrayGrupo[j+1] !== undefined){
                        
                        // Se os Pontos atuais for igual a o próximo faça
                        if((arrayGrupo[j][2]*3) + arrayGrupo[j][3] === (arrayGrupo[j+1][2]*3) + arrayGrupo[j+1][3]){
                            //Se o SG(Saldo de Gols) atual for maior que SG do próximo adiciona o atual e depois o próximo, se não adicione o próximo e depois o atual.
                            if(arrayGrupo[j][5] > arrayGrupo[j+1][5]){
                                arrayNova.push(arrayGrupo[j])
                                j = 4;
                                
                            } else {
                                arrayNova.push(arrayGrupo[j+1])
                                arrayNova.push(arrayGrupo[j])
                                j = 4;
                            }
                        
                        //Mas se os Pontos atuais não for igual a o próximo então:
                        } else {
                            arrayNova.push(arrayGrupo[j])
                            j = 4;
                        }
 

                    } else {
                        arrayNova.push(arrayGrupo[j]);
                        j = 4;
                    }
                }
            }
        }
    }

    return arrayNova

}

//Alinhando Tabela
const colocacaoNaTabela = (arrayDosTimes) => {

    for (let i = 0; i < arrayDosTimes.length; i++) {
        let grupo = arrayDosTimes[i].pop();
        arrayDosTimes[i] = maiorRetorna(arrayDosTimes[i]);
        arrayDosTimes[i].push(grupo);

        for (let j = arrayDosTimes[i][4].length; j > 1; j--) {
            arrayDosTimes[i][4].pop();
        }

    }

    return arrayDosTimes;
}

//Setando V - Vitórias, E - Empates, D - Derrotas e SG - Saldo de Gols
const vEDSG = (esquerda, direita, primeiro, i, j) => {
    
    //Time 1
    if(primeiro){
        if(esquerda > direita){
            arrayDosTimes[i][j][2] += 1; //V - Vitória
            arrayDosTimes[i][j][5] += esquerda - direita; //SG - Saldo de Gols
            return arrayDosTimes;
        } else if(esquerda === direita){
            arrayDosTimes[i][j][3] += 1; //E - Empate
            arrayDosTimes[i][j][5] += esquerda - direita; //SG - Saldo de Gols
            return arrayDosTimes;
        } else {
            arrayDosTimes[i][j][4] += 1; //D - Derrota
            arrayDosTimes[i][j][5] += esquerda - direita; //SG - Saldo de Gols
            return arrayDosTimes;
        }
    
    //Time 2
    } else {
        if(esquerda < direita){
            arrayDosTimes[i][j][2] += 1; //V - Vitória
            arrayDosTimes[i][j][5] += direita - esquerda; //SG - Saldo de Gols
            return arrayDosTimes;
        } else if(esquerda === direita){
            arrayDosTimes[i][j][3] += 1; //E - Empate
            arrayDosTimes[i][j][5] += direita - esquerda; //SG - Saldo de Gols
            return arrayDosTimes;
        } else {
            arrayDosTimes[i][j][4] += 1; //D - Derrota
            arrayDosTimes[i][j][5] += direita - esquerda; //SG - Saldo de Gols
            return arrayDosTimes;
        }
    }

}

//Tratando a array arrayDosTimes
const tratandoArrayDosTimes = (lista, listaKey) => {
    //Items dentro da lista
    let valoresKey = Object.keys(lista[listaKey]);

    //Grupo dentro da array arrayDosTimes
    for (let i = 0; i < arrayDosTimes.length; i++) {

        //times dentro de cada grupo
        for (let j = 0; j < arrayDosTimes[i].length; j++) {

            //Pontuar o time 1
            if(arrayDosTimes[i][j][1] === lista[listaKey][valoresKey[2]]){
                vEDSG(lista[listaKey][valoresKey[0]], lista[listaKey][valoresKey[1]], true, i, j);
                
            //Pontuar o time 2
            }else if (arrayDosTimes[i][j][1] === lista[listaKey][valoresKey[3]])
                vEDSG(lista[listaKey][valoresKey[0]], lista[listaKey][valoresKey[1]], false, i, j);
        }
    }

    return arrayDosTimes;
}



//Funçoes mortas por conta do site travando ---------------------

const pontuar = () => {
    
    //Para cada Dia de Jogo dentro do Objeto JogosPassados faça:
    for (const dataDosJogos in JogosPassados) {
        if(dataDosJogos == "oitavas"){

        } else {
            for (const jogo in JogosPassados[dataDosJogos]) {
                tratandoArrayDosTimes(JogosPassados[dataDosJogos], jogo);
    
            }
        }
    }

    colocacaoNaTabela(arrayDosTimes);
    
    return arrayDosTimes;

}

const setandoArrayOitavas = () => {
    //Criação de arrays
    let classificados = [];

    //Setando times na array classificadaos
    for (let i = 0; i < arrayDosTimes.length; i++) {
        classificados.push([arrayDosTimes[i][0], arrayDosTimes[i][1]])
    }

    //Setando Jogos na arrayOitavas
    for (let i = 0; i < classificados.length; i++) {
        arrayOitavas.push([classificados[i][0] , classificados[i+1][1]])
        arrayOitavas.push([classificados[i+1][0] , classificados[i][1]])
        i++
    }

    return arrayOitavas
}

const setandoArrayQuartas = () => {
    //Criação de arrays
    let classificados = [];

    //Setando times na array classificadaos
    for (const dataJogo in JogosPassados.oitavas) {
        
        for (const jogo in JogosPassados.oitavas[dataJogo]) {
            let jogosKey = Object.keys(JogosPassados.oitavas[dataJogo][jogo]);
            
            if (JogosPassados.oitavas[dataJogo][jogo][jogosKey[0]] > JogosPassados.oitavas[dataJogo][jogo][jogosKey[1]]) {
                classificados.push(JogosPassados.oitavas[dataJogo][jogo][jogosKey[2]]);
            }
            
            if (JogosPassados.oitavas[dataJogo][jogo][jogosKey[0]] === JogosPassados.oitavas[dataJogo][jogo][jogosKey[1]]) {
                
                if (JogosPassados.oitavas[dataJogo][jogo][jogosKey[4]].j1 > JogosPassados.oitavas[dataJogo][jogo][jogosKey[4]].j2) {
                    classificados.push(JogosPassados.oitavas[dataJogo][jogo][jogosKey[2]]);
                }
                
                if(JogosPassados.oitavas[dataJogo][jogo][jogosKey[4]].j1 < JogosPassados.oitavas[dataJogo][jogo][jogosKey[4]].j2){
                    classificados.push(JogosPassados.oitavas[dataJogo][jogo][jogosKey[3]]);
                }
                
            }
            
            if(JogosPassados.oitavas[dataJogo][jogo][jogosKey[0]] < JogosPassados.oitavas[dataJogo][jogo][jogosKey[1]]){
                classificados.push(JogosPassados.oitavas[dataJogo][jogo][jogosKey[3]]);
            }
            
        }
    }

    //Setando Jogos na arrayQuartas
    for (let i = 0; i < classificados.length; i++) {
        for (let j = 0; j < arrayOitavas.length; j++) {

            if (classificados[i] === arrayOitavas[j][0][1]) {
                arrayQuartas.push([arrayOitavas[j][0][0], arrayOitavas[j][0][1]]);
                j = 8;
            } else if (classificados[i] === arrayOitavas[j][1][1]){
                arrayQuartas.push([arrayOitavas[j][1][0], arrayOitavas[j][1][1]]);
                j = 8;
            }

        }
    }

    return arrayQuartas;
}

const setandoArraySemifinais = () => {
    //Criação de arrays
    let classificados = [];

    //Setando times na array classificadaos
    for (const dataJogo in JogosPassados.quartas) {

        for (const jogo in JogosPassados.quartas[dataJogo]) {
            let jogosKey = Object.keys(JogosPassados.quartas[dataJogo][jogo]);

            if (JogosPassados.quartas[dataJogo][jogo][jogosKey[0]] > JogosPassados.quartas[dataJogo][jogo][jogosKey[1]]) {
                classificados.push(JogosPassados.quartas[dataJogo][jogo][jogosKey[2]]);
            }
            
            if (JogosPassados.quartas[dataJogo][jogo][jogosKey[0]] === JogosPassados.quartas[dataJogo][jogo][jogosKey[1]]) {
                
                if (JogosPassados.quartas[dataJogo][jogo][jogosKey[4]].j1 > JogosPassados.quartas[dataJogo][jogo][jogosKey[4]].j2) {
                    classificados.push(JogosPassados.quartas[dataJogo][jogo][jogosKey[2]]);
                }
                
                if(JogosPassados.quartas[dataJogo][jogo][jogosKey[4]].j1 < JogosPassados.quartas[dataJogo][jogo][jogosKey[4]].j2){
                    classificados.push(JogosPassados.quartas[dataJogo][jogo][jogosKey[3]]);
                }
                
            }
            
            if(JogosPassados.quartas[dataJogo][jogo][jogosKey[0]] < JogosPassados.quartas[dataJogo][jogo][jogosKey[1]]){
                classificados.push(JogosPassados.quartas[dataJogo][jogo][jogosKey[3]]);
            }
        }
    }

    //Setando Jogos na arrayQuartas
    for (let i = 0; i < classificados.length; i++) {
        for (let j = 0; j < arrayQuartas.length; j++) {
            if (classificados[i] === arrayQuartas[j][0]) {
                arraySemifinais.push([arrayQuartas[j][0], arrayQuartas[j][1]]);
                j = 8;
            } else if (classificados[i] === arrayQuartas[j][1]){
                arraySemifinais.push([arrayQuartas[j][1], arrayQuartas[j][0]]);
                j = 8;
            }

        }
    }

    return arraySemifinais;
}

const setandoTerceiroLugar = () => {
    //Criação de arrays
    let classificados = [];

    //Setando times na array classificadaos
    for (const dataJogo in JogosPassados.semifinais) {

        for (const jogo in JogosPassados.semifinais[dataJogo]) {
            let jogosKey = Object.keys(JogosPassados.semifinais[dataJogo][jogo]);

            if (JogosPassados.semifinais[dataJogo][jogo][jogosKey[0]] < JogosPassados.semifinais[dataJogo][jogo][jogosKey[1]]) {
                classificados.push(JogosPassados.semifinais[dataJogo][jogo][jogosKey[2]]);
            }
            
            if (JogosPassados.semifinais[dataJogo][jogo][jogosKey[0]] === JogosPassados.semifinais[dataJogo][jogo][jogosKey[1]]) {
                
                if (JogosPassados.semifinais[dataJogo][jogo][jogosKey[4]].j1 < JogosPassados.semifinais[dataJogo][jogo][jogosKey[4]].j2) {
                    classificados.push(JogosPassados.semifinais[dataJogo][jogo][jogosKey[2]]);
                }
                
                if(JogosPassados.semifinais[dataJogo][jogo][jogosKey[4]].j1 > JogosPassados.semifinais[dataJogo][jogo][jogosKey[4]].j2){
                    classificados.push(JogosPassados.semifinais[dataJogo][jogo][jogosKey[3]]);
                }
                
            }
            
            if(JogosPassados.semifinais[dataJogo][jogo][jogosKey[0]] > JogosPassados.semifinais[dataJogo][jogo][jogosKey[1]]){
                classificados.push(JogosPassados.semifinais[dataJogo][jogo][jogosKey[3]]);
            }
        }
    }

    //Setando Jogos na arrayTerceiroLugar
    for (let i = 0; i < classificados.length; i++) {
        for (let j = 0; j < arraySemifinais.length; j++) {
            if (classificados[i] === arraySemifinais[j][0]) {
                arrayTerceiroLugar.push([arraySemifinais[j][0], arraySemifinais[j][1]]);
                j = 8;
            } else if (classificados[i] === arraySemifinais[j][1]){
                arrayTerceiroLugar.push([arraySemifinais[j][0], arraySemifinais[j][1]]);
                j = 8;
            }

        }
    }

    return arrayTerceiroLugar;
}

const setandoFinal = () => {
    //Criação de arrays
    let classificados = [];

    //Setando times na array classificadaos
    for (const dataJogo in JogosPassados.semifinais) {

        for (const jogo in JogosPassados.semifinais[dataJogo]) {
            let jogosKey = Object.keys(JogosPassados.semifinais[dataJogo][jogo]);

            if (JogosPassados.semifinais[dataJogo][jogo][jogosKey[0]] > JogosPassados.semifinais[dataJogo][jogo][jogosKey[1]]) {
                classificados.push(JogosPassados.semifinais[dataJogo][jogo][jogosKey[2]]);
            }
            
            if (JogosPassados.semifinais[dataJogo][jogo][jogosKey[0]] === JogosPassados.semifinais[dataJogo][jogo][jogosKey[1]]) {
                
                if (JogosPassados.semifinais[dataJogo][jogo][jogosKey[4]].j1 > JogosPassados.semifinais[dataJogo][jogo][jogosKey[4]].j2) {
                    classificados.push(JogosPassados.semifinais[dataJogo][jogo][jogosKey[2]]);
                }
                
                if(JogosPassados.semifinais[dataJogo][jogo][jogosKey[4]].j1 < JogosPassados.semifinais[dataJogo][jogo][jogosKey[4]].j2){
                    classificados.push(JogosPassados.semifinais[dataJogo][jogo][jogosKey[3]]);
                }
                
            }
            
            if(JogosPassados.semifinais[dataJogo][jogo][jogosKey[0]] < JogosPassados.semifinais[dataJogo][jogo][jogosKey[1]]){
                classificados.push(JogosPassados.semifinais[dataJogo][jogo][jogosKey[3]]);
            }
        }
    }

    //Setando Jogos na arrayFinal
    for (let i = 0; i < classificados.length; i++) {
        for (let j = 0; j < arraySemifinais.length; j++) {
            if (classificados[i] === arraySemifinais[j][0]) {
                arrayFinal.push([arraySemifinais[j][0], arraySemifinais[j][1]]);
                j = 8;
            } else if (classificados[i] === arraySemifinais[j][1]){
                arrayFinal.push([arraySemifinais[j][0], arraySemifinais[j][1]]);
                j = 8;
            }
        }
    }

    return arrayFinal;
}

//---------------------------------------------------------------



//Criações
// Criação de Cards - Fase de Grupos
const criarFaseDeGrupos = (cont, main = mainHTML) => {
    let delay = 0;
    main.innerHTML = ""
    cont = 0;


    for (const dataJogos in Jogos) {
        
        // Adicionando uma Card para cada data dentro do objeto Jogos
        main.innerHTML += `
        <div class="card" id="faseDeGrupos" style="animation-delay: ${delay}s">
        <h2> ${Jogos[dataJogos].data} <span>${Jogos[dataJogos].diaDaSemana}</span></h2>
        </div>`

        // Adicionando uma tag "<ul>" para cada Card
        main.children[cont].innerHTML += `<ul></ul>`
        
        // Adicionando "li" (item de lista) dentro do "ul" para cada jogo do dia
        for (const jogo in Jogos[dataJogos].jogos) {
            
            // Variavel criada para simplificar o chamado
            let jogoAtual = Jogos[dataJogos].jogos[jogo];
            let divAtual = main.children[cont].children[1];
            
            divAtual.innerHTML += `
            <li>
                <div class="bandeira">
                    <img src="./assets/bandeiras/icon-${jogoAtual.jogador_1.bnd}.svg" alt="Bandeira do ${jogoAtual.jogador_1}">
                    <p>${jogoAtual.jogador_1.nome}</p>
                </div>
                <div class="horaPlacar">
                    <strong>${jogoAtual.hora}</strong> 
                </div>
                <div class="bandeira">
                <img src="./assets/bandeiras/icon-${jogoAtual.jogador_2.bnd}.svg" alt="Bandeira do ${jogoAtual.jogador_2}">
                    <p>${jogoAtual.jogador_2.nome}</p>
                </div>
            </li>
            `
        }
        
        // Após adicionar os jogos, chamo a função horaOuPlacar para ver se o jogo já passou.
        let ulAtual = main.children[cont].children[1];
        let dataDoJogo = Jogos[dataJogos].data;
        let pegarHoraJogo = Jogos[dataJogos].jogos;
        horaOuPlacar(ulAtual, dataDoJogo, cont, pegarHoraJogo);

        // Próximo Card
        cont++
        delay += 0.3;
    };

    // Efeito das bandeiras ao passar o mouse
    for (let i = 0; i < bandeiras.length; i++) {
        bandeiras[i].addEventListener("mouseover", ouvindoBandeiras);
        bandeiras[i].addEventListener("mouseout", esconderNomeBandeiras);
    };
    
}

// Criação de Cards - Tabela de Pontos Fase de grupo
const criarTabelaDeGrupos = (main = mainHTML, array = arrayDosTimes) => {
    main.innerHTML = "";

    for (let i = 0; i < arrayDosTimes.length; i++) {

        // Adicionando uma Card para cada grupo dentro do objeto Grupos
        main.innerHTML += `
            <div class="card grid-container" id="tabela">
                <div class="grupo grid-row">${arrayDosTimes[i][4]}</div>
    
                <div class="grid-row titulos">
                    <div class="grid-item titulo-equipe">
                        Equipe
                    </div class="grid-item">
                    <div class="grid-item">
                        Pts
                    </div class="grid-item">
                    <div class="grid-item">
                        PJ
                    </div class="grid-item">
                    <div class="grid-item">
                        V
                    </div class="grid-item">
                    <div class="grid-item">
                        E
                    </div class="grid-item">
                    <div class="grid-item">
                        D
                    </div class="grid-item">
                    <div class="grid-item">
                        SG
                    </div class="grid-item">
                </div>
            </div>
            `
    
        for (let j = 0; j < arrayDosTimes[i].length; j++) {
            let timeSelecionado = arrayDosTimes[i][j];
            console.log(timeSelecionado);
            //Para não Pegar o Grupo dentro do array
            if(j !== 4){

                main.children[i].innerHTML +=`
                <div class="grid-row times">
                    <div class="grid-item equipe">
                        <p>${j+1}</p>
                        <img alt="bandeira" src="./assets/bandeiras/icon-${timeSelecionado[0]}.svg">
                        <p>${timeSelecionado[1]}</p>
                    </div>
                    <div class="grid-item">${(timeSelecionado[2]*3) + (timeSelecionado[3])}</div>
                    <div class="grid-item">${timeSelecionado[2] + timeSelecionado[3] + timeSelecionado[4]}</div>
                    <div class="grid-item">${timeSelecionado[2]}</div>
                    <div class="grid-item">${timeSelecionado[3]}</div>
                    <div class="grid-item">${timeSelecionado[4]}</div>
                    <div class="grid-item">${timeSelecionado[5]}</div>
                </div>
                `
            }
        }
    }
}

//Criação de cards - Oitavas de Final
const criarOitavasDeFinal = (array = arrayDosTimes, main = mainHTML) => {
    let horarios = [
        ["Oitavas 1", "03/12", "Sábado", "12:00"],
        ["Oitavas 2", "03/12", "Sábado", "16:00"],
        ["Oitavas 3", "05/12", "Segunda", "12:00"],
        ["Oitavas 4", "05/12", "Segunda", "16:00"],
        ["Oitavas 5", "04/12", "Domingo", "16:00"],
        ["Oitavas 6", "04/12", "Domingo", "12:00"],
        ["Oitavas 7", "06/12", "Terça", "12:00"],
        ["Oitavas 8", "06/12", "Terça", "16:00"],
    ];

    //Esvazia a tela
    main.innerHTML = `<div id="oitavas"></div>`;
    let j = 0;

    //Setando na tela e pulando conforme horários PAR
    for (let i = 0; i < arrayOitavas.length; i++) {
        main.children[0].innerHTML += `
            <div class="card">
                <h2>${horarios[j][1]} <span>${horarios[j][2]}</span></h2>
                <li>
                    <div class="bandeira">
                        <img src="./assets/bandeiras/icon-${arrayOitavas[i][0][0]}.svg" alt="Bandeira do ${arrayOitavas[i][0][1]}">
                        <p>${arrayOitavas[i][0][1]}</p>
                    </div>
    
                    <div class="horaPlacar">
                        <strong class="hora">${horarios[j][3]}</strong> 
                    </div>
    
                    <div class="bandeira">
                        <img src="./assets/bandeiras/icon-${arrayOitavas[i][1][0]}.svg" alt="Bandeira do ${arrayOitavas[i][1][1]}">
                        <p>${arrayOitavas[i][1][1]}</p>
                    </div>
                </li>
            <div>
        `
        j++
    }


    // Efeito das bandeiras ao passar o mouse
    for (let i = 0; i < bandeiras.length; i++) {
        bandeiras[i].addEventListener("mouseover", ouvindoBandeiras);
        bandeiras[i].addEventListener("mouseout", esconderNomeBandeiras);
    };

    //Para cada data das oitavas dentro do Objeto JogosPassados.oitavas
    for (const dataJogos in JogosPassados.oitavas) {
        let divCard = main.children[0].children;
        
        //Se o dia atual for maior igual ou mês atual maior igual ao do jogo ou ano maior que do jogo atual
        if(data.getDate() >= Number(dataJogos.split("_")[1])
        || data.getMonth()+1 >= Number(dataJogos.split("_")[2])
        || data.getFullYear() >= 2022){
            
            for (const jogo in JogosPassados.oitavas[dataJogos]) {
                keysJogo = Object.keys(JogosPassados.oitavas[dataJogos][jogo]);
                
                for (let i = 0; i < divCard.length; i++) {
                    let nomeTime = divCard[i].children[1].children[0].children[1].innerHTML;
                    let divHoraPlacar = divCard[i].children[1].children[1];

                    if(nomeTime === JogosPassados.oitavas[dataJogos][jogo][keysJogo[2]]){
                        i = 10;

                        if(JogosPassados.oitavas[dataJogos][jogo][keysJogo[0]] === JogosPassados.oitavas[dataJogos][jogo][keysJogo[1]]){
                            divHoraPlacar.innerHTML = `
                                <strong class="tituloPlacar">Placar</strong>
                                <div class="placar">
                                    <p>
                                        ${JogosPassados.oitavas[dataJogos][jogo][keysJogo[0]]}
                                        <span>${JogosPassados.oitavas[dataJogos][jogo][keysJogo[4]].j1}</span>
                                    </p>
                                    <p>x</p>
                                    <p>
                                        ${JogosPassados.oitavas[dataJogos][jogo][keysJogo[1]]}
                                        <span>${JogosPassados.oitavas[dataJogos][jogo][keysJogo[4]].j2}</span>
                                    </p>
                                </div>
                            `
                        } else {
        
                            divHoraPlacar.innerHTML = `
                                <strong class="tituloPlacar">Placar</strong>
                                <div class="placar">
                                    <p>${JogosPassados.oitavas[dataJogos][jogo][keysJogo[0]]}</p>
                                    <p>x</p>
                                    <p>${JogosPassados.oitavas[dataJogos][jogo][keysJogo[1]]}</p>
                                </div>
                            `
                        }
                    }
                }
            }
        }
    }
}

// Criação de cards - Quartas de Final
const criarQuartasDeFinal = (main = mainHTML) => {
    let horarios = [
        ["Quartas 1", "09/12", "Sexta", "16:00"],
        ["Quartas 2", "09/12", "Sexta", "12:00"],
        ["Quartas 3", "10/12", "Sábado", "16:00"],
        ["Quartas 4", "10/12", "Sábado", "12:00"]
    ]

    //Esvazia a tela
    main.innerHTML = `<div id="quartas"></div>`;
    let j = 0;

    //Setando na tela e pulando conforme horários jogos no site
    for (let i = 0; i < arrayQuartas.length; i+=4) {
        main.children[0].innerHTML += `
            <div class="card">
                <h2>${horarios[j][1]} <span>${horarios[j][2]}</span></h2>
                <li>
                    <div class="bandeira">
                        <img src="./assets/bandeiras/icon-${arrayQuartas[i][0]}.svg" alt="Bandeira do ${arrayQuartas[i][1]}">
                        <p>${arrayQuartas[i][1]}</p>
                    </div>
    
                    <div class="horaPlacar">
                        <strong class="hora">${horarios[j][3]}</strong> 
                    </div>
    
                    <div class="bandeira">
                        <img src="./assets/bandeiras/icon-${arrayQuartas[i+1][0]}.svg" alt="Bandeira do ${arrayQuartas[i+1][1]}">
                        <p>${arrayQuartas[i+1][1]}</p>
                    </div>
                </li>
            <div>
        `
        j++
    }

    //Setando na tela e pulando conforme horários jogos no site
    for (let i = 2; i < arrayQuartas.length; i+=4) {
        main.children[0].innerHTML += `
            <div class="card">
                <h2>${horarios[j][1]} <span>${horarios[j][2]}</span></h2>
                <li>
                    <div class="bandeira">
                        <img src="./assets/bandeiras/icon-${arrayQuartas[i][0]}.svg" alt="Bandeira do ${arrayQuartas[i][1]}">
                        <p>${arrayQuartas[i][1]}</p>
                    </div>
    
                    <div class="horaPlacar">
                        <strong class="hora">${horarios[j][3]}</strong> 
                    </div>
    
                    <div class="bandeira">
                        <img src="./assets/bandeiras/icon-${arrayQuartas[i+1][0]}.svg" alt="Bandeira do ${arrayQuartas[i+1][1]}">
                        <p>${arrayQuartas[i+1][1]}</p>
                    </div>
                </li>
            <div>
        `
        j++
    }

    // Efeito das bandeiras ao passar o mouse
    for (let i = 0; i < bandeiras.length; i++) {
        bandeiras[i].addEventListener("mouseover", ouvindoBandeiras);
        bandeiras[i].addEventListener("mouseout", esconderNomeBandeiras);
    };

    //Para cada data das quartas dentro do Objeto JogosPassados.quartas
    for (const dataJogos in JogosPassados.quartas) {
        let divCard = main.children[0].children;
        
        //Se o dia atual for maior igual ou mês atual maior igual ao do jogo ou ano maior que do jogo atual
        if(data.getDate() >= Number(dataJogos.split("_")[1])
        || data.getMonth()+1 > Number(dataJogos.split("_")[2])
        || data.getFullYear() > 2022){
            
            for (const jogo in JogosPassados.quartas[dataJogos]) {
                keysJogo = Object.keys(JogosPassados.quartas[dataJogos][jogo]);
                
                for (let i = 0; i < divCard.length; i++) {
                    let nomeTime = divCard[i].children[1].children[0].children[1].innerHTML;
                    let divHoraPlacar = divCard[i].children[1].children[1];

                    if(JogosPassados.quartas[dataJogos][jogo][keysJogo[2]] === nomeTime){

                        if(JogosPassados.quartas[dataJogos][jogo][keysJogo[0]] === JogosPassados.quartas[dataJogos][jogo][keysJogo[1]]){
                            divHoraPlacar.innerHTML = `
                                <strong class="tituloPlacar">Placar</strong>
                                <div class="placar">
                                    <p>
                                        ${JogosPassados.quartas[dataJogos][jogo][keysJogo[0]]}
                                        <span>${JogosPassados.quartas[dataJogos][jogo][keysJogo[4]].j1}</span>
                                    </p>
                                    <p>x</p>
                                    <p>
                                        ${JogosPassados.quartas[dataJogos][jogo][keysJogo[1]]}
                                        <span>${JogosPassados.quartas[dataJogos][jogo][keysJogo[4]].j2}</span>
                                    </p>
                                </div>
                            `
                        } else {

                            divHoraPlacar.innerHTML = `
                                <strong class="tituloPlacar">Placar</strong>
                                <div class="placar">
                                    <p>${JogosPassados.quartas[dataJogos][jogo][keysJogo[0]]}</p>
                                    <p>x</p>
                                    <p>${JogosPassados.quartas[dataJogos][jogo][keysJogo[1]]}</p>
                                </div>
                            `
                        }
                    }
                }
            }
        }
    }
}

// Criação de cards - Semifinais
const criarSemiFinal = (main = mainHTML) => {
    arrayDosTimes = [];

    let horarios = [
        ["Semifinal 1", "13/12", "Terça", "16:00"],
        ["Semifinal 2", "14/12", "Quarta", "16:00"],
    ];

    //Esvazia a tela
    main.innerHTML = `<div id="semifinais"></div>`;
    let j = 0;

    //Setando na tela e pulando conforme horários jogos no site
    for (let i = 0; i < arraySemifinais.length; i+=4) {
        main.children[0].innerHTML += `
            <div class="card">
                <h2>${horarios[j][1]} <span>${horarios[j][2]}</span></h2>
                <li>
                    <div class="bandeira">
                        <img src="./assets/bandeiras/icon-${arraySemifinais[i+1][0]}.svg" alt="Bandeira do ${arraySemifinais[i+1][1]}">
                        <p>${arraySemifinais[i+1][1]}</p>
                    </div>
    
                    <div class="horaPlacar">
                        <strong class="hora">${horarios[j][3]}</strong> 
                    </div>
    
                    <div class="bandeira">
                        <img src="./assets/bandeiras/icon-${arraySemifinais[i][0]}.svg" alt="Bandeira do ${arraySemifinais[i][1]}">
                        <p>${arraySemifinais[i][1]}</p>
                    </div>
                </li>
            <div>
        `
        j++
    }
    //Setando na tela e pulando conforme horários jogos no site
    for (let i = 2; i < arraySemifinais.length; i+=4) {
        
        main.children[0].innerHTML += `
            <div class="card">
                <h2>${horarios[j][1]} <span>${horarios[j][2]}</span></h2>
                <li>
                    <div class="bandeira">
                        <img src="./assets/bandeiras/icon-${arraySemifinais[i][0]}.svg" alt="Bandeira do ${arraySemifinais[i][1]}">
                        <p>${arraySemifinais[i][1]}</p>
                    </div>
    
                    <div class="horaPlacar">
                        <strong class="hora">${horarios[j][3]}</strong> 
                    </div>
    
                    <div class="bandeira">
                        <img src="./assets/bandeiras/icon-${arraySemifinais[i+1][0]}.svg" alt="Bandeira do ${arraySemifinais[i+1][1]}">
                        <p>${arraySemifinais[i+1][1]}</p>
                    </div>
                </li>
            <div>
        `
        j++
    }

    // Efeito das bandeiras ao passar o mouse
    for (let i = 0; i < bandeiras.length; i++) {
        bandeiras[i].addEventListener("mouseover", ouvindoBandeiras);
        bandeiras[i].addEventListener("mouseout", esconderNomeBandeiras);
    };

    //Para cada data das semifinais dentro do Objeto JogosPassados.semifinais
    for (const dataJogos in JogosPassados.semifinais) {
        let divCard = main.children[0].children;
        
        //Se o dia atual for maior igual ou mês atual maior igual ao do jogo ou ano maior que do jogo atual
        if(data.getDate() >= Number(dataJogos.split("_")[1])
        || data.getMonth()+1 >= Number(dataJogos.split("_")[2])
        || data.getFullYear() >= 2022){
            
            for (const jogo in JogosPassados.semifinais[dataJogos]) {
                keysJogo = Object.keys(JogosPassados.semifinais[dataJogos][jogo]);
                
                for (let i = 0; i < divCard.length; i++) {
                    let nomeTime = divCard[i].children[1].children[0].children[1].innerHTML;
                    let divHoraPlacar = divCard[i].children[1].children[1];

                    if(JogosPassados.semifinais[dataJogos][jogo][keysJogo[2]] === nomeTime
                    && data.getHours() >= horarios[i][3].split(":")[0]
                    && data.getDate() >= horarios[i][1].split("/")[0]
                    || data.getFullYear() > 2022){

                        if(JogosPassados.semifinais[dataJogos][jogo][keysJogo[0]] === JogosPassados.semifinais[dataJogos][jogo][keysJogo[1]]){
                            divHoraPlacar.innerHTML = `
                                <strong class="tituloPlacar">Placar</strong>
                                <div class="placar">
                                    <p>
                                        ${JogosPassados.semifinais[dataJogos][jogo][keysJogo[0]]}
                                        <span>${JogosPassados.semifinais[dataJogos][jogo][keysJogo[4]].j1}</span>
                                    </p>
                                    <p>x</p>
                                    <p>
                                        ${JogosPassados.semifinais[dataJogos][jogo][keysJogo[1]]}
                                        <span>${JogosPassados.semifinais[dataJogos][jogo][keysJogo[4]].j2}</span>
                                    </p>
                                </div>
                            `
                        } else {

                            divHoraPlacar.innerHTML = `
                                <strong class="tituloPlacar">Placar</strong>
                                <div class="placar">
                                    <p>${JogosPassados.semifinais[dataJogos][jogo][keysJogo[0]]}</p>
                                    <p>x</p>
                                    <p>${JogosPassados.semifinais[dataJogos][jogo][keysJogo[1]]}</p>
                                </div>
                            `
                        }
                    }
                }
            }
        }
    }
}

// Criação de cards - Semifinais
const criarTerceiroColocado = (main = mainHTML) => {
    arrayDosTimes = [];

    let horarios = [
        ["Disputa do 3º lugar", "17/12", "Sábado", "12:00"]
    ];

    //Esvazia a tela
    main.innerHTML = `<div id="terceiroLugar"></div>`;
    let j = 0;

    //Setando na tela e pulando conforme horários jogos no site
    for (let i = 0; i < arrayTerceiroLugar.length; i+= 2) {
        main.children[0].innerHTML += `
            <div class="card">
                <h2>${horarios[j][1]} <span>${horarios[j][2]}</span></h2>
                <li>
                    <div class="bandeira">
                        <img src="./assets/bandeiras/icon-${arrayTerceiroLugar[i][0]}.svg" alt="Bandeira do ${arrayTerceiroLugar[i][1]}">
                        <p>${arrayTerceiroLugar[i][1]}</p>
                    </div>
    
                    <div class="horaPlacar">
                        <strong class="hora">${horarios[j][3]}</strong> 
                    </div>
    
                    <div class="bandeira">
                        <img src="./assets/bandeiras/icon-${arrayTerceiroLugar[i+1][0]}.svg" alt="Bandeira do ${arrayTerceiroLugar[i+1][1]}">
                        <p>${arrayTerceiroLugar[i+1][1]}</p>
                    </div>
                </li>
            <div>
        `
        j++
    }

    // Efeito das bandeiras ao passar o mouse
    for (let i = 0; i < bandeiras.length; i++) {
        bandeiras[i].addEventListener("mouseover", ouvindoBandeiras);
        bandeiras[i].addEventListener("mouseout", esconderNomeBandeiras);
    };

    //Para cada data das semifinais dentro do Objeto JogosPassados.semifinais
    for (const dataJogos in JogosPassados.terceiroLugar) {
        let divCard = main.children[0].children;
        
        //Se o dia atual for maior igual ou mês atual maior igual ao do jogo ou ano maior que do jogo atual
        if(data.getDate() >= Number(dataJogos.split("_")[1])
        || data.getMonth()+1 >= Number(dataJogos.split("_")[2])
        || data.getFullYear() >= 2022){
            
            for (const jogo in JogosPassados.terceiroLugar[dataJogos]) {
                keysJogo = Object.keys(JogosPassados.terceiroLugar[dataJogos][jogo]);
                
                for (let i = 0; i < divCard.length; i++) {
                    let nomeTime = divCard[i].children[1].children[0].children[1].innerHTML;
                    let divHoraPlacar = divCard[i].children[1].children[1];

                    if(JogosPassados.terceiroLugar[dataJogos][jogo][keysJogo[2]] === nomeTime
                    && data.getHours() >= horarios[i][3].split(":")[0]
                    && data.getDate() >= horarios[i][1].split("/")[0]
                    || data.getFullYear() > 2022){

                        if(JogosPassados.terceiroLugar[dataJogos][jogo][keysJogo[0]] === JogosPassados.terceiroLugar[dataJogos][jogo][keysJogo[1]]){
                            divHoraPlacar.innerHTML = `
                                <strong class="tituloPlacar">Placar</strong>
                                <div class="placar">
                                    <p>
                                        ${JogosPassados.terceiroLugar[dataJogos][jogo][keysJogo[0]]}
                                        <span>${JogosPassados.terceiroLugar[dataJogos][jogo][keysJogo[4]].j1}</span>
                                    </p>
                                    <p>x</p>
                                    <p>
                                        ${JogosPassados.terceiroLugar[dataJogos][jogo][keysJogo[1]]}
                                        <span>${JogosPassados.terceiroLugar[dataJogos][jogo][keysJogo[4]].j2}</span>
                                    </p>
                                </div>
                            `
                        } else {

                            divHoraPlacar.innerHTML = `
                                <strong class="tituloPlacar">Placar</strong>
                                <div class="placar">
                                    <p>${JogosPassados.terceiroLugar[dataJogos][jogo][keysJogo[0]]}</p>
                                    <p>x</p>
                                    <p>${JogosPassados.terceiroLugar[dataJogos][jogo][keysJogo[1]]}</p>
                                </div>
                            `
                        }
                    }
                }
            }
        }
    }

    main.children[0].innerHTML += `
        <div class="card ganhador">
            <h2>Terceiro Colocado</h2>
            <li>
                <div class="bandeira">
                    <img src="./assets/bandeiras/icon-${arrayTerceiroLugar[0][0]}.svg" alt="Bandeira do ${arrayTerceiroLugar[0][1]}">
                    <p>${arrayTerceiroLugar[0][1]}</p>
                    <img class="medalha" src="./assets/fitaCampeao.svg" alt="Uma medalha de vencedor">
                </div>
            </li>
        <div>
    `
}

// Criação de cards - Final
const criarFinal = (main = mainHTML) => {
    arrayDosTimes = [];

    let horarios = [
        ["Final", "18/12", "Domingo", "12:00"]
    ];

    //Esvazia a tela
    main.innerHTML = `<div id="final"></div>`;
    let j = 0;

    //Setando na tela e pulando conforme horários jogos no site
    for (let i = 0; i < arrayFinal.length; i+= 2) {
        main.children[0].innerHTML += `
            <div class="card">
                <h2>${horarios[j][1]} <span>${horarios[j][2]}</span></h2>
                <li>
                    <div class="bandeira">
                        <img src="./assets/bandeiras/icon-${arrayFinal[i][0]}.svg" alt="Bandeira do ${arrayFinal[i][1]}">
                        <p>${arrayFinal[i][1]}</p>
                    </div>
    
                    <div class="horaPlacar">
                        <strong class="hora">${horarios[j][3]}</strong> 
                    </div>
    
                    <div class="bandeira">
                        <img src="./assets/bandeiras/icon-${arrayFinal[i+1][0]}.svg" alt="Bandeira do ${arrayFinal[i+1][1]}">
                        <p>${arrayFinal[i+1][1]}</p>
                    </div>
                </li>
            <div>
        `
        j++
    }

    // Efeito das bandeiras ao passar o mouse
    for (let i = 0; i < bandeiras.length; i++) {
        bandeiras[i].addEventListener("mouseover", ouvindoBandeiras);
        bandeiras[i].addEventListener("mouseout", esconderNomeBandeiras);
    };

    //Para cada data das semifinais dentro do Objeto JogosPassados.semifinais
    for (const dataJogos in JogosPassados.final) {
        let divCard = main.children[0].children;
        
        //Se o dia atual for maior igual ou mês atual maior igual ao do jogo ou ano maior que do jogo atual
        if(data.getDate() >= Number(dataJogos.split("_")[1])
        || data.getMonth()+1 >= Number(dataJogos.split("_")[2])
        || data.getFullYear() >= 2022){
            
            for (const jogo in JogosPassados.final[dataJogos]) {
                keysJogo = Object.keys(JogosPassados.final[dataJogos][jogo]);
                
                for (let i = 0; i < divCard.length; i++) {
                    let nomeTime = divCard[i].children[1].children[0].children[1].innerHTML;
                    let divHoraPlacar = divCard[i].children[1].children[1];

                    if(JogosPassados.final[dataJogos][jogo][keysJogo[2]] === nomeTime
                    && data.getHours() >= horarios[i][3].split(":")[0]
                    && data.getDate() >= horarios[i][1].split("/")[0]
                    || data.getFullYear() > 2022){

                        if(JogosPassados.final[dataJogos][jogo][keysJogo[0]] === JogosPassados.final[dataJogos][jogo][keysJogo[1]]){
                            divHoraPlacar.innerHTML = `
                                <strong class="tituloPlacar">Placar</strong>
                                <div class="placar">
                                    <p>
                                        ${JogosPassados.final[dataJogos][jogo][keysJogo[0]]}
                                        <span>${JogosPassados.final[dataJogos][jogo][keysJogo[4]].j1}</span>
                                    </p>
                                    <p>x</p>
                                    <p>
                                        ${JogosPassados.final[dataJogos][jogo][keysJogo[1]]}
                                        <span>${JogosPassados.final[dataJogos][jogo][keysJogo[4]].j2}</span>
                                    </p>
                                </div>
                            `
                        } else {

                            divHoraPlacar.innerHTML = `
                                <strong class="tituloPlacar">Placar</strong>
                                <div class="placar">
                                    <p>${JogosPassados.final[dataJogos][jogo][keysJogo[0]]}</p>
                                    <p>x</p>
                                    <p>${JogosPassados.final[dataJogos][jogo][keysJogo[1]]}</p>
                                </div>
                            `
                        }
                    }
                }
            }
        }
    }

    main.children[0].innerHTML += `
        <div class="card ganhador">
            <h2>Campeão</h2>
            <li>
                <div class="bandeira">
                    <img src="./assets/bandeiras/icon-${arrayFinal[0][0]}.svg" alt="Bandeira do ${arrayFinal[0][1]}">
                    <p>${arrayFinal[0][1]}</p>
                    <img class="medalha" src="./assets/fitaCampeao.svg" alt="Uma medalha de vencedor">
                </div>
            </li>
        <div>
    `
}

// Tratando o SELECT
function chamandoTela() {
    Telas[select.value]();
}



// Objetos
// Objeto contendo os Jogos, as Datas, os horarios, os grupos e os nomes dos times.
const Jogos = {
    data_20_11: {
        data: "20/11",
        diaDaSemana: "Domingo",
        jogos: {
            jogo_1: {
                jogador_1: {
                    bnd: "catar",
                    nome: "Catar"
                },
                jogador_2:{
                    bnd: "equador",
                    nome: "Equador"
                },
                hora: "13:00",
                grupo: "A"
            }
        }
    },
    data_21_11: {
        data: "21/11",
        diaDaSemana: "Segunda",
        jogos: {
            jogo_1: {
                jogador_1: {
                    bnd: "inglaterra",
                    nome: "Inglaterra"
                },
                jogador_2:{
                    bnd: "ira",
                    nome: "Irã"
                },
                hora: "10:00",
                grupo: "B"
            },
            jogo_2: {
                jogador_1: {
                    bnd: "senegal",
                    nome: "Senegal"
                },
                jogador_2:{
                    bnd: "holanda",
                    nome: "Holanda"
                },
                hora: "13:00",
                grupo: "A"
            },
            jogo_3: {
                jogador_1: {
                    bnd: "estados-unidos",
                    nome: "EUA"
                },
                jogador_2:{
                    bnd: "pais-de-gales",
                    nome: "Gales"
                },
                hora: "16:00",
                grupo: "B"
            }
        }
    },
    data_22_11:{
        data: "22/11",
        diaDaSemana: "Terça",
        jogos: {
            jogo_1: {
                jogador_1: {
                    bnd: "argentina",
                    nome: "Argentina"
                },
                jogador_2:{
                    bnd: "arabia-saudita",
                    nome: "Arábia S."
                },
                hora: "07:00",
                grupo: "C"
            },
            jogo_2: {
                jogador_1: {
                    bnd: "dinamarca",
                    nome: "Dinamarca"
                },
                jogador_2:{
                    bnd: "tunisia",
                    nome: "Tunísia"
                },
                hora: "10:00",
                grupo: "D"
            },
            jogo_3: {
                jogador_1: {
                    bnd: "mexico",
                    nome: "México"
                },
                jogador_2:{
                    bnd: "polonia",
                    nome: "Polônia"
                },
                hora: "13:00",
                grupo: "C"
            },
            jogo_4: {
                jogador_1: {
                    bnd: "franca",
                    nome: "França"
                },
                jogador_2:{
                    bnd: "australia",
                    nome: "Austrália"
                },
                hora: "16:00",
                grupo: "D"
            }
        }
    },
    data_23_11:{
        data: "23/11",
        diaDaSemana: "Quarta",
        jogos: {
            jogo_1: {
                jogador_1: {
                    bnd: "marrocos",
                    nome: "Marrocos"
                },
                jogador_2:{
                    bnd: "croacia",
                    nome: "Croácia"
                },
                hora: "07:00",
                grupo: "F"
            },
            jogo_2: {
                jogador_1: {
                    bnd: "alemanha",
                    nome: "Alemanha"
                },
                jogador_2:{
                    bnd: "japao",
                    nome: "Japão"
                },
                hora: "10:00",
                grupo: "E"
            },
            jogo_3: {
                jogador_1: {
                    bnd: "espanha",
                    nome: "Espanha"
                },
                jogador_2:{
                    bnd: "costa-rica",
                    nome: "Costa Rica"
                },
                hora: "13:00",
                grupo: "E"
            },
            jogo_4: {
                jogador_1: {
                    bnd: "belgica",
                    nome: "Bélgica"
                },
                jogador_2:{
                    bnd: "canada",
                    nome: "Canadá"
                },
                hora: "16:00",
                grupo: "F"
            }
        }
    },
    data_24_11:{
        data: "24/11",
        diaDaSemana: "Quinta",
        jogos: {
            jogo_1: {
                jogador_1: {
                    bnd: "suica",
                    nome: "Suiça"
                },
                jogador_2:{
                    bnd: "camaroes",
                    nome: "Camarões"
                },
                hora: "07:00",
                grupo: "G"
            },
            jogo_2: {
                jogador_1: {
                    bnd: "uruguai",
                    nome: "Uruguai"
                },
                jogador_2:{
                    bnd: "coreia-do-sul",
                    nome: "Coréia do Sul"
                },
                hora: "10:00",
                grupo: "H"
            },
            jogo_3: {
                jogador_1: {
                    bnd: "portugal",
                    nome: "Portugal"
                },
                jogador_2:{
                    bnd: "gana",
                    nome: "Gana"
                },
                hora: "13:00",
                grupo: "H"
            },
            jogo_4: {
                jogador_1: {
                    bnd: "brasil",
                    nome: "Brasil"
                },
                jogador_2:{
                    bnd: "servia",
                    nome: "Sérvia"
                },
                hora: "16:00",
                grupo: "G"
            }
        }
    },
    data_25_11:{
        data: "25/11",
        diaDaSemana: "Sexta",
        jogos: {
            jogo_1: {
                jogador_1: {
                    bnd: "pais-de-gales",
                    nome: "Gales"
                },
                jogador_2:{
                    bnd: "ira",
                    nome: "Irã"
                },
                hora: "07:00",
                grupo: "B"
            },
            jogo_2: {
                jogador_1: {
                    bnd: "catar",
                    nome: "Catar"
                },
                jogador_2:{
                    bnd: "senegal",
                    nome: "Senegal"
                },
                hora: "10:00",
                grupo: "A"
            },
            jogo_3: {
                jogador_1: {
                    bnd: "holanda",
                    nome: "Holanda"
                },
                jogador_2:{
                    bnd: "equador",
                    nome: "Equador"
                },
                hora: "13:00",
                grupo: "A"
            },
            jogo_4: {
                jogador_1: {
                    bnd: "inglaterra",
                    nome: "Inglaterra"
                },
                jogador_2:{
                    bnd: "estados-unidos",
                    nome: "EUA"
                },
                hora: "16:00",
                grupo: "B"
            }
        }
    },
    data_26_11:{
        data: "26/11",
        diaDaSemana: "Sábado",
        jogos: {
            jogo_1: {
                jogador_1: {
                    bnd: "tunisia",
                    nome: "Tunísia"
                },
                jogador_2:{
                    bnd: "australia",
                    nome: "Austrália"
                },
                hora: "07:00",
                grupo: "D"
            },
            jogo_2: {
                jogador_1: {
                    bnd: "polonia",
                    nome: "Polônia"
                },
                jogador_2:{
                    bnd: "arabia-saudita",
                    nome: "Arábia S."
                },
                hora: "10:00",
                grupo: "C"
            },
            jogo_3: {
                jogador_1: {
                    bnd: "franca",
                    nome: "França"
                },
                jogador_2:{
                    bnd: "dinamarca",
                    nome: "Dinamarca"
                },
                hora: "13:00",
                grupo: "D"
            },
            jogo_4: {
                jogador_1: {
                    bnd: "argentina",
                    nome: "Argentina"
                },
                jogador_2:{
                    bnd: "mexico",
                    nome: "México"
                },
                hora: "16:00",
                grupo: "C"
            }
        }
    },
    data_27_11:{
        data: "27/11",
        diaDaSemana: "Domingo",
        jogos: {
            jogo_1: {
                jogador_1: {
                    bnd: "japao",
                    nome: "Japão"
                },
                jogador_2:{
                    bnd: "costa-rica",
                    nome: "Costa Rica"
                },
                hora: "07:00",
                grupo: "E"
            },
            jogo_2: {
                jogador_1: {
                    bnd: "belgica",
                    nome: "Bélgica"
                },
                jogador_2:{
                    bnd: "marrocos",
                    nome: "Marrocos"
                },
                hora: "10:00",
                grupo: "F"
            },
            jogo_3: {
                jogador_1: {
                    bnd: "croacia",
                    nome: "Croácia"
                },
                jogador_2:{
                    bnd: "canada",
                    nome: "Canadá"
                },
                hora: "13:00",
                grupo: "F"
            },
            jogo_4: {
                jogador_1: {
                    bnd: "espanha",
                    nome: "Espanha"
                },
                jogador_2:{
                    bnd: "alemanha",
                    nome: "Alemanha"
                },
                hora: "16:00",
                grupo: "E"
            }
        }
    },
    data_28_11:{
        data: "28/11",
        diaDaSemana: "Segunda",
        jogos: {
            jogo_1: {
                jogador_1: {
                    bnd: "camaroes",
                    nome: "Camarões"
                },
                jogador_2:{
                    bnd: "servia",
                    nome: "Sérvia"
                },
                hora: "07:00",
                grupo: "G"
            },
            jogo_2: {
                jogador_1: {
                    bnd: "coreia-do-sul",
                    nome: "Coréia do Sul"
                },
                jogador_2:{
                    bnd: "gana",
                    nome: "Gana"
                },
                hora: "10:00",
                grupo: "H"
            },
            jogo_3: {
                jogador_1: {
                    bnd: "brasil",
                    nome: "Brasil"
                },
                jogador_2:{
                    bnd: "suica",
                    nome: "Suíça"
                },
                hora: "13:00",
                grupo: "G"
            },
            jogo_4: {
                jogador_1: {
                    bnd: "portugal",
                    nome: "Portugal"
                },
                jogador_2:{
                    bnd: "uruguai",
                    nome: "Uruguai"
                },
                hora: "16:00",
                grupo: "H"
            }
        }
    },
    data_29_11:{
        data: "29/11",
        diaDaSemana: "Terça",
        jogos: {
            jogo_1: {
                jogador_1: {
                    bnd: "equador",
                    nome: "Equador"
                },
                jogador_2:{
                    bnd: "senegal",
                    nome: "Senegal"
                },
                hora: "12:00",
                grupo: "A"
            },
            jogo_2: {
                jogador_1: {
                    bnd: "holanda",
                    nome: "Holanda"
                },
                jogador_2:{
                    bnd: "catar",
                    nome: "Catar"
                },
                hora: "12:00",
                grupo: "A"
            },
            jogo_3: {
                jogador_1: {
                    bnd: "ira",
                    nome: "Irã"
                },
                jogador_2:{
                    bnd: "estados-unidos",
                    nome: "EUA"
                },
                hora: "16:00",
                grupo: "B"
            },
            jogo_4: {
                jogador_1: {
                    bnd: "pais-de-gales",
                    nome: "Gales"
                },
                jogador_2:{
                    bnd: "inglaterra",
                    nome: "Inglaterra"
                },
                hora: "16:00",
                grupo: "B"
            }
        }
    },
    data_30_11:{
        data: "30/11",
        diaDaSemana: "Quarta",
        jogos: {
            jogo_1: {
                jogador_1: {
                    bnd: "tunisia",
                    nome: "Tunísia"
                },
                jogador_2:{
                    bnd: "franca",
                    nome: "França"
                },
                hora: "12:00",
                grupo: "D"
            },
            jogo_2: {
                jogador_1: {
                    bnd: "australia",
                    nome: "Austrália"
                },
                jogador_2:{
                    bnd: "dinamarca",
                    nome: "Dinamarca"
                },
                hora: "12:00",
                grupo: "D"
            },
            jogo_3: {
                jogador_1: {
                    bnd: "polonia",
                    nome: "Polônia"
                },
                jogador_2:{
                    bnd: "argentina",
                    nome: "Argentina"
                },
                hora: "16:00",
                grupo: "C"
            },
            jogo_4: {
                jogador_1: {
                    bnd: "arabia-saudita",
                    nome: "Arábia S."
                },
                jogador_2:{
                    bnd: "mexico",
                    nome: "México"
                },
                hora: "16:00",
                grupo: "C"
            }
        }
    },
    data_01_12:{
        data: "01/12",
        diaDaSemana: "Quinta",
        jogos: {
            jogo_1: {
                jogador_1: {
                    bnd: "croacia",
                    nome: "Croácia"
                },
                jogador_2:{
                    bnd: "belgica",
                    nome: "Bélgica"
                },
                hora: "12:00",
                grupo: "F"
            },
            jogo_2: {
                jogador_1: {
                    bnd: "canada",
                    nome: "Canadá"
                },
                jogador_2:{
                    bnd: "marrocos",
                    nome: "Marrocos"
                },
                hora: "12:00",
                grupo: "F"
            },
            jogo_3: {
                jogador_1: {
                    bnd: "japao",
                    nome: "Japão"
                },
                jogador_2:{
                    bnd: "espanha",
                    nome: "Espanha"
                },
                hora: "16:00",
                grupo: "E"
            },
            jogo_4: {
                jogador_1: {
                    bnd: "costa-rica",
                    nome: "Costa Rica"
                },
                jogador_2:{
                    bnd: "alemanha",
                    nome: "Alemanha"
                },
                hora: "16:00",
                grupo: "R"
            }
        }
    },
    data_02_12:{
        data: "02/12",
        diaDaSemana: "Sexta",
        jogos: {
            jogo_1: {
                jogador_1: {
                    bnd: "coreia-do-sul",
                    nome: "Coréia do Sul"
                },
                jogador_2:{
                    bnd: "portugal",
                    nome: "Portugal"
                },
                hora: "12:00",
                grupo: "H"
            },
            jogo_2: {
                jogador_1: {
                    bnd: "gana",
                    nome: "Gana"
                },
                jogador_2:{
                    bnd: "uruguai",
                    nome: "Uruguai"
                },
                hora: "12:00",
                grupo: "H"
            },
            jogo_3: {
                jogador_1: {
                    bnd: "servia",
                    nome: "Sérvia"
                },
                jogador_2:{
                    bnd: "suica",
                    nome: "Suiça"
                },
                hora: "16:00",
                grupo: "G"
            },
            jogo_4: {
                jogador_1: {
                    bnd: "camaroes",
                    nome: "Camarões"
                },
                jogador_2:{
                    bnd: "brasil",
                    nome: "Brasil"
                },
                hora: "16:00",
                grupo: "G"
            }
        }
    }
};

// Objeto com as chamadas de tela
const Telas = {
    faseDeGrupos: criarFaseDeGrupos,
    tabela: criarTabelaDeGrupos,
    oitavasDeFinal: criarOitavasDeFinal,
    quartasDeFinal: criarQuartasDeFinal,
    semifinal: criarSemiFinal,
    terceiroColocado: criarTerceiroColocado,
    final: criarFinal,
};

// Objeto com o placar dos jogos que já foram disputados
const JogosPassados = {
    dia_20_11: {
        jogo1: {
            catar: 0,
            equador: 2,
            nome1: "Catar",
            nome2: "Equador"
        }
    },
    dia_21_11: {
        jogo1: {
            inglaterra: 6,
            ira: 2,
            nome1: "Inglaterra",
            nome2: "Irã"
        },
        jogo2: {
            senegal: 0,
            holanda: 2,
            nome1: "Senegal",
            nome2: "Holanda"
        },
        jogo3: {
            estadosUnidos: 1,
            paisDeGales: 1,
            nome1: "EUA",
            nome2: "Gales"
        }
    },
    dia_22_11: {
        jogo1: {
            argentina: 1,
            arabiaSaudita: 2,
            nome1: "Argentina",
            nome2: "Arábia S."
        },
        jogo2: {
            dinamarca: 0,
            tunisia: 0,
            nome1: "Dinamarca",
            nome2: "Tunísia"
        },
        jogo3: {
            mexico: 0,
            polonia: 0,
            nome1: "México",
            nome2: "Polônia"
        },
        jogo4: {
            franca: 4,
            australia: 1,
            nome1: "França",
            nome2: "Austrália"
        }
    },
    dia_23_11: {
        jogo1:{
            marrocos: 0,
            croacia: 0,
            nome1: "Marrocos",
            nome2: "Croácia"
        },
        jogo2:{
            alemanha: 1,
            japao: 2,
            nome1: "Alemanha",
            nome2: "Japão"
        },
        jogo3:{
            espanha: 7,
            costaRica: 0,
            nome1: "Espanha",
            nome2: "Costa Rica"
        },
        jogo4: {
            belgica: 1,
            canada: 0,
            nome1: "Bélgica",
            nome2: "Canadá"
        }
    },
    dia_24_11:{
        jogo1:{
            suica: 1,
            camaroes: 0,
            nome1: "Suiça",
            nome2: "Camarões"
        },
        jogo2:{
            uruguai: 0,
            coreiaDoSul: 0,
            nome1: "Uruguai",
            nome2: "Coréia do Sul"
        },
        jogo3:{
            portugal: 3,
            gana: 2,
            nome1: "Portugal",
            nome2: "Gana"
        },
        jogo4:{
            brasil: 2,
            servia: 0,
            nome1: "Brasil",
            nome2: "Sérvia"
        }
    },
    dia_25_11:{
        jogo1:{
            paisDeGales: 0,
            ira: 2,
            nome1: "Gales",
            nome2: "Irã"
        },
        jogo2:{
            catar: 1,
            senegal: 3,
            nome1: "Catar",
            nome2: "Senegal"
        },
        jogo3: {
            holanda: 1,
            equador: 1,
            nome1: "Holanda",
            nome2: "Equador"
        },
        jogo4:{
            inglaterra: 0,
            estadosUnidos: 0,
            nome1: "Inglaterra",
            nome2: "EUA"
        }
    },
    dia_26_11:{
        jogo1:{
            tunisisa: 0,
            australia: 1,
            nome1: "Tunísia",
            nome2: "Austrália"
        },
        jogo2:{
            polonia: 2,
            arabiaSaudita: 0,
            nome1: "Polônia",
            nome2: "Arábia S."
        },
        jogo3:{
            franca: 2,
            dinamarca: 1,
            nome1: "França",
            nome2: "Dinamarca"
        },
        jogo4:{
            argentina: 2,
            mexico: 0,
            nome1: "Argentina",
            nome2: "México"
        }
    },
    dia_27_11:{
        jogo1:{
            japao: 0,
            costaRica: 1,
            nome1: "Japão",
            nome2: "Costa Rica"
        },
        jogo2:{
            belgica: 0,
            marrocos: 2,
            nome1: "Bélgica",
            nome2: "Marrocos"
        },
        jogo3:{
            croacia: 4,
            canada: 1,
            nome1: "Croácia",
            nome2: "Canadá"
        },
        jogo4:{
            espanha: 1,
            alemanha: 1,
            nome1: "Espanha",
            nome2: "Alemanha"
        }
    },
    dia_28_11:{
        jogo1:{
            camaroes: 3,
            servia: 3,
            nome1: "Camarões",
            nome2: "Sérvia"
        },
        jogo2:{
            coreiaDoSul: 2,
            gana: 3,
            nome1: "Coréia do Sul",
            nome2: "Gana"
        },
        jogo3:{
            brasil: 1,
            suica: 0,
            nome1: "Brasil",
            nome2: "Suiça"
        },
        jogo4:{
            portugal: 2,
            uruguai: 0,
            nome1: "Portugal",
            nome2: "Uruguai"
        }
    },
    dia_29_11:{
        jogo1:{
            holanda: 2,
            catar: 0,
            nome1: "Holanda",
            nome2: "Catar"
        },
        jogo2:{
            equador: 1,
            senegal: 2,
            nome1: "Equador",
            nome2: "Senegal"
        },
        jogo3:{
            ira: 0,
            estadosUnidos: 1,
            nome1: "Irã",
            nome2: "EUA"
        },
        jogo4:{
            paisDeGales: 0,
            inglaterra: 3,
            nome1: "Gales",
            nome2: "Inglaterra"
        }
    },
    dia_30_11:{
        jogo1:{
            tunisia: 1,
            franca: 0,
            nome1: "Tunísia",
            nome2: "França"
        },
        jogo2:{
            australia: 1,
            dinamarca: 0,
            nome1: "Austrália",
            nome2: "Dinamarca"
        },
        jogo3:{
            polonia: 0,
            argentina: 2,
            nome1: "Polônia",
            nome2: "Argentina"
        },
        jogo4:{
            arabiaSaudita: 1,
            mexico: 2,
            nome1: "Arábia S.",
            nome2: "México"
        }
    },
    dia_01_12:{
        jogo1:{
            croacia: 0,
            belgica: 0,
            nome1: "Croácia",
            nome2: "Bélgica"
        },
        jogo2:{
            canada: 1,
            marrocos: 2,
            nome1: "Canadá",
            nome2: "Marrocos"
        },
        jogo3:{
            japao: 2,
            espanha: 1,
            nome1: "Japão",
            nome2: "Espanha"
        },
        jogo4:{
            costaRica: 2,
            alemanha: 4,
            nome1: "Costa Rica",
            nome2: "Alemanha"
        }
    },
    dia_02_12:{
        jogo1:{
            coreiaDoSul: 2,
            portugal: 1,
            nome1: "Coréia do Sul",
            nome2: "Portugal"
        },
        jogo2:{
            gana: 0,
            uruguai: 2,
            nome1: "Gana",
            nome2: "Uruguai"
        },
        jogo3:{
            servia: 2,
            suica: 3,
            nome1: "Sérvia",
            nome2: "Suiça"
        },
        jogo4:{
            camaroes: 1,
            brasil: 0,
            nome1: "Camarões",
            nome2: "Brasil"
        }
    },
    oitavas: {
        dia_03_12:{
            jogo1:{
                holanda: "3",
                estadosUnidos: "1",
                nome1: "Holanda",
                nome2: "EUA",
                penaltis: {
                    j1: "-",
                    j2: "-"
                }
            },
            jogo2:{
                argentina: "2",
                australia: "1",
                nome1: "Argentina",
                nome2: "Austrália",
                penaltis: {
                    j1: "-",
                    j2: "-"
                }
            },
        },
        dia_04_12:{
            jogo1:{
                inglaterra: "3",
                senegal: "0",
                nome1: "Inglaterra",
                nome2: "Senegal",
                penaltis: {
                    j1: "-",
                    j2: "-"
                }
            },
            jogo2:{
                franca: "3",
                polonia: "1",
                nome1: "França",
                nome2: "Polônia",
                penaltis: {
                    j1: "-",
                    j2: "-"
                }
            },
        },
        dia_05_12:{
            jogo1:{
                japao: "1",
                croacia: "1",
                nome1: "Japão",
                nome2: "Croácia",
                penaltis: {
                    j1: "1",
                    j2: "3"
                }
            },
            jogo2:{
                brasil: "4",
                coreiaDoSul: "1",
                nome1: "Brasil",
                nome2: "Coréia do Sul",
                penaltis: {
                    j1: "-",
                    j2: "-"
                }
            },
        },
        dia_06_12:{
            jogo1:{
                marrocos: "0",
                espanha: "0",
                nome1: "Marrocos",
                nome2: "Espanha",
                penaltis: {
                    j1: "3",
                    j2: "0"
                }
            },
            jogo2:{
                portugal: "6",
                suica: "1",
                nome1: "Portugal",
                nome2: "Suiça",
                penaltis: {
                    j1: "-",
                    j2: "-"
                }
            },
        }
    },
    quartas: {
        dia_09_12:{
            jogo1:{
                croacia: 1,
                brasil: 1,
                nome1: "Croácia",
                nome2: "Brasil",
                penaltis: {
                    j1: 4,
                    j2: 2
                }
            },
            jogo2:{
                holanda: 2,
                argentina: 2,
                nome1: "Holanda",
                nome2: "Argentina",
                penaltis: {
                    j1: 3,
                    j2: 4
                }
            },
        },
        dia_10_12:{
            jogo1:{
                inglaterra: 1,
                franca: 2,
                nome1: "Inglaterra",
                nome2: "França",
                penaltis: {
                    j1: "-",
                    j2: "-"
                }
            },
            jogo2:{
                marrocos: 1,
                portugal: 0,
                nome1: "Marrocos",
                nome2: "Portugal",
                penaltis: {
                    j1: "-",
                    j2: "-"
                }
            },
        }
    },
    semifinais: {
        dia_13_12:{
            jogo1:{
                argentina: 3,
                croacia: 0,
                nome1: "Argentina",
                nome2: "Croácia",
                penaltis: {
                    j1: "-",
                    j2: "-"
                }
            }
        },
        dia_14_12:{
            jogo1:{
                franca: 2,
                marrocos: 0,
                nome1: "França",
                nome2: "Marrocos",
                penaltis: {
                    j1: "-",
                    j2: "-"
                }
            }
        }
    },
    terceiroLugar: {
        dia_17_12:{
            jogo1:{
                croacia: 2,
                marrocos: 1,
                nome1: "Croácia",
                nome2: "Marrocos",
                penaltis: {
                    j1: "-",
                    j2: "-"
                }
            }
        }
    },
    final: {
        dia_18_12:{
            jogo1:{
                argentina: 3,
                franca: 3,
                nome1: "Argentina",
                nome2: "França",
                penaltis: {
                    j1: 4,
                    j2: 2
                }
            }
        }
    }
}



// Event Listener
// Ouvindo as mudanças do SELECT
select.addEventListener('change' , chamandoTela);



// Iniciar a tela com Fase de Grupo
Telas.final();
