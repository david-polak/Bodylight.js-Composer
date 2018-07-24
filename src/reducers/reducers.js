import { combineReducers } from 'redux'
import models from './models'
import animates from './animates'
import defaultModelOptions from './defaultModelOptions'
import configurationScreen from './configurationScreen'
import activeScreen from './activeScreen'
import selectedWidget from './selectedWidget'

import { NEW_PROJECT } from '@actions/types'

const reducers = combineReducers({
  models,
  animates,
  defaultModelOptions,
  configurationScreen,
  activeScreen,
  selectedWidget
})

const stateScrubberReducer = (state, action) => {
  if (action.type === NEW_PROJECT) {
    state = undefined
  }

  return reducers(state, action)
}

export default stateScrubberReducer
