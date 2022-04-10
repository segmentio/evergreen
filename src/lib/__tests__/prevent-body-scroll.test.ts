import preventBodyScroll from '../prevent-body-scroll'

describe('preventBodyScroll', () => {
  it('Should change body overflow to hidden on true and reset overflow on false', async () => {
    expect(document.body.style.overflow).toEqual('')
    preventBodyScroll(true)
    expect(document.body.style.overflow).toEqual('hidden')
    preventBodyScroll(false)
    expect(document.body.style.overflow).toEqual('')
  })
  it('Should be able to handle changes from other scripts changing body overflow', async () => {
    // Repeat logic of first test
    expect(document.body.style.overflow).toEqual('')
    preventBodyScroll(true)
    expect(document.body.style.overflow).toEqual('hidden')
    preventBodyScroll(false)
    expect(document.body.style.overflow).toEqual('')

    // Outside source changes overflow to hidden
    document.body.style.overflow = 'hidden'
    // Restores 'hidden' as expected
    expect(document.body.style.overflow).toEqual('hidden')
    preventBodyScroll(true)
    expect(document.body.style.overflow).toEqual('hidden')
    preventBodyScroll(false)
    expect(document.body.style.overflow).toEqual('hidden')
    // 'hidden' should no longer be apart of the history
    preventBodyScroll(false)
    expect(document.body.style.overflow).toEqual('')

    // Outside source changes overflow to ''
    document.body.style.overflow = ''
    // Repeat steps from first test to ensure it is not affected
    expect(document.body.style.overflow).toEqual('')
    preventBodyScroll(true)
    expect(document.body.style.overflow).toEqual('hidden')
    preventBodyScroll(false)
    expect(document.body.style.overflow).toEqual('')
  })
  it('Should be able to restore multiple layers of overflow values', async () => {
    document.body.style.overflow = ''
    // First overlay
    preventBodyScroll(true)
    expect(document.body.style.overflow).toEqual('hidden')
    // Second overlay
    preventBodyScroll(true)
    expect(document.body.style.overflow).toEqual('hidden')
    // Third overlay
    preventBodyScroll(true)
    expect(document.body.style.overflow).toEqual('hidden')

    // Remove third overlay
    preventBodyScroll(false)
    expect(document.body.style.overflow).toEqual('hidden')
    // Remove second overlay
    preventBodyScroll(false)
    expect(document.body.style.overflow).toEqual('hidden')
    // Remove first overlay
    preventBodyScroll(false)
    expect(document.body.style.overflow).toEqual('')
  })
})
