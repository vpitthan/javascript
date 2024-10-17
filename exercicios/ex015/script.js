function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');  // Ano de nascimento
    var res = document.getElementById('res');      // Elemento para mostrar o resultado
    
    // Verifica se o ano de nascimento foi informado e se é válido
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
        return;
    }

    var fsex = document.getElementsByName('radsex');  // Gênero selecionado
    var idade = ano - Number(fano.value);             // Calcula a idade
    var genero = '';
    var img = document.createElement('img');          // Cria uma tag de imagem
    img.setAttribute('id', 'foto');                   // Define um id para a imag
    
    // Faz a imagem se comportar como bloco e centraliza
    img.style.display = "block";  // Faz a imagem se comportar como um bloco
    img.style.margin = "0 auto";  // Centraliza a imagem

    // Verifica se o gênero foi selecionado
    if (!fsex[0].checked && !fsex[1].checked) {
        window.alert('[ERRO] Selecione um gênero.');
        return;
    }
    
    // Verifica o gênero e a faixa etária para definir a imagem
    if (fsex[0].checked) {  // Homem
        genero = 'Homem';
        if (idade >= 0 && idade < 10) {
            img.setAttribute('src', '1.png');  // Criança
        } else if (idade < 21) {
            img.setAttribute('src', '3.png');  // Jovem
        } else if (idade < 50) {
            img.setAttribute('src', '5.png');  // Adulto
        } else {
            img.setAttribute('src', '7.png');  // Idoso
        }
    } else if (fsex[1].checked) {  // Mulher
        genero = 'Mulher';
        if (idade >= 0 && idade < 10) {
            img.setAttribute('src', '2.png');  // Criança
        } else if (idade < 21) {
            img.setAttribute('src', '4.png');  // Jovem
        } else if (idade < 50) {
            img.setAttribute('src', '6.png');  // Adulto
        } else {
            img.setAttribute('src', '8.png');  // Idosa
        }
    }

    // Exibe o resultado
    res.style.textAlign = 'center';
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    res.appendChild(img);  // Adiciona a imagem ao resultado
}