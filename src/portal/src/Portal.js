import { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { createPortal } from 'react-dom'
import { useIsomorphicLayoutEffect } from '../../hooks'

// Based on https://github.com/mantinedev/mantine/blob/master/src/mantine-core/src/Portal/Portal.tsx
const Portal = props => {
  const { children } = props

  const [mounted, setMounted] = useState(false)
  const ref = useRef()

  useIsomorphicLayoutEffect(() => {
    setMounted(true)

    ref.current = document.createElement('div')
    ref.current.setAttribute('evergreen-portal-container', '')

    document.body.appendChild(ref.current)

    return () => {
      document.body.removeChild(ref.current)
    }
  }, [])

  if (!mounted) {
    return null
  }

  return createPortal(children, ref.current)
}

Portal.propTypes = {
  children: PropTypes.node.isRequired
}

export default Portal
