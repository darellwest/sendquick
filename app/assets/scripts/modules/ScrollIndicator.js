class ScrollIndicator{
	constructor(){
		this.winScroll = document.body.scrollTop || document.documentElement.scrollTop;
		this.height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
		this.scrolled = (this.winScroll / this.height) * 100;
		this.events();
	}
	events(){
		window.addEventListener("scroll", this.indicate.bind(this));
	}
	indicate(){
		this.winScroll = document.body.scrollTop || document.documentElement.scrollTop;
		this.height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  		this.scrolled = (this.winScroll / this.height) * 100;
  		document.getElementById("myBar").style.width = this.scrolled + "%";
	}
}

export default ScrollIndicator;