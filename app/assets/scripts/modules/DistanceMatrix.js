class DistanceMatrix{
	constructor(){
		this.events();
	}
	events(){
		this.quoteBtn.addEventListener("click", this.distanceBetween.bind(this));
	}
	distanceBetween(){
		let xhttp, quoteBtn, fromVal, toVal;
		quoteBtn = document.getElementById("get-quote");
		fromVal = document.getElementById("from-country").value;
		toVal = document.getElementById("to-country").value;

		if(fromVal != "select" && toVal != "select"){
			xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function(){
    			if (this.readyState == 4 && this.status == 200){
    				response = JSON.parse(this.responseText);
 	 			}
			}
			xhttp.open("GET", "https://restcountries.eu/rest/v2/all");
  			xhttp.send();
		}else{
			alert("Please select two countries");
		}
	}
}