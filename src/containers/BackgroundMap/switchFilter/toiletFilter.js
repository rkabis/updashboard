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

	if (filterValue.length === 0) {
		return true
	}

	let tempBidet = filterValue.includes('bidet')
	let tempHandsoap = filterValue.includes('handsoap')
	let verdict = true
	if (tempBidet === true && feature.properties.toiletsBidet === 'No') {
		verdict = false
	}
	if (tempHandsoap === true && feature.properties.toiletsHandsoap === 'No') {
		verdict = false
	}
	return verdict
}

