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
 	case 'org':
 		return "<strong>" + feature.properties.orgName + "</strong><br/>" + feature.properties.orgCollege + "<br/><br/>Floor: " + feature.properties.orgFloor + "<br/>Room: " + feature.properties.orgRoom + "<br/>Landmark: " + feature.properties.orgLandmark
 	case 'parking':
 		return "<strong>Parking Lot: </strong>" + feature.properties.ParkingLotName + "<br/><strong>Capacity: </strong>" + feature.properties.ParkingLotCapacity
 	case 'gym':
 		return "<strong>" + feature.properties.gymName + "</strong><br/>" + feature.properties.gymCN + "<br/><br/>" + feature.properties.gymDescription + "<br/><br/>Schedule: " + feature.properties.gymSchedule + "<br/>Monthly Rate: " + feature.properties.gymMrate + "<br/>Daily Rate: " + feature.properties.gymDrate + "<br/>Promo: " + feature.properties.gymPromo
 	case 'wifi':
 		return "<strong>Access Points: </strong>" + feature.properties.wifiAccess + "<br/>" + feature.properties.wifiLocation + "<br/><br/><strong>Average Speed: </strong> 35-50Mbps(DILNET-WIFI); 5Mbps(WiFi@UPD)<br/><strong>Restrictions: </strong><br/>(DILNET)<br/>DilNet Account through portal.upd.edu.ph<br/>(ENGGNET)<br/>DilNet Account through 10.150.0.10/tohttps.jsp<br/>(WiFi@UPD)<br/>none"
 	case 'utility':
 		if (feature.properties.utilityType !== "Computer Shop") {
 			return "<strong>" + feature.properties.utilityName + "</strong><br/><strong>Type: </strong>" + feature.properties.utilityType
 		} else {
 			return "<strong>" + feature.properties.utilityName + "</strong><br/><strong>Type: </strong>" + feature.properties.utilityType + "<br/><br/><strong>Rates: </strong>" + feature.properties.utilityDescription
 		}
 	case 'bucket':
 		return "<strong>" + feature.properties.bucketActivity + "</strong><br/>" + feature.properties.bucketDescription + "<br/><br/>" + feature.properties.bucketAvailability
 	case 'gates':
 		return "<strong>" + feature.properties.gatesName + "</strong><br/>" + feature.properties.gatesLandmark + "<br/>" + feature.properties.gatesTime + "<br/><br/>" + feature.properties.gatesFlow + "<br/>" + feature.properties.gatesAccess + "<br/>" + feature.properties.gatesRestriction
 	case 'library':
 		return "<strong>" + feature.properties.libName + "</strong><br/><a href='" + feature.properties.libSite + "'>" + feature.properties.libSite + "</a><br/><br/><strong>Lunch Break: </strong>" + feature.properties.libBreak + "<br/><strong>Weekday Hours: </strong>" + feature.properties.libHrs + "<br/><strong>Saturday Hours: </strong>" + feature.properties.libHr
 	case 'museum':
 		return "<strong>" + feature.properties.museumName + "</strong><br/>" + feature.properties.museumAdd + "<br/><br/><strong>Description: </strong>" + feature.properties.museumDescrip + "<br/><br/><strong>Contact Details: </strong><br/>" + feature.properties.museumContact + "<br/>" + feature.properties.museumHours + "<br/><a href='" + feature.properties.museumSite + "'>" + feature.properties.museumSite + "</a>"
 	case 'admin':
 		if (feature.properties.officeName) {
 			return "<strong>" + feature.properties.officeName + "</strong><br/><a href='" + feature.properties.officeSite + "'>" + feature.properties.officeSite + "</a><br/><br/>" + feature.properties.officeNum + "<br/>" + feature.properties.officeEmail
 		} else {
 			return "<strong>"+ feature.properties.adminName + "</strong><br/>" + feature.properties.adminAdd + "<br/><br/><strong>Headed by: </strong>" + feature.properties.vcName + "<br/><strong>Contact No: </strong>" + feature.properties.adminNum + "<br/><strong>Email: </strong>" + feature.properties.adminEmail
 		}
 	default:
 		return "pending"
 }
}