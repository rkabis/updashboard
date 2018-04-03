import jeepStyle from './jeepStyle'

export default (
	feature,
	mapdata
) => {
	switch(mapdata) {
		case 'jeep':
			let x = jeepStyle(feature)
			return x
		default:
			return true
	}
}