import {
  register,
  InjectCSS,
  ReplaceElements
} from '@fortawesome/fontawesome-svg-core/plugins'

const api = register([InjectCSS, ReplaceElements])

import { faMugSaucer, faBeerMugEmpty } from '@fortawesome/free-solid-svg-icons'

api.library.add(faMugSaucer, faBeerMugEmpty)

window.addEventListener('DOMContentLoaded', () => {
  api.dom.i2svg()
  api.dom.watch()
})
