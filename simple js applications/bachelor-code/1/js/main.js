// hide claire and sharleen when you click on "final rose"


// create click event for final rose 
document.querySelector('#finalRose').addEventListener('click', hide)


// write the function for hide
function hide(){
	document.querySelector('#claire').style.display = 'none'
	document.querySelector('#sharleen').style.display = 'none'
}
