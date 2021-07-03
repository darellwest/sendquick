class ImageFadeIn{
	constructor(){
		this.deliverMan = document.getElementById("deliver-man");
		this.count = 0;
		this.deliArr = ["about-us__deliveryman-con--1", "about-us__deliveryman-con--2",
		"about-us__deliveryman-con--3", "about-us__deliveryman-con--4",
		"about-us__deliveryman-con--5","about-us__deliveryman-con--6",
		"about-us__deliveryman-con--7"];
		this.events();
	}

	events(){
		if(this.deliverMan){
			this.callFadeToggle();
		}
	}

	callFadeToggle(){
		setInterval(this.fadeToggle.bind(this), 4000);
	}

	fadeToggle(){
		this.deliverMan.classList.add(this.deliArr[this.count]);
		if(this.count > 6){
			this.count = 0;
			this.deliverMan.className = "about-us__deliveryman-con";
		}else{
			this.count++;
		}
	}
}

export default ImageFadeIn;