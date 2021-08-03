class SlideCarousel{
	constructor(carouselsubitemclassname, carouselContainerId){
		this.carouselContainer = document.getElementById(carouselContainerId);
		this.containerRight = this.carouselContainer.getBoundingClientRect().right;
		this.anyRight = true;
		this.checkIf =  true;
		this.addOne = 0;
		this.items = document.getElementsByClassName(carouselsubitemclassname);
		this.itemsLen = this.items.length;
		this.itemsLastIndex = this.itemsLen - 1;
		this.itemInView = this.items[0];
		this.itemInViewPos = "";
		this.itemInViewNext = "";
		this.itemInViewNextPos = "";
		this.itemInViewPrev = "";

		this.events();
	}

	events(){
		this.initiateSlider();
	}

	initiateSlider(){
		setInterval(this.slider.bind(this), 4000);
	}

	
	slider(){
		this.itemInViewPos = this.itemInView.dataset.pos;
		this.itemInView.classList.add("slide-carousel__item--left");
		this.itemInViewPrev = this.itemInView;

		this.itemInViewNextPos = parseInt(this.itemInViewPos) + 1;
		this.itemInViewNext = this.items[this.itemInViewNextPos];
		if(this.itemInViewNextPos > this.itemsLastIndex){
			this.itemInViewNextPos = 0;
		}

		this.itemInViewNext = this.items[this.itemInViewNextPos];
		this.itemInViewNext.style.opacity = "1";
		this.itemInViewNext.classList.remove("slide-carousel__item--middle");
		this.itemInViewNext.classList.remove("slide-carousel__item--left");
		this.itemInViewNext.classList.add("slide-carousel__item--middle");
		this.itemInView = this.itemInViewNext;	

		if(this.itemInViewNextPos == this.itemsLastIndex && this.checkIf){
			this.checkIf = false;
			this.anyRight = false;
		}

		if(!this.anyRight){

			if(this.itemInViewNextPos == this.itemsLastIndex){
				this.items[0].style.opacity = "0"; 
				this.items[0].classList.remove("slide-carousel__item--middle");
				this.items[0].classList.remove("slide-carousel__item--left");
				this.items[0].classList.add("slide-carousel__item--right");
			}else{
				this.addOne = this.items[this.itemInViewNextPos + 1];
				this.addOne.style.opacity = "0"; 
				this.addOne.classList.remove("slide-carousel__item--middle");
				this.addOne.classList.remove("slide-carousel__item--left");
				this.addOne.classList.add("slide-carousel__item--right");
			}	
		}	
	}

}


export default SlideCarousel;