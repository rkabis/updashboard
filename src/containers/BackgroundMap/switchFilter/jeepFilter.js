export default (
	feature,
	filterValue
) => {
	let temp = filterValue.includes(feature.properties.routeName)
	return temp
}