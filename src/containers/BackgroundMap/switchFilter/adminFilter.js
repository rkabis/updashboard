export default (
	feature,
	filterValue
) => {
	switch(filterValue) {
		case '':
			return true
		default:
			return ((filterValue === feature.properties.adminName) || (filterValue === feature.properties.officeName) ? true : false)
	}
}