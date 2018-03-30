export default (
	feature,
	mapdata
) => {
 switch(mapdata) {
 	case 'bike':
 		return feature.properties.bikeName
 	case 'building':
 		return '<strong>' + feature.properties.buildingName + '</strong>'
 	default:
 		return 'pending'
 }
}