{


function validateForm(className) {

	let inp = document.getElementsByClassName(className)[0].querySelectorAll('.getin_input');
	for (let i of inp) {
		
		i.classList.add("getin_inv");
	}		
}

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function cookies() {

	let cookiesBlock = document.getElementsByClassName('cookie')[0];
	let bottom = parseInt(getComputedStyle(cookiesBlock).bottom); 
	for (let i = 0; i < 200; i+=2) {

		cookiesBlock.style.bottom = bottom + i + 'px';
		await sleep(1);
		
	}	
}



window.onload = function(){
			
		cookies();	
		
}

};


