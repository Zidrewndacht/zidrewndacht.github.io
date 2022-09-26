let item = 0 //contador de imagens;
const max = 80 //número da última imagem+1;

function proxImagem( img ){
	fetch("img/"+img+".jpg")
		.then(resp => resp.blob())
		.then(blob => {	 //https://stackoverflow.com/questions/50248329/fetch-image-from-api
			const imageObjectURL = URL.createObjectURL(blob);	
			console.log(imageObjectURL);
			const proxImg = document.createElement("img");
			proxImg.src = imageObjectURL;
			document.getElementById("placeholder").appendChild(proxImg);
		})
}


/** Alternativa desnecessariamente complexa usando base64:
https://stackoverflow.com/questions/18650168/convert-blob-to-base64
function proxImagem( img ){
			let reader = new FileReader();
			reader.readAsDataURL(blob); 
			reader.onloadend = function() {
				let base64data = reader.result;                
				console.log(base64data);
				let proxImg = document.createElement("img");
				proxImg.src = base64data;
				document.getElementById("placeholder").appendChild(proxImg);
			}
		})
}*/

/** Atualização temporizada: */
window.onload = setInterval(function(){ 
	proxImagem( item++ %max );
    let scrollPoint = window.scrollY + window.innerHeight;
	window.scrollTo({ top: scrollPoint, behavior: 'smooth' })
}, 2000);

/** Atualização via scroll: 
window.onscroll = function(){ //https://stackoverflow.com/a/46718465
    let altura = document.body.scrollHeight; 
    let scrollPoint = window.scrollY + window.innerHeight;
    //let scrollPoint = window.scrollY; //início da página
    if(scrollPoint >= altura){
		proxImagem( item++ %max );
    }
}*/

window.onload = function(){
	for(item = 0; item <5; item++){
		proxImagem( item );
	}
}
