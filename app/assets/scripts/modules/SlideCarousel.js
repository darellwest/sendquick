class SlideCarousel{
	constructor(carouselsubitemclassname, carouselContainerId){
		this.carouselContainer = document.getElementById(carouselContainerId);
		this.items = document.getElementsByClassName(carouselsubitemclassname);
		this.itemsLen = this.items.length;
		this.itemsLastIndex = this.itemsLen - 1;
		this.activeTrans = [];	
		this.itemInView = this.items[0];
		this.itemInViewPos = "";
		this.itemInViewNext = "";
		this.itemInViewNextPos = "";
		this.itemInViewPrev = "";
		
		this.events();
	}

	events(){
		this.computInitialTrans();
		this.initiateSlider();
	}

	computInitialTrans(){
		let counter, initial;
		initial = 0;
		for(counter = 0; counter < this.itemsLen; counter++){
			if(counter > 1){
				initial -= 100;
				this.items[counter].style.transform = "translateX("+initial+"%"+")";
			}
			this.activeTrans.push(initial);
		}
	}

	initiateSlider(){
		setInterval(this.slider.bind(this), 1500);
	}

	slider(){
		this.itemInViewPos = this.itemInView.dataset.pos;
		this.activeTrans[this.itemInViewPos] -= 100;
		this.itemInView.style.transform ="translateX("+this.activeTrans[this.itemInViewPos]+"%"+")";
		this.itemInViewPrev = this.itemInView;
		this.itemInViewPrev.dataset.side = "left";

		this.itemInViewNextPos = parseInt(this.itemInViewPos) + 1;
		if(this.itemInViewNextPos > this.itemsLastIndex){
			this.itemInViewNextPos = 0;
			this.itemInViewNext = this.items[this.itemInViewNextPos];
			this.activeTrans[this.itemInViewNextPos] = 100;
			this.itemInViewNext.style.transform ="translateX("+this.activeTrans[this.itemInViewNextPos]+"%"+")";
			this.itemInViewNext.dataset.side = "right";
		}

		// console.log(this.itemInViewNextPos);
		this.itemInViewNext = this.items[this.itemInViewNextPos];
		if(this.itemInViewNext.dataset.side == "left"){
			this.activeTrans[this.itemInViewNextPos] += 200;
			this.itemInViewNext.style.transform ="translateX("+this.activeTrans[this.itemInViewNextPos]+"%"+")";
			this.itemInViewNext.dataset.side = "right";
		}

		this.activeTrans[this.itemInViewNextPos] -= 100;
		this.itemInViewNext.style.transform ="translateX("+this.activeTrans[this.itemInViewNextPos]+"%"+")";
		this.itemInViewNext.dataset.side = "middle";
		this.itemInView = this.itemInViewNext;
	}
}


export default SlideCarousel;