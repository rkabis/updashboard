export default (
	feature,
	filterValue
) => {
	// switch(filterValue) {
	// 	case '':
	// 		return true
	// 	default:
	// 		return (filterValue === feature.properties.routeName ? true : false)
	// }
	let temp = filterValue.includes(feature.properties.routeName)
	return temp
}