import React from 'react'
import inRegions from '@segment/in-regions'
import { ConsentManager } from '@segment/consent-manager'
import segmentWriteKey from '../../segmentWriteKey'

export default () => {
  const inCA = inRegions(['CA'])
  const inEU = inRegions(['EU'])
  const shouldRequireConsent = inRegions(['CA', 'EU'])
  const caDefaultPreferences = {
    advertising: false,
    marketingAndAnalytics: true,
    functional: true
  }

  const euDefaultPreferences = {
    advertising: false,
    marketingAndAnalytics: false,
    functional: false
  }

  let closeBehavior
  if (inCA()) {
    closeBehavior = () => caDefaultPreferences
  } else if (inEU()) {
    closeBehavior = 'deny'
  } else {
    closeBehavior = 'accept'
  }

  let initialPreferences
  if (inCA()) {
    initialPreferences = caDefaultPreferences
  } else if (inEU()) {
    initialPreferences = euDefaultPreferences
  }

  const bannerContent = (
    <span>
      We use cookies (and other similar technologies) to collect data in order
      to improve our site. You have the option to opt-in or opt-out of certain
      cookie tracking technologies.
    </span>
  )
  const bannerSubContent = 'To do so, click here.'
  const preferencesDialogTitle = 'Website Data Collection Preferences'
  const preferencesDialogContent =
    'We use data collected by cookies and JavaScript libraries to improve your browsing experience, analyze site traffic, deliver personalized advertisements, and increase the overall performance of our site.'
  const cancelDialogTitle = 'Are you sure you want to cancel?'
  const cancelDialogContent =
    'Your preferences have not been saved. By continuing to use our website, you՚re agreeing to our Website Data Collection Policy.'

  return (
    <div>
      <ConsentManager
        writeKey={segmentWriteKey}
        bannerContent={bannerContent}
        bannerSubContent={bannerSubContent}
        preferencesDialogTitle={preferencesDialogTitle}
        preferencesDialogContent={preferencesDialogContent}
        cancelDialogTitle={cancelDialogTitle}
        cancelDialogContent={cancelDialogContent}
        closeBehavior={closeBehavior}
        shouldRequireConsent={shouldRequireConsent}
        initialPreferences={initialPreferences}
      />
    </div>
  )
}
