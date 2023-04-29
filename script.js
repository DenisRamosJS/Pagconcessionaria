function verificaCnh(){
    return confirm('Você tem CNH\nSim(ok)  Não(Cancelar)');
}

const valorIdade = function(){
    let idade;
    do{
        idade = Number(prompt('Qual sua idade?'));
        if(Number.isNaN(idade * 1)) alert('Você não digitou um idade valida');
    }while(Number.isNaN(idade * 1));
    return idade;
}

function podeDirigir(){
    const idade = valorIdade();
    const cnh = verificaCnh();
    if(idade >= 18 && cnh){
        return 'Você pode dirigir, Parabéns 🥳'
    }else if(idade >= 18){
        return 'Você não pode dirigir 🙁, mas já pode tirar um CNH 🤓'
    }else{
        return 'Você não pode dirigir, não tem CNH e nem idade para ter uma 😥'
    }
}

function main(){
    const resposta = document.querySelector('.resposta');
    const botao = document.querySelector('.botao');
    //console.log(resposta);
    const nome = prompt('Qual seu nome?');
    resposta.innerHTML = `<p class="res">${nome}, ${podeDirigir()}</p>`;
    botao.innerHTML = '<a href="index.html"><button>Reseta</button></a>'
}

//console.log(podeDirigir());

