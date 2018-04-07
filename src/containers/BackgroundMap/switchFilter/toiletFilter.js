export default (
	feature,
	filterValue
) => {
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

