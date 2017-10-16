import confidantNames from '../data/confidant-names'
import utils from '../utils'

const confidantLabels = confidantNames.map((name) => {
  return {
    value: name,
    label: utils.upFirstLetter(name)
  }
})

export default confidantLabels
