let dropdownbutton = document.getElementsByClassName("dropdownbutton");
let dropdownlist = document.getElementsByClassName("dropdownlist");


Array.from(dropdownbutton).forEach(function(button, index) {
	button.onclick = function(){
		//open dropdown //this ko satta ma dropdownbutton lekhda ni huncha

		 if(this.className.indexOf("active")== -1){
		 	this.classList.add("active");
		 	dropdownlist[index].classList.add("active");
		 }
		 else{
		 	this.classList.remove("active");
		 	dropdownlist[index].classList.remove("active");
		 	
		 }
	}
})

