import preventBodyScroll from '../prevent-body-scroll'

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('preventBodyScroll', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('Should change body overflow to hidden on true and reset overflow on false', async () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(document.body.style.overflow).toEqual('')
    preventBodyScroll(true)
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(document.body.style.overflow).toEqual('hidden')
    preventBodyScroll(false)
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(document.body.style.overflow).toEqual('')
  })
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('Should be able to handle changes from other scripts changing body overflow', async () => {
    // Repeat logic of first test
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(document.body.style.overflow).toEqual('')
    preventBodyScroll(true)
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(document.body.style.overflow).toEqual('hidden')
    preventBodyScroll(false)
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(document.body.style.overflow).toEqual('')

    // Outside source changes overflow to hidden
    document.body.style.overflow = 'hidden'
    // Restores 'hidden' as expected
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(document.body.style.overflow).toEqual('hidden')
    preventBodyScroll(true)
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(document.body.style.overflow).toEqual('hidden')
    preventBodyScroll(false)
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(document.body.style.overflow).toEqual('hidden')
    // 'hidden' should no longer be apart of the history
    preventBodyScroll(false)
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(document.body.style.overflow).toEqual('')

    // Outside source changes overflow to ''
    document.body.style.overflow = ''
    // Repeat steps from first test to ensure it is not affected
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(document.body.style.overflow).toEqual('')
    preventBodyScroll(true)
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(document.body.style.overflow).toEqual('hidden')
    preventBodyScroll(false)
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(document.body.style.overflow).toEqual('')
  })
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('Should be able to restore multiple layers of overflow values', async () => {
    document.body.style.overflow = ''
    // First overlay
    preventBodyScroll(true)
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(document.body.style.overflow).toEqual('hidden')
    // Second overlay
    preventBodyScroll(true)
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(document.body.style.overflow).toEqual('hidden')
    // Third overlay
    preventBodyScroll(true)
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(document.body.style.overflow).toEqual('hidden')

    // Remove third overlay
    preventBodyScroll(false)
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(document.body.style.overflow).toEqual('hidden')
    // Remove second overlay
    preventBodyScroll(false)
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(document.body.style.overflow).toEqual('hidden')
    // Remove first overlay
    preventBodyScroll(false)
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(document.body.style.overflow).toEqual('')
  })
})
