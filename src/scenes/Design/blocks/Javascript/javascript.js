import addJavascript from './Components/Javascript'
import addJavascriptID from './Traits/JavascriptID'

import { JAVASCRIPT } from './types.js'

export default editor => {
  addJavascript(editor)
  addJavascriptID(editor)

  const blockManager = editor.BlockManager

  blockManager.add('javascript-block', {
    label: `
    <svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <g shape-rendering="auto">
        <path d="m1.8301 1.7676v20.465h20.34v-20.465zm0.52734 0.52734h19.285v19.41h-19.285z" color-rendering="auto" dominant-baseline="auto" image-rendering="auto" solid-color="#000000" style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;isolation:auto;mix-blend-mode:normal;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"/>
      </g>
      <g transform="scale(1.0035 .99654)" stroke-width=".73262" aria-label="JS">
        <path d="m9.364 14.636q-0.67206 0-1.1566-0.17974v-1.055q0.3751 0.16411 0.89869 0.16411 0.45325 0 0.64862-0.17974 0.19537-0.18755 0.19537-0.61736v-3.2431h1.2582v3.4775q0 0.7971-0.46888 1.2191-0.46888 0.41418-1.3754 0.41418z"/>
        <path d="m13.568 14.636q-0.50014 0-0.93776-0.07815-0.42981-0.07033-0.74239-0.211v-1.0706q0.35166 0.15629 0.76584 0.25007 0.41418 0.08596 0.78928 0.08596 0.50795 0 0.71895-0.08596 0.211-0.09378 0.211-0.3751 0-0.19537-0.1094-0.30477-0.10941-0.11722-0.33603-0.19537-0.21881-0.08596-0.72676-0.23444-0.52358-0.15629-0.82835-0.34384-0.29696-0.19537-0.42981-0.46106-0.13285-0.27351-0.13285-0.67988 0-0.72676 0.51577-1.1019 0.52358-0.38292 1.5239-0.38292 0.41418 0 0.82835 0.062517 0.42199 0.062517 0.6955 0.15629v1.0784q-0.64862-0.25788-1.3363-0.25788-0.47669 0-0.71113 0.09378-0.23444 0.08596-0.23444 0.34384 0 0.16411 0.09378 0.2657 0.09378 0.09378 0.29696 0.17192 0.211 0.07033 0.65643 0.18755 0.60173 0.16411 0.92994 0.39073 0.33603 0.22662 0.46106 0.52358 0.13285 0.28914 0.13285 0.68769 0 0.68769-0.5314 1.0862t-1.5629 0.39855z"/>
      </g>
    </svg>
    <div class="gjs-block-label">Javascript</div>
    `,
    content: {
      type: JAVASCRIPT,
      style: {
      },
      removable: true,
      activeOnRender: 1
    }
  })
}
