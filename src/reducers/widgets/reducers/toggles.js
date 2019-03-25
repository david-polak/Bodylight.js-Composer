import {
  ADD_WIDGET,
  RENAME_WIDGET,
  REMOVE_WIDGET
} from '@actions/types'

import {
  addWidget,
  removeWidget,
  getWidget,
  getWidgetsForDropdown,
  renameWidget
} from '../commons/widget.js'

import WidgetType from '@enum/WidgetType'
import memoize from 'memoize-one'

const type = WidgetType.TOGGLE

export default function (state = {}, action) {
  switch (action.type) {
    case ADD_WIDGET:
      return addWidget(state, action.payload, type)
    case RENAME_WIDGET:
      return renameWidget(state, action.payload, type)
    case REMOVE_WIDGET:
      return removeWidget(state, action.payload, type)
  }
  return state
}

export const get = memoize(getWidget)
export const getAll = state => state
export const getForDropdown = memoize(getWidgetsForDropdown)
