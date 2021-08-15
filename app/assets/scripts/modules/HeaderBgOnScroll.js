class HeaderBgOnScroll{
	constructor(headerId, bgAdderClass){
		this.header = document.getElementById(headerId);
		this.headerHeight = this.header.getBoundingClientRect().height;
		this.isClass = this.header.classList.contains(bgAdderClass);
		this.bgClass = bgAdderClass;
		this.events();
	}

	events(){
		window.addEventListener("scroll", this.addHeaderBg.bind(this));
	}

	addHeaderBg(){
		if((document.body.scrollTop > this.headerHeight|| 
			document.documentElement.scrollTop > this.headerHeight) && !this.isClass){
			this.header.classList.add(this.bgClass);
		}else{
			this.header.classList.remove(this.bgClass);
		}
	}
}

export default HeaderBgOnScroll;