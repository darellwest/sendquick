class MobileMenu{
	 constructor(){
		this.menuOpen = document.getElementById("menu-icon");
		this.menuContent = document.getElementById("menu-content");
		this.phoneMenu = document.getElementById("mobile-menu");
		this.menuClose = document.getElementById("x-close");
		this.events();
	}

	events(){
		this.menuOpen.addEventListener("click", this.openMobileMenu.bind(this));
		this.menuClose.addEventListener("click", this.closeMobileMenu.bind(this));
	}

	openMobileMenu(e){
		console.log(e);
		this.phoneMenu.classList.add("mobile-menu--show");
	}

	closeMobileMenu(){
		this.phoneMenu.classList.remove("mobile-menu--show");
	}
}

export default MobileMenu;