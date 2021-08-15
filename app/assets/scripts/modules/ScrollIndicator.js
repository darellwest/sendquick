class ScrollIndicator{
	constructor(indicatorId){
		this.winScroll = document.body.scrollTop || document.documentElement.scrollTop;
		this.height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
		this.scrolled = (this.winScroll / this.height) * 100;
		this.indicator = indicatorId;
		this.events();
	}
	events(){
		window.addEventListener("scroll", this.indicate.bind(this));
	}
	indicate(){
		this.winScroll = document.body.scrollTop || document.documentElement.scrollTop;
		this.height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  		this.scrolled = (this.winScroll / this.height) * 100;
  		document.getElementById(this.indicator).style.width = this.scrolled + "%";
	}
}

export default ScrollIndicator;