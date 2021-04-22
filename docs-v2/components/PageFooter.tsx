import React from 'react'
import { openConsentManager } from '@segment/consent-manager'
// import SegmentLogoWordmark from './SegmentLogoWordmark'
import { majorScale, Pane, Text, Link, Heading} from 'evergreen-ui'

// const NativeLink = (props: any) => (
//   <a target="_blank" rel="noopener noreferrer" {...props} />
// )

interface Props {}

const PageFooter: React.FC<Props> = () => {
  return (
    <Pane
      is="footer"
      width="100%"
      height={majorScale(8)}
      borderTop="muted"
      paddingX={majorScale(5)}
      paddingY={majorScale(3)}
      marginTop={majorScale(5)}
      display="flex"
      justifyContent="space-between"
    >
      <Pane 
        display="flex"
        alignItems="center"
      >
        <Pane 
          is="img"
          width={80}
          src="/segment-logo.svg"
          marginRight={majorScale(5)}
        />
        <Text size={300} color="muted">© {new Date().getFullYear()}, Segment.io, Inc.</Text>
      </Pane>
      <Pane>
        <Text size={300} color="muted">
          Evergreen is an open source project developed at Segment.{' '}
          <Link size={300} color="neutral" href="https://segment.com/jobs/" target="_blank">We’re hiring designers and engineers!</Link>
        </Text>
      </Pane>
    </Pane>

    // <footer className="PageFooter bg-dark clearfix">
    //   <div className="Container PageFooter-inner">
    //     <div className="PageFooter-left">
    //       <SegmentLogoWordmark white width={100} height="auto" />
    //     </div>
    //     <div className="PageFooter-right">
    //       <p>
    //         Evergreen is an open source project developed at Segment.{' '}
    //         <NativeLink
    //           href="https://segment.com/jobs/"
    //           className="focus-ring-link-white"
    //         >
    //           We’re hiring designers and engineers!
    //         </NativeLink>
    //       </p>
    //     </div>
    //   </div>
    //   <div className="Container PageFooter-inner">
    //     <div className="PageFooter-left">
    //       <button type="button" onClick={openConsentManager}>
    //         Website Data Collection Preferences
    //       </button>
    //     </div>

    //     <div className="PageFooter-right">
    //       <p>© {new Date().getFullYear()}, Segment.io, Inc.</p>
    //     </div>
    //   </div>
    // </footer>
  )
}

export default PageFooter
