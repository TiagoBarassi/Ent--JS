//Base de datos:
let baseDeDatos = [
  {
  lugar: "Trixie",
  barrio: "Costanera",
	horario: "Both",
	tipo: "Restaurante",
	veggie: "Yes",
	precio: "$$",
	direccion: "Av. Costanera Rafael Obligado 1221",
	foto: "media/trixie.png",
  },
  {
 	lugar: "Namu",
  barrio: "Palermo",
	horario: "Both",
	tipo: "Bar",
	veggie: "Yes",
	precio: "$$$",
	direccion: "José A. Cabrera 5600",
	foto: "media/namu.jpg",
  },
  {
 	lugar: "Dogg",
  barrio: "Palermo",
	horario: "Both",
	tipo: "Bar",
	veggie: "Yes",
	precio: "$$",
	direccion: "Gorriti 5751",
	foto: "media/dogg.jpg",
  },
  {
  lugar: "Kenji Bento",
  barrio: "Almagro",
	horario: "Both",
	tipo: "Bar",
	veggie: "Yes",
	precio: "$$",
	direccion: "Sarmiento 4518",
	foto: "media/kenji.jpg",
  },
  {
  lugar: "The Night Market",
  barrio: "Palermo",
	horario: "Both",
	tipo: "Bar",
	veggie: "Yes",
	precio: "$$",
	direccion: "Gorriti 5612",
	foto: "media/theNightMarket.jpg",
  }
]


//

class Lugares {
	constructor(lugar, barrio, horario, tipo, veggie, precio, foto, direccion){
		this.lugar = lugar;
		this.barrio = barrio;
		this.horario = horario;
		this.tipo = tipo;
		this.veggie = veggie;
		this.precio = precio;
		this.direccion = direccion;
		this.foto = foto;
		}	
	mostrarFiltros() {
		return ("Filtros elegidos: " + this.lugar + " " + this.horario + " " + this.tipo + " " + this.veggie  + " " + this.foto + " " + this.direccion);
	}
}
const lugares = new Lugares()
console.log(lugares.mostrarFiltros());

// Array de filtros:

let filtrosElegidos = [];


// Funcion para tomar todos los filtros:

function filtradoBarrio() {
		let barrio = document.getElementById("barrio").options[document.getElementById('barrio').selectedIndex].text;
		filtrosElegidos.push(barrio)
	}
	function filtradoHorario() {
		let horario = document.getElementById("horario").options[document.getElementById('horario').selectedIndex].text;
		filtrosElegidos.push(horario)

	}
	function filtradoTipo() {
		let tipo = document.getElementById("tipo").options[document.getElementById('tipo').selectedIndex].text;
		filtrosElegidos.push(tipo)

	}
	function filtradoVeggie() {
		let veggie = document.getElementById("veggie").options[document.getElementById('veggie').selectedIndex].text;
		filtrosElegidos.push(veggie)

	}
	function filtradoPrecio() {
		let precio = document.getElementById("precio").options[document.getElementById('precio').selectedIndex].text;
		filtrosElegidos.push(precio)
	}

function todosLosFiltros () {
	filtradoBarrio();
	filtradoHorario();
	filtradoTipo();
	filtradoVeggie();
	filtradoPrecio();
	console.log(filtrosElegidos);
}



//Filtrado a la base de datos:

const yaFiltrado = []

function filtradoBarrio2() {
		let filtrarBusqueda = baseDeDatos.filter( () => baseDeDatos.barrio === filtrosElegidos.barrio)
		yaFiltrado.push(filtrarBusqueda)
	}

function filtradoHorario2() {
		let filtrarBusqueda2 = yaFiltrado.filter( () => baseDeDatos.horario === filtrosElegidos.horario)
		yaFiltrado.push(filtrarBusqueda2)
	}

function filtradoTipo2() {
		let filtrarBusqueda3 = yaFiltrado.filter( () => baseDeDatos.tipo === filtrosElegidos.tipo)
		yaFiltrado.push(filtrarBusqueda3)
	}

function filtradoVeggie2() {
		let filtrarBusqueda4 = yaFiltrado.filter( () => baseDeDatos.veggie === filtrosElegidos.veggie)
		yaFiltrado.push(filtrarBusqueda4)
	}

function filtradoPrecio2() {
		let filtrarBusqueda5 = yaFiltrado.filter( () => baseDeDatos.precio === filtrosElegidos.precio)
		yaFiltrado.push(filtrarBusqueda5)
	}

function filtered () {
	filtradoBarrio2();
	filtradoHorario2();
	filtradoTipo2();
	filtradoVeggie2();
	filtradoPrecio2();
	console.log(yaFiltrado);
}

//return (filtradoBarrio(), filtradoHorario(), filtradoTipo(), filtradoVeggie(), filtradoPrecio());
//return (filtradoBarrio2(), filtradoHorario2(), filtradoTipo2(), filtradoVeggie2(), filtradoPrecio2());
//Mostrar la busqueda:

class Filtrado {
	constructor(barrio, horario, tipo, veggie, precio, foto, direccion){
		this.barrio = barrio;
		this.horario = horario;
		this.tipo = tipo;
		this.veggie = veggie;
		this.precio = precio;
		}		
	mostrarFiltros() {
		return ("Filtros elegidos: " + this.barrio + " " + this.horario + " " + this.tipo + " " + this.veggie + " " + this.precio);
	}
}
const filtros = new Filtrado()
console.log(filtros.mostrarFiltros());

//Animaciones:

function desaparecer() {
$("h1").fadeOut("1000", () => {
    $("h1").fadeIn('1000')
    .delay(500)
    .fadeOut("1000")
    .fadeIn('1000')
    .delay(500)
    .fadeOut("1000")
    .fadeIn('1000')
    .delay(500)
    .hide(1000)
    .delay(1000)
    .show(500)
}) };
