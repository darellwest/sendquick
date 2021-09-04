// class GetCountries{
// 	//distance matrix api key AIzaSyD0_l5NV754JgMZk4nGz5KRwCRGHhLWUQ0
// 	constructor(){
		
// 		this.events();
// 	}
// 	events(){
// 		window.onload = this.getCountries;
// 	}

// 	getCountries(){
// 		let xhttp, resLength, response, counter, count, countrySelect, 
// 		countrySelectLen, optionEle, countryName;
// 		countrySelect = document.querySelectorAll(".country-select");
// 		countrySelectLen = countrySelect.length;
// 		xhttp = new XMLHttpRequest();
//  		xhttp.onreadystatechange = function(){
//     		if (this.readyState == 4 && this.status == 200){
//     			response = JSON.parse(this.responseText);
//     			resLength = response.length;
//     			for(counter = 0; counter < resLength; counter++){
//     				countryName = response[counter].name;
//     				for(count = 0; count < countrySelectLen; count++){
//     					optionEle = document.createElement("option");
// 						optionEle.value = countryName;
// 						optionEle.innerText = countryName;
// 						countrySelect[count].appendChild(optionEle);
//     				}
//     			}
//  	 		}
// 		}
// 		xhttp.open("GET", "https://restcountries.eu/rest/v2/all");
//   		xhttp.send();
// 	}
// }

// export default GetCountries;