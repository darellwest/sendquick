class QuotePrice{
	constructor(){
		this.chargeRate = {Air: 400, Sea: 300, Land: 200, Express: 800, Normal: 200};
		this.submitCick = document.getElementById("get-quote");
		this.closeQuote = document.getElementsByClassName("fa-times-circle")[0];
		this.quoteModal = document.getElementById("quote-modal");
		this.spinner = document.getElementsByClassName("fa-spinner")[0];
		this.Urgency;
		this.freightType;
		this.quoteNotify = document.getElementById("quote-notify");
		this.alertBox = document.getElementsByClassName("quote-modal__alert-box")[0];
		this.success = document.getElementsByClassName("quote-modal__success")[0];
		this.failure = document.getElementsByClassName("quote-modal__failure")[0];
		this.successQuote = document.getElementsByClassName("quote-modal__success--quote")[0];
		this.promise;
		this.isNotValid;
		this.allInputs;
		this.fromAddress;
		this.toAddress;
		this.distance;
		this.totalCharge;
		this.events();
	}

	events(){
		this.submitCick.addEventListener("click", this.call.bind(this));
		this.closeQuote.addEventListener("click", this.closeQuotePrice.bind(this));
		google.maps.event.addDomListener(window, 'load', this.autoCompleteInput());
	}

	autoCompleteInput(){
        this.fromAddress = new google.maps.places.Autocomplete(document.getElementById('from-country'));
        this.toAddress = new google.maps.places.Autocomplete(document.getElementById('to-country'));
        google.maps.event.addListener(this.fromAddress, 'place_changed', this.autoCompleteFrom.bind(this));
        google.maps.event.addListener(this.toAddress, 'place_changed', this.autoCompleteTo.bind(this));
    }
   
    autoCompleteFrom(){
    	this.fromAddress = this.fromAddress.getPlace().formatted_address;
         // this.fromAddress = from_place.formatted_address;
         //.replace(/\s+/g,"+")
         console.log(this.fromAddress.length);
    }

    autoCompleteTo(){
    	this.toAddress = this.toAddress.getPlace().formatted_address;
    	//replace(/\s+/g,"+")
         // this.toAddress = this.toPlaces.formatted_address;
    }

    closeQuotePrice(){
    	this.quoteModal.classList.remove("quote-modal--show");
    	window.location.reload();
    }

    calculate(){
    	var toAddress, fromAddress;
    	toAddress = this.toAddress;
    	fromAddress = this.fromAddress;
    	// console.log(this.fromAddress + "as at calculate function");
    	return new Promise(function(resolve, reject){
    		let xhttp, response, baseLink, i, geoPara;
    		geoPara = [];
			baseLink = "https://maps.googleapis.com/maps/api/geocode/json?address=";
			for(i = 0; i < 2; i++){	 
				// to_address = this.toAddress.replace(/\s+/g,"+");
				// from_address = this.fromAddress.replace(/\s+/g,"+");
				// console.log(to_address);
				// console.log(from_address);
				xhttp = new XMLHttpRequest();
				xhttp.onreadystatechange = function(){
					if (this.readyState == 4 && this.status == 200){
						response = JSON.parse(this.responseText);
					
						console.log(this.response);

						geoPara.push(response.results[0].geometry.location);
						// geoPara.push(response);
					}
				}
				if(i == 0){
					xhttp.open("GET", baseLink+fromAddress+"&key=AIzaSyBgUcqDp3Qb37vgJXsgy3_NiV8DwLrt51Q");
				}else if(i == 1){
						xhttp.open("GET", baseLink+toAddress+"&key=AIzaSyBgUcqDp3Qb37vgJXsgy3_NiV8DwLrt51Q");
				}
				xhttp.send();
			}
			setTimeout(() =>{
				let geoParaLent;
				// this.spinner.style.display = "none";
				geoParaLent = geoPara.length;
				if(geoParaLent > 1){
					console.log(geoParaLent);
		  			resolve(geoPara);
				}else{
		  			reject();
				}	
			}, 6000);
    	});
    }
    // promiseTimeout(){
    	
    // }

    checkIt(){
		return this.allInputs.some((item) => {
			return item == "Select" || item == undefined;
		});
	}

    call(e){
    	e.preventDefault();
    	this.Urgency = document.getElementById("urgency").value;
    	console.log(this.Urgency);
    	this.freightType = document.getElementById("freight-type").value;

    	this.allInputs = [this.fromAddress, this.toAddress, this.Urgency, this.freightType];
    	this.isNotValid = this.checkIt();
    	console.log(this.isNotValid);
    	if(this.isNotValid){
    		this.quoteNotify.classList.add("form__notify--show");
    	}else{
    		console.log("Are we running else");
    		// this.alertBox.remove("quote-modal__alert-box--show");
    		this.spinner.style.display = "block";
    		console.log(this.spinner.style.display);
    		this.quoteModal.classList.add("quote-modal--show");
    		this.promise = this.calculate();
    		this.promise.then(
    			(result) => {
    				console.log(this + " why");
    				console.log(result);
    				this.distance = google.maps.geometry.spherical.computeDistanceBetween(
    					new google.maps.LatLng(result[0].lat, result[0].lng),
    					new google.maps.LatLng(result[1].lat, result[1].lng)
    				);
    				this.distance = Math.ceil(this.distance * 0.0001);
    				this.totalCharge = this.distance + this.chargeRate[this.Urgency] + this.chargeRate[this.freightType];
    				this.success.style.display = "block";
    				this.failure.style.display = "none";
    				this.spinner.style.display = "none";
    				this.successQuote.textContent = "$"+this.totalCharge;
    				this.alertBox.classList.add("quote-modal__alert-box--show"); 
    			},
    			(error) => {
    				console.log(error + "we got");
    				this.spinner.style.display = "none";
    				this.success.style.display = "none";
    				this.failure.style.display = "block";
    				this.alertBox.classList.add("quote-modal__alert-box--show");
    			}
    		);
    	}
    }
}

export default QuotePrice;