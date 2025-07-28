import {
  register,
  InjectCSS,
  ReplaceElements,
  // PseudoElements,
} from "@fortawesome/fontawesome-svg-core/plugins";

//const api = register([InjectCSS, ReplaceElements, PseudoElements]);

// Because the PseudoElements plugin is not included here,
// the plugin that includes the code for supporting CSS pseudo-elements
// will not be included in the bundle.
const api = register([InjectCSS, ReplaceElements]);

import {
  faMugSaucer,
  faBeerMugEmpty,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

api.library.add(faMugSaucer, faBeerMugEmpty, faStar);

window.addEventListener("DOMContentLoaded", () => {
  api.dom.i2svg();
  api.dom.watch();
});
