export default (
	title
) => {
 switch(title) {
 	case 'org':
 		return 'Org Locator'
 	case 'parking':
 		return 'Parking Lots'
 	case 'gym':
 		return 'UP Gyms'
 	case 'wifi':
 		return 'WiFi Zones'
 	case 'utility':
 		return 'Utilities'
 	case 'bucket':
 		return 'Bucketlist'
 	case 'gates':
 		return 'UP Gates'
 	case 'library':
 		return 'Libraries'
 	case 'museum':
 		return 'Museums & Galleries'
 	case 'admin':
 		return 'Admin Offices'
 	default:
 		return "pending"
 }
}