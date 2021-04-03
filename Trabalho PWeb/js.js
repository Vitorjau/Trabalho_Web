let botaoresolva = document.querySelector('#botao');
botaoresolva.addEventListener('click', calcular);

function calcular(){
  let a = document.querySelector("#H").value;
	let b = document.querySelector("#O2").value;
  let c = document.querySelector("#resultado").value = parseInt(a) + parseInt(b);
}
