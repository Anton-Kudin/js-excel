import {storage} from '@core/utils'
import {defaultstyles, defaultTitle} from '@/constants'

const defaultState = {
  title: defaultTitle,
  rowState: {},
  colState: {},
  dataState: {},
  stylesState: {},
  currentText: '',
  currentStyles: defaultstyles,
}

const normalize = state => ({
  ...state,
  currentStyles: defaultstyles,
  currentText: '',
})

export const initialState = storage('excel-state')
  ? normalize(storage('excel-state'))
  : defaultState
