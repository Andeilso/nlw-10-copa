// Variaveis
let mainHTML = document.querySelector('#cards'); // Selecionando a div MAIN
let bandeiras = document.getElementsByClassName("bandeira"); // Selecionando todos cards
let body = document.getElementsByTagName('body');
let select = document.getElementById('categoria');
let data = new Date();


// Funções
// Animação na Bandeira - MOUSEOVER
const ouvindoBandeiras = (e) => {
    let strong = e.target.parentElement.parentElement.children[1];
    let img = e.target.parentElement.children[0];
    let p = e.target.parentElement.children[1];
    
    strong.style.visibility = "visible";
    
    img.style.transform = "scale(1.2)";
    img.style.marginTop = "-30px";
    img.style.transition = "0.5s";
    
    p.style.visibility = "visible";
    p.style.transition = "0.5s";
    p.style.transform = "scale(1.7)";        
};

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
            console.log(ulAtual.children[i].children[1].children.length);
            if(ulAtual.children[i].children[1].children.length < 2){
                horaPlacar.innerHTML = `
                    <strong class="aguarde">Aguardando<strong>
                `
            }
        }
        
    }
}

const horaOuPlacar = (ulAtual, dataDoJogo, key, pegarHoraJogo) => {
    //Data atual usando new Date()
    let dataAtual = data.getDate();
    let mesAtual = (data.getMonth())+1;
    console.log(key);

    if ( (dataAtual >= dataDoJogo.split('/')[0])
    && (mesAtual >= dataDoJogo.split('/')[1]) ) {
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
    
}

// Criação de Cards - Tabela de Pontos Fase de grupo
const criarTabelaDeGrupos = (cont, main = mainHTML) => {
    main.innerHTML = "";
    cont = 0;
    for (const grupo in Grupos) {
        // Adicionando uma Card para cada grupo dentro do objeto Grupos
        main.innerHTML += `
            <div class="card grid-container" id="tabela">
                <div class="grupo grid-row">${Grupos[grupo].nome}</div>
    
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
    
            let j = 1;
    
        for ( time in Grupos[grupo]) {
            let timeDoGrupo = Grupos[grupo][time]
    
            if(time !== "nome" ){
                main.children[cont].innerHTML +=`
                <div class="grid-row times">
                    <div class="grid-item equipe">
                        <p>${j}</p>
                        <img alt="bandeira" src="./assets/bandeiras/icon-${timeDoGrupo.bnd}.svg">
                        <p>${timeDoGrupo.nome}</p>
                    </div>
                    <div class="grid-item">${(3*timeDoGrupo.v)+(timeDoGrupo.e)}</div>
                    <div class="grid-item">${(timeDoGrupo.v)+(timeDoGrupo.e)+(timeDoGrupo.d)}</div>
                    <div class="grid-item">${timeDoGrupo.v}</div>
                    <div class="grid-item">${timeDoGrupo.e}</div>
                    <div class="grid-item">${timeDoGrupo.d}</div>
                    <div class="grid-item">${timeDoGrupo.sg}</div>
                </div>
                `
                j++
            }
        }
        cont++
    };
}

// Tratando o SELECT
function chamandoTela() {
    Telas[select.value]();
}


// Objetos
// Objeto contendo os Jogos, as Datas, os horários, os grupos e os nomes dos times.
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

// Grupos da Copa do mundo
const Grupos = {
    grupo_a:{
        T1:{
            bnd: "catar",
            nome: "Catar",
            v: 0,
            e: 0,
            d: 0,
            sg: 0
        },
        T2:{ 
            bnd: "equador",
            nome: "Equador",
            v: 0,
            e: 0,
            d: 0,
            sg: 0
        },
        T3:{
            bnd: "senegal",
            nome: "Senegal",
            v: 0,
            e: 0,
            d: 0,
            sg: 0
        },
        T4:{
            bnd: "holanda",
            nome: "Holanda",
            v: 0,
            e: 0,
            d: 0,
            sg: 0
        },
        nome: "Grupo A"
    },
    grupo_b:{
        T1: {
            bnd: "inglaterra",
            nome: "Inglaterra",
            v: 0,
            e: 0,
            d: 0,
            sg: 0
        },
        T2: {
            bnd: "ira",
            nome: "Irã",
            v: 0,
            e: 0,
            d: 0,
            sg: 0
        },
        T3: {
            bnd: "estados-unidos",
            nome: "EUA",
            v: 0,
            e: 0,
            d: 0,
            sg: 0
        },
        T4: {
            bnd: "pais-de-gales",
            nome: "Gales",
            v: 0,
            e: 0,
            d: 0,
            sg: 0
        },
        nome: "Grupo B"
    },
    grupo_c:{
        T1: {
            bnd: "argentina",
            nome: "Argentina",
            v: 0,
            e: 0,
            d: 0,
            sg: 0
        },
        T2: {
            bnd: "arabia-saudita",
            nome: "Arábia S.",
            v: 0,
            e: 0,
            d: 0,
            sg: 0
        },
        T3: {
            bnd: "mexico",
            nome: "México",
            v: 0,
            e: 0,
            d: 0,
            sg: 0
        },
        T4: {
            bnd: "polonia",
            nome: "Polônia",
            v: 0,
            e: 0,
            d: 0,
            sg: 0
        },
        nome: "Grupo C"
    },
    grupo_d:{
        T1: {
            bnd: "franca",
            nome: "França",
            v: 0,
            e: 0,
            d: 0,
            sg: 0
        },
        T2: {
            bnd: "australia",
            nome: "Austrália",
            v: 0,
            e: 0,
            d: 0,
            sg: 0
        },
        T3: {
            bnd: "dinamarca",
            nome: "Dinamarca",
            v: 0,
            e: 0,
            d: 0,
            sg: 0
        },
        T4: {
            bnd: "tunisia",
            nome: "Tunísia",
            v: 0,
            e: 0,
            d: 0,
            sg: 0
        },
        nome: "Grupo D"
    },
    grupo_e:{
        T1: {
            bnd: "espanha",
            nome: "Espanha",
            v: 0,
            e: 0,
            d: 0,
            sg: 0
        },
        T2: {
            bnd: "costa-rica",
            nome: "Costa Rica",
            v: 0,
            e: 0,
            d: 0,
            sg: 0
        },
        T3: {
            bnd: "alemanha",
            nome: "Alemanha",
            v: 0,
            e: 0,
            d: 0,
            sg: 0
        },
        T4: {
            bnd: "japao",
            nome: "Japão",
            v: 0,
            e: 0,
            d: 0,
            sg: 0
        },
        nome: "Grupo E"
    },
    grupo_f:{
        T1: {
            bnd: "belgica",
            nome: "Bélgica",
            v: 0,
            e: 0,
            d: 0,
            sg: 0
        },
        T2: {
            bnd: "canada",
            nome: "Canadá",
            v: 0,
            e: 0,
            d: 0,
            sg: 0
        },
        T3: {
            bnd: "marrocos",
            nome: "Marrocos",
            v: 0,
            e: 0,
            d: 0,
            sg: 0
        },
        T4: {
            bnd: "croacia",
            nome: "Croácia",
            v: 0,
            e: 0,
            d: 0,
            sg: 0
        },
        nome: "Grupo F"
    },
    grupo_g:{
        T1: {
            bnd: "brasil",
            nome: "Brasil",
            v: 0,
            e: 0,
            d: 0,
            sg: 0
        },
        T2: {
            bnd: "servia",
            nome: "Sérvia",
            v: 0,
            e: 0,
            d: 0,
            sg: 0
        },
        T3: {
            bnd: "suica",
            nome: "Suiça",
            v: 0,
            e: 0,
            d: 0,
            sg: 0
        },
        T4: {
            bnd: "camaroes",
            nome: "Camarões",
            v: 0,
            e: 0,
            d: 0,
            sg: 0
        },
        nome: "Grupo G"
    },
    grupo_h:{
        T1: {
            bnd: "portugal",
            nome: "Portugal",
            v: 0,
            e: 0,
            d: 0,
            sg: 0
        },
        T2: {
            bnd: "gana",
            nome: "Gana",
            v: 0,
            e: 0,
            d: 0,
            sg: 0
        },
        T3: {
            bnd: "uruguai",
            nome: "Uruguai",
            v: 0,
            e: 0,
            d: 0,
            sg: 0
        },
        T4: {
            bnd: "coreia-do-sul",
            nome: "Coréia do Sul",
            v: 0,
            e: 0,
            d: 0,
            sg: 0
        },
        nome: "Grupo H"
    }
};

// Objeto com as chamadas de tela
const Telas = {
    faseDeGrupos: criarFaseDeGrupos,
    tabela: criarTabelaDeGrupos,
    // quartasDeFinal: ,
    // semifinal: ,
    // terceiroColocado: ,
    // Final: ,
};

const JogosPassados = {
    dia_20_11: {
        jogo1: {
            catar: 0,
            equador: 2
        }
    },
    dia_21_11: {
        jogo1: {
            inglaterra: 6,
            ira: 2
        },
        jogo2: {
            senegal: 0,
            holanda: 2
        },
        jogo3: {
            estadosUnidos: 1,
            paisDeGales: 1
        }
    },
    dia_22_11: {
        jogo1: {
            argentina: 1,
            arabiaSaudita: 2
        },
        jogo2: {
            dinamarca: 0,
            tunisia: 0
        },
        jogo3: {
            mexico: 0,
            polonia: 0
        },
        jogo4: {
            franca: 4,
            australia: 1
        }
    },
    dia_23_11: {
        jogo1:{
            marrocos: 0,
            croacia: 0
        },
        jogo2:{
            alemanha: 1,
            japao: 2
        },
        jogo3:{
            espanha: 7,
            costaRica: 0
        },
        jogo4: {
            belgica: 1,
            canada: 0
        }
    },
    dia_24_11:{
        jogo1:{
            suica: 1,
            camaroes: 0
        },
        jogo2:{
            uruguai: 0,
            coreiaDoSul: 0
        },
        jogo3:{
            portugal: 3,
            gana: 2
        },
        jogo4:{
            brasil: 2,
            servia: 0
        }
    },
    dia_25_11:{
        jogo1:{
            paisDeGales: 0,
            ira: 2
        },
        jogo2:{
            catar: 1,
            senegal: 3
        },
        jogo3: {
            holanda: 1,
            equador: 1
        },
        jogo4:{
            inglaterra: 0,
            estadosUnidos: 0
        }
    },
    dia_26_11:{
        jogo1:{
            tunisisa: 0,
            australia: 1
        },
        jogo2:{
            polonia: 2,
            arabiaSaudita: 0
        },
        jogo3:{
            franca: 2,
            dinamarca: 1
        },
        jogo4:{
            argentina: 2,
            mexico: 0
        }
    },
    dia_27_11:{
        jogo1:{
            japao: 0,
            costaRica: 1
        },
        jogo2:{
            belgica: 0,
            marrocos: 1
        },
        jogo3:{
            croacia: 4,
            canada: 1
        }
    }
}


// Event Listener
// Ouvindo as mudanças do SELECT
select.addEventListener('change' , chamandoTela)        

// Efeito das bandeiras ao passar o mouse
for (let i = 0; i < bandeiras.length; i++) {
    bandeiras[i].addEventListener("mouseover", ouvindoBandeiras);
    bandeiras[i].addEventListener("mouseout", esconderNomeBandeiras);
};

// Iniciar a tela com Fase de Grupo
Telas.faseDeGrupos();



























