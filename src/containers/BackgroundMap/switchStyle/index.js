import jeepStyle from './jeepStyle'
import bucketStyle from './bucketStyle'

let x
export default (
	feature,
	mapdata
) => {
	switch(mapdata) {
		case 'jeep':
			x = jeepStyle(feature)
			return x
		case 'bucket':
			x = bucketStyle(feature)
			return x
		default:
			return true
	}
}