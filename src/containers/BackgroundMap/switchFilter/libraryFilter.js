export default (
	feature,
	filterValue
) => {
	if (filterValue.length === 0) {
		return true
	}
	let temp = filterValue.includes(feature.properties.libName)
	return temp
}