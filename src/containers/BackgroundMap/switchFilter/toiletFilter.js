export default (
	feature,
	filterValue
) => {
	switch(filterValue) {
		case 'bidet':
			return (feature.properties.toiletsBidet !== 'No' ? true : false)
		case 'handsoap':
			return (feature.properties.toiletsHandsoap !== 'No' ? true : false)
		default:
			return true
	}
}