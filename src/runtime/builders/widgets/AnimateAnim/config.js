import configureStore from '@src/configureStore'
import { configGetAllAnimateAnims } from '@reducers'

import functionalize from '../functionalize'
import AnimateAnimMode from '@helpers/AnimateAnimMode'

export default () => {
  const anims = configGetAllAnimateAnims(configureStore().store.getState())

  const config = {}
  Object.entries(anims).forEach(([id, configuration]) => {
    if (config[configuration.parent] === undefined) {
      config[configuration.parent] = {
        controlled: {}
      }
    }

    configuration.attributes.forEach(attribute => {
      configuration = functionalize(configuration, attribute)
    })

    if (configuration.mode === AnimateAnimMode.CONTROLLED) {
      config[configuration.parent].controlled[id] = configuration
    }
  })

  return config
}
