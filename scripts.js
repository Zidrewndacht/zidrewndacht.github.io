let item = 0;   //contador de imagens solicitadas
const max = 79; //número da última imagem
const updateRate = 2000;    //taxa de atualização automática

function proxImagem( img ){  //solicita nova imagem via fetch()
    fetch("img/"+img+".jpg")
        .then(resp => resp.blob())
        .then(blob => {
            const imageObjectURL = URL.createObjectURL(blob); //cria endereço da imagem
            console.log(imageObjectURL);
            const proxImg = document.createElement("img");
            proxImg.src = imageObjectURL;
            document.getElementById("placeholder").appendChild(proxImg);
        })
}

window.onload = setInterval(function(){
    proxImagem( item++ % (max+1));
    let scrollPoint = window.scrollY + window.innerHeight;
    window.scrollTo({top: scrollPoint, behavior: "smooth"});
}, updateRate);