let titulo = document.getElementById('titulo')
let imagem = document.getElementById('imagem')
let paragrafo = document.getElementById('paragrafo')


setInterval(()=>{
    let data = new Date()

    let hora = data.getHours()
    let minuto = data.getMinutes()
    let segundo = data.getSeconds()

    // console.log(hora,minuto,segundo)

    if(hora >= 6 && hora < 12) {
        titulo.innerHTML = "bom dia"
        imagem.src = "manha.jpg"
        paragrafo.innerHTML = "Agora são " + hora + "h da manhã"
        document.body.style.backgroundColor = "#ffb703"
    } else if(hora <= 18){
        titulo.innerHTML = "boa tarde"
        paragrafo.innerHTML = "Agora são " + hora + "h da tarde"
        imagem.src = "tarde.jpg"
        document.body.style.backgroundColor = "#fb8500"
    } else {
        titulo.innerHTML = "boa noite"
        paragrafo.innerHTML = "agora são " + hora + "h da noite"
        imagem.src = "noite.webp"
        document.body.style.backgroundColor = "#023047"
    }
}, 1000)