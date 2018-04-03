export default (
	feature
) => {
	switch(feature.properties.routeName) {
		case 'Katipunan':
			return true
		default:
			return false
	}
}