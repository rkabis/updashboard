import jeepFilter from './jeepFilter'

export default (
	feature,
	mapdata
) => {
	switch(mapdata) {
		case 'jeep':
			let x = jeepFilter(feature)
			return x
		default:
			return true
	}
}