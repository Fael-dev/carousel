var itens = document.querySelectorAll(".aro");
var info = document.querySelector(".quadro");
var p = document.querySelector(".info");

itens[0].onmouseover = function(event){
	if(event){
		info.style.display = "block";
		p.innerHTML = "Google LLC é uma empresa multinacional de serviços online e software dos Estados Unidos. O Google hospeda e desenvolve uma série de serviços e produtos baseados na internet e gera lucro principalmente através da publicidade pelo AdWords. A Google é a principal subsidiária da Alphabet Inc";
	}else{
		info.style.display = "none"
	}
}
itens[1].onmouseover = function(event){
	if(event){
		info.style.display = "block";
		p.innerHTML = "Vue.js é um framework JavaScript de código-aberto, focado no desenvolvimento de interfaces de usuário e aplicativos de página única.";
	}else{
		info.style.display = "none"
	}
}
itens[2].onmouseover = function(event){
	if(event){
		info.style.display = "block";
		p.innerHTML = "Electron é um framework de código aberto criado por Cheng Zhao, e agora desenvolvido pelo GitHub. Ele permite desenvolver aplicações para desktop GUI usando componentes front end e back end originalmente criados para aplicações web: Node.js para o back end e Chromium para o front end.";
	}else{
		info.style.display = "none"
	}
}