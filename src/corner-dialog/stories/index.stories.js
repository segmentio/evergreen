import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import { CornerDialog } from '..'
import { Button } from '../../buttons'
import { Manager } from '../../manager'

storiesOf('corner-dialog', module).add('CornerDialog', () => (
  <Box padding={40}>
    {(() => {
      document.body.style.margin = '0'
      document.body.style.height = '100vh'
    })()}
    <Manager isShown={false}>
      {({ state, setState }) => (
        <Box>
          <CornerDialog
            title="Welcome to This New Feature"
            isShown={state.isShown}
            onCloseComplete={() => setState({ isShown: false })}
          >
            The Corner Dialog component is used for new feature announcements
            and feedback requests from the user.
          </CornerDialog>
          <Button onClick={() => setState({ isShown: true })}>
            Show “Learn More” Corner Dialog
          </Button>
        </Box>
      )}
    </Manager>
    <Manager isShown={false}>
      {({ state, setState }) => (
        <Box marginTop={24}>
          <CornerDialog
            title="We’d Love to Hear from You!"
            isShown={state.isShown}
            confirmLabel="Get in Touch"
            onCloseComplete={() => setState({ isShown: false })}
          >
            Help shape Segment’s data governance product roadmap. If you’re
            willing to provide feedback, let’s chat.
          </CornerDialog>
          <Button onClick={() => setState({ isShown: true })}>
            Show “Get in Touch” Corner Dialog
          </Button>
        </Box>
      )}
    </Manager>
    <Manager isShown={false}>
      {({ state, setState }) => (
        <Box marginTop={24}>
          <CornerDialog
            title="GDPR Data Processing Agreement Available"
            isShown={state.isShown}
            width={492}
            confirmLabel="View Agreement"
            onCloseComplete={() => setState({ isShown: false })}
          >
            Segment now offers a Data Processing Agreement and EU Model
            Contract Clauses as a means of meeting the adequacy and security
            requirements of the GDPR.
          </CornerDialog>
          <Button onClick={() => setState({ isShown: true })}>
            Show “GDPR” Corner Dialog
          </Button>
        </Box>
      )}
    </Manager>
  </Box>
))
