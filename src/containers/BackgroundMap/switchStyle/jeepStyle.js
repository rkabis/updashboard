export default (
	feature
) => {
	if (feature.properties.routeName === 'Katipunan') {
		return {color: '#C6010E'}
	}
	if (feature.properties.routeName === "IKOT") {
		return {color: '#F4670E'}
	}
	if (feature.properties.routeName === "SM North" || feature.properties.routeName === "Philcoa" || feature.properties.routeName === "Pantranco") {
		return {color: '#0B9B00'}
	}
	if (feature.properties.routeName === "TOKI") {
		return {color: '#FDCC00'}
	}
}