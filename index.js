// Your code here
//regex
let textReg = /[a-zA-Z]+/g;
eliminar();

let inpout = document.querySelector("#addToDo");
//Function agregar
inpout.addEventListener("keypress", function(e) {
	if (e.which == 13) {
		let ul = document.querySelector("ul");
		let newli = document.createElement("LI");
		let textoInput = e.target.value;
		if (textoInput !== "" && textReg.test(textoInput)) {
			newli.innerHTML = `<span><i class="fa fa-trash"></i></span> ${textoInput}`;
			ul.appendChild(newli);
			e.target.value = "";
			eliminar();
		} else {
			alert("Debe incluir texto en la tarea");
		}
	}
});

//Function PARA ELIMINAR
function eliminar() {
	let spans = document.querySelectorAll("span");
	for (let span of spans) {
		span.addEventListener("click", function() {
			 span.parentNode.remove();
			// padre.removeChild(span.parentNode);
		});
	}
}
