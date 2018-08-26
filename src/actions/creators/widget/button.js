import {
  ADD_WIDGET,
  RENAME_WIDGET
} from '@actions/types'

import generateID from '@helpers/generateID'
import WidgetType from '@helpers/enum/WidgetType'

export const addButton = () => ({
  type: ADD_WIDGET,
  payload: {
    id: generateID(),
    type: WidgetType.BUTTON
  }
})

export const renameButton = (button, name) => ({
  type: RENAME_WIDGET,
  payload: {
    widget: button,
    name
  }
})