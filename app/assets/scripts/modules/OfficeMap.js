class OfficeMap{
	constructor(){
		this.initMap();
	}

	// Initialize and add the map
	initMap() {
	  // The location of Uluru
	  const abuja = { lat: 9.056097099999999, lng: 7.481895999999999 };
	  // The map, centered at Uluru
	  const map = new google.maps.Map(document.getElementById("map"), {
	    zoom: 8,
	    center: abuja,
	  });
	  // The marker, positioned at Uluru
	  const marker = new google.maps.Marker({
	    position: abuja,
	    map: map,
	  });
	}
}

export default OfficeMap;