// Import colorsDocs from '../../packages/evergreen-colors/docs/'
// import colorUtilsDocs from '../../packages/evergreen-color-utils/docs/'
// import sharedStylesDocs from '../../packages/evergreen-shared-styles/docs/'
// import typographyDocs from '../../packages/evergreen-typography/docs/'
// import layersDocs from '../../packages/evergreen-layers/docs/'
import buttonsDocs from '../../../packages/evergreen-buttons/docs'
// Import iconsDocs from '../../packages/evergreen-icons/docs/'
// import autocompleteDocs from '../../packages/evergreen-autocomplete/docs/'
// import comboboxDocs from '../../packages/evergreen-combobox/docs/'
// import badgesDocs from '../../packages/evergreen-badges/docs/'
// import selectDocs from '../../packages/evergreen-select/docs/'
// import popoverDocs from '../../packages/evergreen-popover/docs/'
// import portalDocs from '../../packages/evergreen-portal/docs/'
// import textInputDocs from '../../packages/evergreen-text-input/docs/'
// import textareaDocs from '../../packages/evergreen-textarea/docs/'
// import checkboxDocs from '../../packages/evergreen-checkbox/docs/'
// import tabsDocs from '../../packages/evergreen-tabs/docs/'
// import avatarDocs from '../../packages/evergreen-avatar/docs/'
// import tooltipDocs from '../../packages/evergreen-tooltip/docs/'
// import imageDocs from '../../packages/evergreen-image/docs/'
// import segmentedControlDocs from '../../packages/evergreen-segmented-control/docs/'
// import spinnerDocs from '../../packages/evergreen-spinner/docs/'
// import searchInputDocs from '../../packages/evergreen-search-input/docs/'
// import tableDocs from '../../packages/evergreen-table/docs/'
// import sideSheetDocs from '../../packages/evergreen-side-sheet/docs/'
// import radioDocs from '../../packages/evergreen-radio/docs/'
// import dialogDocs from '../../packages/evergreen-dialog/docs/'
// import cornerDialogDocs from '../../packages/evergreen-corner-dialog/docs/'
// import alertDocs from '../../packages/evergreen-alert/docs/'

const map = {
  buttons: buttonsDocs
}

export default function getComponent(name) {
  return map[name]
}
