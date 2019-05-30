let dropdownbutton = document.getElementsByClassName("dropdownbutton")[0];

let dropdownlist = document.getElementsByClassName("dropdownlist")[0];


dropdownbutton.onclick = function(){
	//open dropdown //this ko satta ma dropdownbutton lekhda ni huncha
	
	 if(this.className.indexOf("active")== -1){
	 	this.classList.add("active");
	 	dropdownlist.classList.add("active");
	 }
	 else{
	 	this.classList.remove("active");
	 	dropdownlist.classList.remove("active");
	 	
	 }
}