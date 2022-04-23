
// variables globales

const contCajas = document.querySelector('.contenedor-cajas');
const boton = document.querySelector('.boton');

let bool = false;
let ganar = false;

// matriz

let m = []
for (let i = 0; i < 3; i++) {
	m[i] = [];	
}

for (let j = 0; j<3; j++) {
	for (let i = 0; i < 3; i++) {
		m[i][j] = '';
	}
}

let codigo = []
for (let i = 0; i < 3; i++) {
	codigo[i] = [];	
}

for (let j = 0; j<3; j++) {
	for (let i = 0; i < 3; i++) {
		codigo[i][j] = '' + i + '' + j;
	}
}

const pintarWin = (pintar) => {
	div0 = document.getElementById(pintar[0]);
	div1 = document.getElementById(pintar[1]);
	div2 = document.getElementById(pintar[2]);

	div0.classList.add('ganador');
	div1.classList.add('ganador');
	div2.classList.add('ganador');
}

const rFilas = () => {
	let array = [];
	let pintar = [];
	for (let j = 0; j<3; j++) {
		for (let i = 0; i < 3; i++) {
			array.push(m[i][j]);
			pintar.push(codigo[i][j]);
			console.log(pintar);
		}
	    if (array[0] === array[1] && array[1] === array[2] && array[0] !== '') {
	    	pintarWin(pintar)
	    	ganar = true;
		    break
	    }
	    array = [];
	    pintar = [];
	}

}

const rColumnas = () => {
	let array = [];
	let pintar = [];
	for (let i = 0; i<3; i++) {
		for (let j = 0; j < 3; j++) {
			array.push(m[i][j]);
			pintar.push(codigo[i][j])
		}
	    if (array[0] === array[1] && array[1] === array[2] && array[0] !== '') {
	    	pintarWin(pintar)
	    	ganar = true;
		    break
	    }
	    array = [];
	    pintar = [];
	}
}

const rDiagonal0 = () => {
	let array = [];
	let pintar = [];
	for (let i = 0; i < 3; i++) {
	    array.push(m[i][i]);
	    pintar.push(codigo[i][i])
	}
	if (array[0] === array[1] && array[1] === array[2] && array[0] !== '') {
		pintarWin(pintar)
	    ganar = true;
	}
	array = [];
	pintar = [];
}

const rDiagonal1 = () => {
	let array = [];
	let pintar = [];
	let j = 2;
	for (let i = 0; i < 3; i++) {
	    array.push(m[i][j]);
	    pintar.push(codigo[i][j])
	    j--;		
	}
	if (array[0] === array[1] && array[1] === array[2] && array[0] !== '') {
		pintarWin(pintar)
	    ganar = true;
	}
	array = [];
	pintar = [];
}


// funciones
	
const god = () => {
	const cajas = contCajas.childNodes

    for(let caja of cajas) {
    	if(typeof caja.innerHTML === 'string') {
    		caja.onclick = () => {
    			if(ganar!==true) {
    				if(caja.innerHTML === '') {
	    				if(bool === false) {
	    					caja.innerHTML = 'x';
	    					bool = true;
	    			    } else {
	    				    caja.innerHTML = 'o';
	    				    bool = false;
	    			    }
	    			}
	    			let ids = caja.id;
	    			let id1 = parseInt(ids.charAt(0));
	    			let id2 = parseInt(ids.charAt(1));
	    
	    			m[id1][id2] = caja.innerHTML;
	    			
	    			rFilas();
	    			rColumnas();
	    			rDiagonal0();
	    			rDiagonal1();

    			}
	
    		}	
    	}
    }
}


// ejecutar



boton.onclick = () => {
	location.reload();
}

god()




