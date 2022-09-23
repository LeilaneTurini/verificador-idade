function verificar() {

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('iano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
    }
    else {
        var sexo = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 15) {
                img.setAttribute('src', 'criança1.png')
            }
            else if (idade < 30) {
                img.setAttribute('src', 'jovem2.png')
            }
            else if (idade < 40) {
                img.setAttribute('src', 'homem.png')
            }
            else if (idade < 60) {
                img.setAttribute('src', 'maduro.png')
            }
            else {
                img.setAttribute('src', 'idoso.png')
            }

        } else if (sexo[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 15) {
                img.setAttribute('src', 'criança2.png')
            }
            else if (idade < 30) {
                img.setAttribute('src', 'jovem1.png')
            }
            else if (idade < 40) {
                img.setAttribute('src', 'mulher.png')
            }
            else if (idade < 60) {
                img.setAttribute('src', 'madura.png')
            }
            else {
                img.setAttribute('src', 'idosa.png')
            }
        }

        res.innerHTML = `Detectamos ${genero} com ${idade} anos de idade`
        res.appendChild(img)

    }
}