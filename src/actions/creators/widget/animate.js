import {
  ADD_WIDGET,
  RENAME_WIDGET,
  REMOVE_WIDGET,
  UPDATE_WIDGET,
  ANIMATE_SET_FPS,
  POPULATE_ANIMATE,
} from '@actions/types'

import generateID from '@helpers/generateID'
import WidgetType from '@enum/WidgetType'

const getAnims = (components, parent) => {
  const anims = {}
  components.anim.forEach(name => {
    const id = generateID()
    anims[id] = {
      id,
      name,
      parent,
      type: WidgetType.ANIMATE_ANIM
    }
  })
  return anims
}

const getTexts = (components, parent) => {
  const texts = {}
  components.text.forEach(name => {
    const id = generateID()
    texts[id] = {
      id,
      name,
      parent,
      type: WidgetType.ANIMATE_TEXT
    }
  })
  return texts
}

export const addAnimate = (id = null) => ({
  type: ADD_WIDGET,
  payload: {
    id: id || generateID(),
    type: WidgetType.ANIMATE
  }
})

export const updateAnimate = (id, source, hash, animateName, components) => {
  return {
    type: UPDATE_WIDGET,
    payload: {
      id,
      js: source,
      hash: hash,
      type: WidgetType.ANIMATE,
      name: animateName,
      originalName: animateName,
      anim: getAnims(components, id),
      text: getTexts(components, id)
    }
  }
}

export const renameAnimate = (model, name) => ({
  type: RENAME_WIDGET,
  payload: {
    widget: model,
    name
  }
})

export const removeAnimate = (id) => ({
  type: REMOVE_WIDGET,
  payload: {
    id,
    type: WidgetType.ANIMATE
  }
})

export const animateSetFps = (fps) => ({
  type: ANIMATE_SET_FPS,
  payload: fps
})

export const populateAnimate = (id, js, hash, root, components) => ({
  type: POPULATE_ANIMATE,
  payload: {
    id,
    type: WidgetType.ANIMATE,
    js,
    hash,
    name: root,
    originalName: root,
    anim: getAnims(components, id),
    text: getTexts(components, id)
  }
})