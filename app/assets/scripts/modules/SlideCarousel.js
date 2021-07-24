class SlideCarousel{
	constructor(carouselblockclassnum){
		this.carouselBlocks = document.getElementsByClassName(carouselblockclassnum);
		this.events();
	}

	events(){
		if(this.carouselBlocks){
			setInterval(this.slider.bind(this), 1300);
		}
	}

	slider(){
		
	}


}


export default SlideCarousel;