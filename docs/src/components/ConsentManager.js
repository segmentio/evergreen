import React from 'react'
import inRegions from '@segment/in-regions'
import { ConsentManager, CloseBehavior } from '@segment/consent-manager'
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

  const closeBehavior = inCA()
    ? () => caDefaultPreferences
    : inEU()
    ? CloseBehavior.DENY
    : CloseBehavior.ACCEPT

  const initialPreferences = inCA()
    ? caDefaultPreferences
    : inEU()
    ? euDefaultPreferences
    : undefined

  const bannerContent = (
    <span>
      We use cookies (and other similar technologies) to collect data to improve
      your experience on our site. By using our website, you’re agreeing to the
      collection of data as described in our{' '}
      <a
        href="https://segment.com/docs/legal/website-data-collection-policy/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Website Data Collection Policy
      </a>
      .
    </span>
  )
  const bannerSubContent = 'You can change your preferences at any time.'
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
