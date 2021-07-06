class GrowRightOnScroll{
	constructor(eachElementclassName, bodyId){
		this.body = document.getElementById(bodyId);
		this.allElements = document.getElementsByClassName(eachElementclassName);
		this.allElementsLength = this.allElements.length;
		this.windowContentAreaHeight = window.innerHeight || document.documentElement.clientHeight ||
		document.body.clientHeight;
		this.counter = "";
		this.events(eachElementclassName);
	}

	events(x){
		window.addEventListener("scroll", this.growRight.bind(this));
	}

	growRight(e){
		for(this.counter = 0; this.counter < this.allElementsLength; this.counter++){
			let topWindowToElementBottom, elementHeight, pointToReveal, presentElement, isClass;
			presentElement = this.allElements[this.counter]; 
			isClass = !this.allElements[this.counter].classList.contains("grow-right"); 
			topWindowToElementBottom = this.allElements[this.counter].getBoundingClientRect().bottom;
			elementHeight = this.allElements[this.counter].getBoundingClientRect().height;
			pointToReveal = topWindowToElementBottom - (elementHeight/5);
			if(this.windowContentAreaHeight  >  pointToReveal){	
				if(isClass){
					presentElement.classList.add("grow-right");
				}
			}
		}
	}
}

export default GrowRightOnScroll;