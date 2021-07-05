class ZoomOutOnScroll{
	constructor(theSectionId, eachElementclassName, bodyId){
		this.elementSection = document.getElementById(theSectionId);
		this.body = document.getElementById(bodyId);
		this.allElements = document.getElementsByClassName(eachElementclassName);
		this.allElementsLength = this.allElements.length;
		this.windowContentAreaHeight = window.innerHeight || document.documentElement.clientHeight ||
		document.body.clientHeight;
		this.counter = "";
		this.events();
	}

	events(){
		this.body.onscroll = this.zoomElementOut.bind(this);
	}

	zoomElementOut(e){
		for(this.counter = 0; this.counter < this.allElementsLength; this.counter++){
			let topWindowToElementBottom, elementHeight, pointToReveal, presentElement, isClass;
			presentElement = this.allElements[this.counter]; 
			isClass = !this.allElements[this.counter].classList.contains("zoom-out"); 
			topWindowToElementBottom = this.allElements[this.counter].getBoundingClientRect().bottom;
			elementHeight = this.allElements[this.counter].getBoundingClientRect().height;
			pointToReveal = topWindowToElementBottom - (elementHeight/5);
			if(this.windowContentAreaHeight  >  pointToReveal){	
				if(isClass){
					presentElement.classList.add("zoom-out");
				}
			}
		}
	}


}

export default ZoomOutOnScroll;