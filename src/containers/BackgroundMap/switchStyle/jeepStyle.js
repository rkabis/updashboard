export default (
	feature
) => {
	switch(feature.properties.routeName) {
		case 'Katipunan':
			return {color: '#C6010E'}
		case 'IKOT':
			return {color: '#F4670E'}
		case 'TOKI':
			return {color: '#FDCC00'}
		case 'SM North':
			return {color: '#0B9B00'}
		case 'Philcoa':
			return {color: '#0B9B00'}
		case 'Pantranco':
			return {color: '#0B9B00'}
		default:
			return true
	}
}