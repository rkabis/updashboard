export default (
	feature,
	mapdata
) => {
 switch(mapdata) {
 	case 'bike':
 		return "<strong>" + feature.properties.bikeName + "</strong><br/><br/>Racks: " + feature.properties.bikeRack + "<br/>Capacity: " + feature.properties.bikeCapacity + "<br/>Roof: " + feature.properties.bikeRoof
 	case 'building':
 		return feature.properties.buildingName
 	case 'jeep':
 		return "<strong>" + feature.properties.routeName + "</strong><br/>" + feature.properties.routeHours
 	case 'rental':
 		return "<strong>Name: </strong>" + feature.properties.venueName + "<br/><strong>Capacity: </strong>" + feature.properties.venueCap + "<br/><strong>Rates: </strong>" + feature.properties.venueRates
 	case 'toilet':
 		return "<strong>" + feature.properties.toiletsLocation + ", " + feature.properties.toiletsFloor + "</strong><br/>" + feature.properties.toiletsSex + "<br/><br/><strong>Amenities:</strong><br/>Working Toilets: " + feature.properties.toiletsWorkingtoilets + "<br/>Seat Cover: " + feature.properties.toiletsSeatcover + "<br/>Bidet: " + feature.properties.toiletsBidet + "<br/>Working Sinks: " + feature.properties.toiletsWorkingsinks + "<br/>Handsoap: " + feature.properties.toiletsHandsoap + "<br/>Toilet Paper: " + feature.properties.toiletsToiletpaper + "<br/>Urinals: " + feature.properties.toiletsUrinals + "<br/>Vending Machine: " + feature.properties.toiletsVendingmachine
 	default:
 		return "pending"
 }
}