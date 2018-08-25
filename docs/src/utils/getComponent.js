/* eslint-disable capitalized-comments */
import colorsDocs from '../../../src/colors/docs/'
// import sharedStylesDocs from '../../src/shared-styles/docs/'
import typographyDocs from '../../../src/typography/docs/'
import layersDocs from '../../../src/layers/docs/'
import buttonsDocs from '../../../src/buttons/docs'
import autocompleteDocs from '../../../src/autocomplete/docs/'
import badgesDocs from '../../../src/badges/docs/'
import comboboxDocs from '../../../src/combobox/docs/'
import popoverDocs from '../../../src/popover/docs/'
// import portalDocs from '../../src/portal/docs/'
import textInputDocs from '../../../src/text-input/docs/'
// import textareaDocs from '../../src/textarea/docs/'
// import checkboxDocs from '../../src/checkbox/docs/'
// import tabsDocs from '../../src/tabs/docs/'
// import avatarDocs from '../../src/avatar/docs/'
import tooltipDocs from '../../../src/tooltip/docs/'
// import imageDocs from '../../src/image/docs/'
import iconDocs from '../../../src/icon/docs/'
import segmentedControlDocs from '../../../src/segmented-control/docs/'
// import spinnerDocs from '../../src/spinner/docs/'
import searchInputDocs from '../../../src/search-input/docs/'
import tableDocs from '../../../src/table/docs/'
import sideSheetDocs from '../../../src/side-sheet/docs/'
import radioDocs from '../../../src/radio/docs/'
import dialogDocs from '../../../src/dialog/docs/'
import cornerDialogDocs from '../../../src/corner-dialog/docs/'
import alertDocs from '../../../src/alert/docs/'
import toasterDocs from '../../../src/toaster/docs/'
import selectMenuDocs from '../../../src/select-menu/docs/'
import selectDocs from '../../../src/select/docs/'

const map = {
  radio: radioDocs,
  'segmented control': segmentedControlDocs,
  badges: badgesDocs,
  buttons: buttonsDocs,
  table: tableDocs,
  dialog: dialogDocs,
  alert: alertDocs,
  toaster: toasterDocs,
  layers: layersDocs,
  typography: typographyDocs,
  colors: colorsDocs,
  select: selectDocs,
  'select menu': selectMenuDocs,
  'text input': textInputDocs,
  'search input': searchInputDocs,
  autocomplete: autocompleteDocs,
  'corner dialog': cornerDialogDocs,
  'side sheet': sideSheetDocs,
  popover: popoverDocs,
  tooltip: tooltipDocs,
  combobox: comboboxDocs,
  icon: iconDocs
}

export default function getComponent(name) {
  return map[name]
}
