import React, { memo, forwardRef } from 'react'
import { IconComponent } from '../../types'
import Icon from '../src/Icon'

const svgPaths16 = [
  'M3 1a1 1 0 01.894.553c.102.202.393.607.779.957.419.381.72.49.827.49.108 0 .408-.109.827-.49.386-.35.677-.755.779-.957a1 1 0 011.788 0c.102.202.393.607.779.957.419.381.72.49.827.49.108 0 .408-.109.827-.49.386-.35.677-.755.779-.957a1 1 0 011.788 0c.173.344.38.75.637 1.072.277.347.437.375.469.375a1 1 0 110 2c-.968 0-1.642-.64-2.03-1.125a4.755 4.755 0 01-.076-.097 6.093 6.093 0 01-.221.212C12.175 4.442 11.393 5 10.5 5c-.892 0-1.675-.558-2.173-1.01A6.243 6.243 0 018 3.67c-.105.11-.214.217-.327.32C7.175 4.442 6.393 5 5.5 5c-.892 0-1.675-.558-2.173-1.01a6.119 6.119 0 01-.221-.212l-.075.097C2.64 4.36 1.968 5 1 5a1 1 0 010-2c.032 0 .191-.028.47-.375.256-.321.463-.728.636-1.072A1 1 0 013 1zm0 5a1 1 0 01.894.553c.102.202.393.607.779.957.419.381.72.49.827.49.108 0 .408-.109.827-.49.386-.35.677-.755.779-.957a1 1 0 011.788 0c.102.202.393.607.779.957.419.381.72.49.827.49.108 0 .408-.109.827-.49.386-.35.677-.755.779-.957a1 1 0 011.788 0c.173.344.38.75.637 1.072.277.347.437.375.469.375a1 1 0 110 2c-.968 0-1.642-.639-2.03-1.125a4.726 4.726 0 01-.076-.097 6.093 6.093 0 01-.221.212c-.498.452-1.28 1.01-2.173 1.01-.892 0-1.675-.558-2.173-1.01A6.243 6.243 0 018 8.67c-.105.11-.214.217-.327.32C7.175 9.442 6.393 10 5.5 10c-.892 0-1.675-.558-2.173-1.01a6.119 6.119 0 01-.221-.212l-.075.097C2.64 9.36 1.968 10 1 10a1 1 0 010-2c.032 0 .191-.028.47-.375.256-.321.463-.728.636-1.072A1 1 0 013 6zm.894 5.553a1 1 0 00-1.788 0c-.173.344-.38.75-.637 1.072-.278.347-.437.375-.469.375a1 1 0 100 2c.968 0 1.642-.639 2.03-1.125a4.9 4.9 0 00.076-.097c.072.073.146.143.221.212.498.452 1.28 1.01 2.173 1.01.892 0 1.675-.558 2.173-1.01.113-.103.222-.21.327-.32.105.11.214.217.327.32.498.452 1.28 1.01 2.173 1.01.892 0 1.675-.558 2.173-1.01.075-.069.149-.14.221-.212a4.9 4.9 0 00.075.097C13.36 14.36 14.032 15 15 15a1 1 0 100-2c-.032 0-.191-.028-.47-.375-.256-.321-.463-.728-.636-1.072a1 1 0 00-1.788 0c-.102.202-.393.607-.779.957-.419.381-.72.49-.827.49-.108 0-.408-.109-.827-.49-.386-.35-.677-.755-.779-.957a1 1 0 00-1.788 0c-.102.202-.393.607-.779.957-.419.381-.72.49-.827.49-.108 0-.408-.109-.827-.49-.386-.35-.677-.755-.779-.957z',
]
const svgPaths20 = [
  'M4.948 2.682a1 1 0 00-1.897.001l-.005.016-.027.074a6.05 6.05 0 01-.6 1.172C1.958 4.635 1.468 5 .999 5a1 1 0 000 2c1.457 0 2.442-1.027 3-1.825C4.558 5.973 5.543 7 7 7s2.442-1.027 3-1.825C10.558 5.973 11.543 7 13 7s2.442-1.027 3-1.825C16.558 5.973 17.544 7 19 7a1 1 0 100-2c-.47 0-.958-.365-1.418-1.055a6.048 6.048 0 01-.628-1.246l-.006-.016a1 1 0 00-1.896 0l-.006.016a5.868 5.868 0 01-.147.364c-.11.246-.272.568-.481.882C13.958 4.635 13.469 5 13 5c-.47 0-.958-.365-1.418-1.055a6.048 6.048 0 01-.628-1.246l-.006-.016a1 1 0 00-1.897 0l-.005.016-.027.074a6.05 6.05 0 01-.6 1.172C7.958 4.635 7.468 5 6.999 5c-.47 0-.958-.365-1.418-1.055A6.05 6.05 0 014.954 2.7l-.006-.016v-.001zm0 6a1 1 0 00-1.897.001l-.005.016-.027.074a6.05 6.05 0 01-.6 1.172c-.46.69-.95 1.055-1.419 1.055a1 1 0 100 2c1.457 0 2.442-1.027 3-1.825C4.558 11.973 5.543 13 7 13s2.442-1.027 3-1.825c.558.798 1.543 1.825 3 1.825s2.442-1.027 3-1.825c.558.798 1.544 1.825 3 1.825a1 1 0 100-2c-.47 0-.958-.365-1.418-1.055a6.048 6.048 0 01-.628-1.246l-.006-.016a1 1 0 00-1.896 0l-.006.016a5.868 5.868 0 01-.147.364c-.11.246-.272.568-.481.882-.46.69-.949 1.055-1.418 1.055-.47 0-.958-.365-1.418-1.055a6.048 6.048 0 01-.628-1.246l-.006-.016a1 1 0 00-1.897 0l-.005.016-.027.074a6.05 6.05 0 01-.6 1.172c-.46.69-.95 1.055-1.419 1.055-.47 0-.958-.365-1.418-1.055A6.05 6.05 0 014.954 8.7l-.006-.016zm-1.896-6zm1.896 12l.006.017.027.074a6.053 6.053 0 00.6 1.172c.46.69.95 1.055 1.419 1.055.47 0 .958-.365 1.418-1.055a6.053 6.053 0 00.628-1.246l.005-.016a1 1 0 011.897 0l.006.016.027.074a6.051 6.051 0 00.6 1.172c.46.69.95 1.055 1.419 1.055.47 0 .958-.365 1.418-1.055a6.051 6.051 0 00.628-1.246l.006-.016a1 1 0 011.896 0l.006.016.027.074a6.051 6.051 0 00.6 1.172c.46.69.95 1.055 1.419 1.055a1 1 0 110 2c-1.456 0-2.442-1.027-3-1.825-.558.798-1.543 1.825-3 1.825s-2.442-1.027-3-1.825C9.442 17.973 8.457 19 7 19s-2.442-1.027-3-1.825C3.442 17.973 2.457 19 1 19a1 1 0 110-2c.47 0 .958-.365 1.418-1.055a6.053 6.053 0 00.628-1.246l.005-.016a1 1 0 011.897-.001z',
]

export const WavesIcon: IconComponent = memo(
  forwardRef(function WavesIcon(props, ref) {
    return <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} ref={ref} name="waves" {...props} />
  })
)
