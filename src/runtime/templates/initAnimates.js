/* global animates */

export default function initAnimates () {
  const promises = []
  Object.entries(animates).forEach(([name, source]) => {
    // find our canvas by name
    const element = document.getElementsByName(`animate-${name}`)[0]
    if (typeof element === 'undefined') {
      return
    }

    const promise = new Promise(resolve => {
      createAnimateRuntime(name, source, element).then(animate => {
        animates[name] = animate[name]
        resolve()
      })
    })
    promises.push(promise)
  })
  return promises
}
