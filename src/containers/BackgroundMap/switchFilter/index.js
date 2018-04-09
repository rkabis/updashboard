import jeepFilter from './jeepFilter'
import buildingFilter from './buildingFilter'
import orgFilter from './orgFilter'
import rentalFilter from './rentalFilter'
import utilityFilter from './utilityFilter'
import adminFilter from './adminFilter'
import libraryFilter from './libraryFilter'
import toiletFilter from './toiletFilter'

let x

export default (
	feature,
	mapdata,
	filterValue
) => {
	switch(mapdata) {
		case 'jeep':
			x = jeepFilter(feature, filterValue)
			return x
		case 'building':
			x = buildingFilter(feature, filterValue)
			return x
		case 'org':
			x = orgFilter(feature, filterValue)
			return x
		case 'rental':
			x = rentalFilter(feature, filterValue)
			return x
		case 'utility':
			x = utilityFilter(feature, filterValue)
			return x
		case 'admin':
			x = adminFilter(feature, filterValue)
			return x
		case 'toilet':
			x = toiletFilter(feature, filterValue)
			return x
		case 'library':
			x = libraryFilter(feature, filterValue)
			return x
		default:
			return true
	}
}