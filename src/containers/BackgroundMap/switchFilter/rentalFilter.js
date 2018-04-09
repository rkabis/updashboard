export default (
	feature,
	filterValue
) => {
	if (filterValue.length === 0) {
		return true
	}
	if (filterValue[0] <= feature.properties.venueCap) {
		return true
	}
}