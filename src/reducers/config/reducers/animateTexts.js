import {
  UPDATE_WIDGET_CONFIG
} from '@actions/types'

import WidgetType from '@helpers/enum/WidgetType'
import update from 'immutability-helper'

import { updateWidget } from '../commons/widget'

const defaultConfig = {
  name: null,
  parent: null,
  attributes: [
    'value',
    'visible'
  ],
  value: {
    value: '',
    complex: false,
    provider: null,
    function: null,
    typeof: 'string'
  },
  visible: {
    value: true,
    complex: false,
    provider: null,
    function: null,
    typeof: 'boolean'
  }
}

const type = WidgetType.ANIMATE_TEXT

const addAnimateText = (state, payload) => {
  if (type !== payload.widget.type) { return state }
  let config = update(defaultConfig, {
    id: {$set: payload.widget.id},
    name: {$set: payload.widget.name},
    parent: {$set: payload.widget.parent}
  })
  return update(state, { [payload.widget.id]: {$set: config} })
}

const updateAnimateText = (state, payload) => {
  if (type !== payload.widget.type) { return state }
  if (state[payload.widget.id] === undefined) {
    state = addAnimateText(state, payload)
  }
  state = updateWidget(state, payload, type)
  return state
}

export default function (state = {}, action) {
  switch (action.type) {
    case UPDATE_WIDGET_CONFIG:
      return updateAnimateText(state, action.payload)
  }
  return state
}

export const getAll = state => state
export const get = (state, id) => {
  if (state[id] === undefined) {
    return defaultConfig
  }
  return state[id]
}