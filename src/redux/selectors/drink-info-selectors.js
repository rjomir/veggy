import { createSelector } from 'reselect'
import { getInfo, getId } from './common-selectors'

const drinkInfoSelector = createSelector(
  getInfo,
  getId,
  (info, id) => {
    if (info && id === info.idDrink) {
      return info
    }
    return null
  },
)

export default drinkInfoSelector
