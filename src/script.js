function clickEvent(first,last){
	if(first.value.length){
		document.getElementById(last).focus();
	}
}
function buttonClick(){
	window.location = ('https://social.polingsays.com/posts/' + document.getElementById("ist").value + document.getElementById("sec").value + document.getElementById("third").value + document.getElementById("fourth").value + document.getElementById("fifth").value)}