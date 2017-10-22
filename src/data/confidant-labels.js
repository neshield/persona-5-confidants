import confidantNames from '../data/confidant-names'
import utils from '../utils'

const confidantLabels = confidantNames.map((name) => {
  return {
    value: name,
    // Specifically fix twin-wardens
    label: utils.upFirstLetter(name).replace('-w', ' W')
  }
})

export default confidantLabels
