
// select all classes of contestants 
const contestants = document.querySelectorAll('.contestant')

// click event listener 
Array.from(contestants).forEach(element => element.addEventListener('click', checkForRose))

// if click on the winner with a class of rose - diplay photo 
// else alert wrong 
function checkForRose(click){
	if(click.target.classList.contains("rose")){
		document.querySelector('#nikki').classList.toggle('hidden')
	}else{
		alert("Wrong!");
	}
}
