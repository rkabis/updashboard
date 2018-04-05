export default (
	feature,
	filterValue
) => {
	if (filterValue.length === 0) {
		return true
	}
	let tempOne = filterValue.includes(feature.properties.adminName)
	let tempTwo = filterValue.includes(feature.properties.officeName)
	return (tempTwo || tempOne ? true : false)
}