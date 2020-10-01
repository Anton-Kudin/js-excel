import {defaultstyles, defaultTitle} from '@/constants'
import {clone} from '@core/utils'

const defaultState = {
  title: defaultTitle,
  rowState: {},
  colState: {},
  dataState: {},
  stylesState: {},
  currentText: '',
  currentStyles: defaultstyles,
  openedDate: new Date().toJSON(),
}

const normalize = state => ({
  ...state,
  currentStyles: defaultstyles,
  currentText: '',
})

// export const initialState = storage('excel-state')
//   ? normalize(storage('excel-state'))
//   : defaultState

export function normalizeInitialState(state) {
  return state ? normalize(state) : clone(defaultState)
}
