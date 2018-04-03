export default (
	feature,
	sampleValue
) => {
	switch(sampleValue) {
		case '':
			return true
		default:
			return (sampleValue === feature.properties.utilityType ? true : false)
	}
}