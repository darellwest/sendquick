import $ from "jquery";

class MobileMenu{
	 constructor(){
		this.menuIcon = $(".site-header__menu-icon");
		this.menuContent = $(".site-header__menu-content");
		this.events();
	}

	events(){
		this.menuIcon.click(this.toggleMenu.bind(this));
		//console.log(this);
	}

	toggleMenu(){
		// console.log(this);
		/*the this keyword below this line automatically refers to the DOM object
		menuIcon(element), this is to say that any this keyword in a callback fuction i.e
		a function in a fuction or method called within a fuction refers to the 
		dom object selected by the main fuction and not the dom object selected
		by the call back function. so to avoid this we bind the callback function
		this like this .bind(this)*/

		this.menuContent.toggleClass("site-header__menu-content--visible");
		this.menuIcon.toggleClass("site-header__menu-icon--close-x");
	}
}

export default MobileMenu;