class ApiKeys{
	constructor(){
		this.apiKeyScript = document.getElementById("apikey");
		this.key;
		this.InsertScript();
	}

	InsertScript(){
		this.apiKeyScript.src = this.key;
	}
}

export default ApiKeys;