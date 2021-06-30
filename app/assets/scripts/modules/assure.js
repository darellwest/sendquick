class Assure{
	constructor(){
		this.assurance = document.getElementById('sure');
		this.home = document.getElementById('home');
		this.defState = true;
		this.sureCount = 0;
		this.sureArr   = ["hero__Aff--show", "hero__Rel--show", "hero__Acc--show"];
		this.events();
	}

	events(){
		if(this.home){
			this.assure();
		}
	}

	assure(){
		setInterval(this.sure.bind(this), 1300);
	}

	sure(){
		if(this.sureCount == 0 && this.defState){
				this.assurance.classList.remove(this.sureArr[0]);
				this.assurance.classList.add(this.sureArr[1]);
				this.sureCount ++;
				this.defState = false;
		}else if(this.sureCount == 2){
				this.assurance.classList.remove(this.sureArr[1]);
				this.assurance.classList.add(this.sureArr[2]);
				this.sureCount = 0;
		}else if(this.sureCount == 0 && !this.defState){
				this.assurance.classList.remove(this.sureArr[2]);
				this.assurance.classList.add(this.sureArr[this.sureCount]);
				this.sureCount++;
		}else{
			this.assurance.classList.remove(this.sureArr[0]);
			this.assurance.classList.add(this.sureArr[this.sureCount]);
			this.sureCount++;
		}
	}
}

export default Assure;