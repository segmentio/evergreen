import React from 'react'
import { Pane } from 'evergreen-ui'

interface Props {
  width?: number
  height?: number
}

const ComingSoonImage = ({ width = 500, height = 313 }: Props) => {
  return (
    <Pane
      is="svg"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M496.41 188.31L224.545 31.3543C219.706 28.5694 211.899 28.5694 207.106 31.3543L198.751 36.1935L13.9927 142.885C9.15347 145.67 9.15347 150.19 13.9927 152.974L285.812 309.885C290.651 312.669 298.458 312.669 303.251 309.885L488.01 203.193L496.365 198.354C501.204 195.569 501.204 191.095 496.41 188.31Z" fill="url(#paint0_linear)"/>
      <path d="M3.62943 136.949C-1.20981 139.734 -1.20981 144.254 3.62943 147.039L275.494 303.994C280.334 306.779 288.14 306.779 292.934 303.994L477.692 197.303L188.342 30.2578L3.62943 136.949Z" fill="#F6F6FB"/>
      <path d="M486.138 182.421L214.273 25.4656C209.434 22.6807 201.627 22.6807 196.834 25.4656L188.479 30.3048L477.829 197.35L486.184 192.511C490.932 189.68 490.932 185.161 486.138 182.421Z" fill="#9DB5FF"/>
      <path d="M203.774 30.0777C205.874 28.8908 209.252 28.8908 211.307 30.0777C213.407 31.2647 213.407 33.2278 211.307 34.4604C209.207 35.6474 205.828 35.6474 203.774 34.4604C201.674 33.2278 201.674 31.2647 203.774 30.0777Z" fill="white"/>
      <path d="M217.287 37.8844C219.387 36.6974 222.765 36.6974 224.82 37.8844C226.874 39.0714 226.92 41.0345 224.82 42.2671C222.72 43.4997 219.341 43.4541 217.287 42.2671C215.232 41.0801 215.232 39.117 217.287 37.8844Z" fill="white"/>
      <path d="M230.846 45.7359C232.946 44.549 236.324 44.549 238.379 45.7359C240.479 46.9229 240.479 48.886 238.379 50.1186C236.279 51.3513 232.9 51.3056 230.846 50.1186C228.792 48.9317 228.746 46.9229 230.846 45.7359Z" fill="white"/>
      <path d="M489.744 187.307C489.79 189.178 488.603 191.05 486.138 192.465L477.783 197.305V203.194L486.138 198.355C488.557 196.985 489.744 195.159 489.744 193.333V187.307Z" fill="#CED3F8"/>
      <path d="M292.979 303.995C288.14 306.78 280.333 306.78 275.539 303.995L3.67449 147.039C1.25487 145.67 0.0678711 143.844 0.0678711 142.018V148.044C0.113524 149.824 1.30052 151.605 3.67449 152.974L275.539 309.93C280.379 312.715 288.185 312.715 292.979 309.93L477.737 203.193V197.304L292.979 303.995Z" fill="#CED3F8"/>
      <path d="M277.674 208.696L268.532 203.4C267.306 202.675 267.473 201.448 268.867 200.612L277.284 195.761C278.733 194.925 280.907 194.869 282.134 195.538L291.276 200.835C292.502 201.56 292.335 202.786 290.941 203.623L282.524 208.473C281.075 209.31 278.901 209.365 277.674 208.696Z" fill="#D6E0FF"/>
      <path d="M299.062 211.864C299.763 211.458 300.627 211.457 301.329 211.861L344.816 236.94C346.338 237.817 346.335 240.014 344.811 240.887V240.887C344.108 241.29 343.243 241.289 342.541 240.883L299.066 215.783C297.559 214.913 297.556 212.738 299.062 211.864V211.864Z" fill="#D6E0FF"/>
      <path d="M258.665 219.624L249.522 214.327C248.296 213.602 248.463 212.376 249.857 211.539L258.274 206.689C259.724 205.852 261.898 205.797 263.124 206.466L272.266 211.763C273.493 212.487 273.325 213.714 271.932 214.55L263.514 219.401C262.065 220.237 259.947 220.349 258.665 219.624Z" fill="#D6E0FF"/>
      <path d="M280.087 222.811C280.801 222.393 281.684 222.391 282.4 222.805L306.635 236.824C308.156 237.704 308.152 239.901 306.628 240.775V240.775C305.924 241.178 305.058 241.177 304.355 240.772L280.1 226.788C278.571 225.907 278.564 223.703 280.087 222.811V222.811Z" fill="#D6E0FF"/>
      <path d="M239.712 230.609L230.57 225.312C229.343 224.587 229.511 223.36 230.904 222.524L239.322 217.673C240.771 216.837 242.945 216.781 244.172 217.45L253.314 222.747C254.54 223.472 254.373 224.698 252.979 225.535L244.562 230.385C243.112 231.222 240.938 231.333 239.712 230.609Z" fill="#A3E6CD"/>
      <path d="M261.1 233.775C261.8 233.368 262.665 233.367 263.367 233.772L295.929 252.55C297.45 253.427 297.447 255.623 295.924 256.497V256.497C295.22 256.9 294.355 256.898 293.653 256.493L261.104 237.694C259.597 236.823 259.594 234.648 261.1 233.775V233.775Z" fill="#D6E0FF"/>
      <path d="M111.251 112.146C109.168 110.946 105.779 110.946 103.697 112.146L78.9503 126.447C76.8675 127.647 76.8675 129.624 78.9503 130.825L106.803 146.926L139.104 128.283L111.251 112.146Z" fill="#D6E0FF"/>
      <path d="M200.776 163.8L139.139 128.209L106.838 146.852L168.475 182.444C170.558 183.644 173.947 183.644 176.029 182.444L200.776 168.143C202.858 166.978 202.858 165.001 200.776 163.8Z" fill="#F4F6FA"/>
      <path d="M78.951 130.789C77.9273 130.188 77.3978 129.412 77.3978 128.635V133.19C77.3625 134.002 77.8567 134.849 78.951 135.449L106.804 151.55V146.889L78.951 130.789Z" fill="#9DB5FF"/>
      <path d="M200.776 168.182L176.029 182.482C173.947 183.683 170.558 183.683 168.475 182.482L106.838 146.891V151.551L168.475 187.143C170.558 188.343 173.947 188.343 176.029 187.143L200.776 172.843C201.87 172.207 202.364 171.395 202.329 170.548V166.099C202.258 166.875 201.764 167.617 200.776 168.182Z" fill="#9DB5FF"/>
      <path d="M130.138 138.309L179.384 166.733L182.773 164.756L133.562 136.332L130.138 138.309Z" fill="#9DB5FF"/>
      <path d="M121.277 143.393L153.755 162.178L157.179 160.2L124.702 141.451L121.277 143.393Z" fill="#9DB5FF"/>
      <path d="M174.796 62.4945C174.796 58.6959 172.103 54.0186 168.816 52.1193L134.154 31.6943C130.866 29.795 128.174 31.3541 128.174 35.1527V73.1951C128.174 76.9937 130.866 81.671 134.154 83.5703L168.816 103.995C172.103 105.895 174.796 104.335 174.796 100.537V62.4945Z" fill="#D6E0FF"/>
      <path d="M133.143 29.4474C134.106 28.819 135.446 28.8609 136.954 29.7407L172.263 50.1426C175.153 51.8183 177.54 55.9238 177.54 59.2334V99.0318C177.54 100.791 176.87 101.964 175.865 102.509L171.886 104.813C172.765 104.227 173.31 103.095 173.31 101.503V61.7051C173.31 58.3536 170.922 54.2481 168.032 52.6143L132.724 32.2124C131.3 31.3745 130.001 31.2907 129.038 31.8353L133.143 29.4474Z" fill="#9DB5FF"/>
      <path d="M135.033 60.3976V57.2794C135.572 57.5629 135.997 57.7046 136.28 57.7046C136.564 57.7046 136.79 57.5912 137.017 57.3361C137.216 57.081 137.357 56.7125 137.442 56.1739C137.499 55.777 137.527 55.0683 137.527 54.0478C137.527 52.3469 137.584 51.213 137.726 50.6461C137.867 50.0508 138.094 49.6539 138.463 49.4555C138.803 49.2571 139.341 49.2287 140.021 49.3988C140.475 49.5122 141.212 49.8524 142.204 50.4193L142.799 50.7595V53.8777C141.949 53.3958 141.438 53.1407 141.183 53.1123C140.957 53.084 140.758 53.1407 140.645 53.3108C140.532 53.4808 140.475 53.821 140.475 54.3596C140.475 54.8982 140.446 55.9187 140.361 57.4211C140.333 58.2716 140.22 58.8952 140.078 59.3488C139.908 59.8023 139.71 60.1142 139.483 60.3126C139.228 60.511 138.859 60.6528 138.349 60.7378C138.803 61.2764 139.171 61.8434 139.426 62.4103C139.71 62.9773 139.936 63.5726 140.078 64.2246C140.22 64.8765 140.333 65.6986 140.361 66.6624C140.418 68.1365 140.446 69.072 140.446 69.4688C140.446 70.0358 140.503 70.4894 140.617 70.7728C140.73 71.0563 140.928 71.3398 141.155 71.5949C141.41 71.85 141.92 72.2186 142.742 72.7005V75.8187L142.147 75.4785C141.127 74.8832 140.361 74.3446 139.795 73.8344C139.256 73.3241 138.803 72.7572 138.434 72.1052C138.066 71.4532 137.811 70.7728 137.669 70.0641C137.527 69.3555 137.471 68.3066 137.471 66.9459C137.471 65.3585 137.414 64.2812 137.301 63.7143C137.13 62.9206 136.875 62.2686 136.535 61.7867C136.252 61.3331 135.713 60.8512 135.033 60.3976Z" fill="#3366FF"/>
      <path d="M161.079 75.4484C160.54 75.165 160.115 75.0232 159.832 75.0232C159.548 75.0232 159.321 75.1366 159.123 75.3917C158.925 75.6469 158.783 76.0154 158.698 76.5256C158.641 76.8942 158.613 77.6028 158.613 78.6517C158.613 80.3526 158.556 81.4864 158.414 82.0817C158.273 82.677 158.046 83.0739 157.678 83.2723C157.309 83.4708 156.799 83.4991 156.119 83.329C155.665 83.2157 154.928 82.8755 153.937 82.3085L153.341 81.9684V78.8501C154.135 79.3037 154.673 79.5588 154.928 79.5872C155.184 79.6155 155.354 79.5588 155.467 79.3887C155.58 79.247 155.637 78.8785 155.637 78.3682C155.637 77.8296 155.665 76.8375 155.722 75.3917C155.75 74.513 155.864 73.8326 156.034 73.4074C156.204 72.9539 156.431 72.6137 156.686 72.4152C156.969 72.1885 157.309 72.0751 157.734 72.0184C157.167 71.2813 156.771 70.6294 156.516 70.0907C156.175 69.3254 155.92 68.4466 155.779 67.4828C155.694 66.8308 155.637 65.4418 155.609 63.3724C155.609 62.7204 155.552 62.2385 155.467 61.9834C155.382 61.6999 155.212 61.4448 154.957 61.1896C154.702 60.9345 154.163 60.566 153.313 60.0557V56.9375L153.908 57.2777C154.928 57.873 155.694 58.4116 156.261 58.8935C156.799 59.3754 157.252 59.9707 157.621 60.6227C157.989 61.2747 158.244 61.955 158.386 62.6637C158.528 63.3724 158.584 64.4213 158.584 65.8103C158.584 67.3977 158.641 68.4749 158.755 69.0135C158.925 69.8073 159.18 70.4593 159.52 70.9412C159.86 71.4231 160.37 71.905 161.079 72.3586V75.4484Z" fill="#3366FF"/>
      <path d="M143.109 63.2021C143.109 62.38 143.676 62.0398 144.385 62.465C145.093 62.8619 145.66 63.8824 145.66 64.7045C145.66 65.5266 145.093 65.8667 144.385 65.4415C143.676 65.0163 143.109 64.0241 143.109 63.2021Z" fill="#3366FF"/>
      <path d="M147.588 65.7841C147.588 64.962 148.155 64.6218 148.863 65.0471C149.572 65.4439 150.139 66.4644 150.139 67.2865C150.139 68.1086 149.572 68.4488 148.863 68.0235C148.183 67.6267 147.588 66.6062 147.588 65.7841Z" fill="#3366FF"/>
      <path d="M152.095 68.3915C152.095 67.5694 152.662 67.2293 153.37 67.6545C154.079 68.0513 154.645 69.0718 154.645 69.8939C154.645 70.716 154.079 71.0562 153.37 70.631C152.662 70.2058 152.095 69.2136 152.095 68.3915Z" fill="#3366FF"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M233.612 118.065C232.536 119.145 232.218 120.691 232.49 122.191C233.592 128.26 236.641 144.509 238.759 150.569C240.02 154.178 243.445 158.259 252.84 158.259C262.235 158.259 266.899 154.686 267.928 150.569C269.908 142.649 272.759 119.067 272.759 119.067C272.759 119.067 264.774 111.365 251.229 111.365C241.698 111.365 236.096 115.572 233.612 118.065Z" fill="#D6E0FF"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M252.906 131.233C263.87 131.233 272.758 126.992 272.758 121.761C272.758 116.53 263.87 112.289 252.906 112.289C241.942 112.289 233.053 116.53 233.053 121.761C233.053 126.992 241.942 131.233 252.906 131.233Z" fill="#1F3D99"/>
      <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="233" y="112" width="40" height="20">
      <path fillRule="evenodd" clipRule="evenodd" d="M252.906 131.233C263.87 131.233 272.758 126.992 272.758 121.761C272.758 116.53 263.87 112.289 252.906 112.289C241.942 112.289 233.053 116.53 233.053 121.761C233.053 126.992 241.942 131.233 252.906 131.233Z" fill="white"/>
      </mask>
      <g mask="url(#mask0)">
      <path fillRule="evenodd" clipRule="evenodd" d="M253.573 141.662C264.537 141.662 273.426 136.361 273.426 129.822C273.426 123.283 264.537 117.982 253.573 117.982C242.609 117.982 233.721 123.283 233.721 129.822C233.721 136.361 242.609 141.662 253.573 141.662Z" fill="#9DB5FF"/>
      </g>
      <path d="M231.794 64.9531C231.794 66.3657 238.846 74.2224 245.677 93.0368C250.701 106.872 250.701 123.973 250.701 123.973" stroke="url(#paint1_linear)" strokeWidth="2.04714"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M240.428 80.3744C240.428 80.3744 229.203 75.4354 220.563 60.5483C211.924 45.6611 226.055 42.3015 234.937 54.7212C243.82 67.1409 240.428 80.3744 240.428 80.3744Z" fill="url(#paint2_linear)"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M245.673 92.3999C245.673 92.3999 241.834 80.7577 247.123 64.3796C252.412 48.0016 264.365 56.2488 261.074 71.1563C257.782 86.0638 245.673 92.3999 245.673 92.3999Z" fill="url(#paint3_linear)"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M250.409 113.749C250.409 113.749 245.678 99.0697 252.567 78.2973C259.456 57.525 274.507 67.8175 270.166 86.7073C265.824 105.597 250.409 113.749 250.409 113.749Z" fill="url(#paint4_linear)"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M247.096 98.4701C247.096 98.4701 234.904 99.8024 219.974 91.227C205.044 82.6515 215.601 72.6807 229.507 78.9978C243.413 85.3149 247.096 98.4701 247.096 98.4701Z" fill="url(#paint5_linear)"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M251.592 118.964C251.592 118.964 236.164 119.194 218.301 106.536C200.439 93.879 214.688 82.5035 231.494 92.1755C248.3 101.848 251.592 118.964 251.592 118.964Z" fill="url(#paint6_linear)"/>
      <path d="M276.816 22.5039C276.816 24.9159 269.878 38.3317 263.157 70.4582C258.215 94.0822 258.215 123.283 258.215 123.283" stroke="url(#paint7_linear)" strokeWidth="2.04714"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M272.552 33.267C272.552 33.267 283.778 28.328 292.417 13.4408C301.057 -1.44629 286.926 -4.80588 278.043 7.61379C269.161 20.0335 272.552 33.267 272.552 33.267Z" fill="url(#paint8_linear)"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M268.594 46.564C268.594 46.564 272.433 34.9217 267.144 18.5437C261.855 2.16566 249.902 10.4129 253.193 25.3203C256.485 40.2278 268.594 46.564 268.594 46.564Z" fill="url(#paint9_linear)"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M263.859 67.9146C263.859 67.9146 268.59 53.2357 261.701 32.4634C254.812 11.691 239.761 21.9835 244.103 40.8733C248.444 59.7631 263.859 67.9146 263.859 67.9146Z" fill="url(#paint10_linear)"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M260.421 85.4501C260.421 85.4501 261.726 70.0839 250.339 51.3928C238.951 32.7016 226.602 46.114 235.084 63.5436C243.566 80.9732 260.421 85.4501 260.421 85.4501Z" fill="url(#paint11_linear)"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M266.407 54.4408C266.407 54.4408 278.6 55.7731 293.53 47.1977C308.46 38.6222 297.903 28.6514 283.997 34.9685C270.091 41.2856 266.407 54.4408 266.407 54.4408Z" fill="url(#paint12_linear)"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M261.911 74.9348C261.911 74.9348 277.339 75.1642 295.201 62.5069C313.064 49.8497 298.815 38.4742 282.009 48.1462C265.203 57.8183 261.911 74.9348 261.911 74.9348Z" fill="url(#paint13_linear)"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M258.974 94.7786C258.974 94.7786 274.403 95.008 292.265 82.3507C310.127 69.6934 295.878 58.3179 279.072 67.99C262.267 77.6621 258.974 94.7786 258.974 94.7786Z" fill="url(#paint14_linear)"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M258.463 106.7C258.463 106.7 259.768 91.3339 248.381 72.6428C236.993 53.9516 224.644 67.364 233.126 84.7936C241.608 102.223 258.463 106.7 258.463 106.7Z" fill="url(#paint15_linear)"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M257.016 116.029C257.016 116.029 272.444 116.258 290.306 103.601C308.169 90.9434 293.92 79.5679 277.114 89.24C260.308 98.9121 257.016 116.029 257.016 116.029Z" fill="url(#paint16_linear)"/>
      <path opacity="0.339216" fillRule="evenodd" clipRule="evenodd" d="M318.612 138.975C315.312 137.046 311.165 139.426 311.165 143.248V172.227C311.165 177.514 313.976 182.403 318.546 185.062L356.929 207.396C360.229 209.316 364.369 206.935 364.369 203.117V174.233C364.369 168.955 361.568 164.074 357.011 161.412L318.612 138.975Z" fill="#B8AFEE"/>
      <mask id="mask1" mask-type="alpha" maskUnits="userSpaceOnUse" x="311" y="138" width="54" height="71">
      <path fillRule="evenodd" clipRule="evenodd" d="M318.612 138.975C315.312 137.046 311.165 139.426 311.165 143.248V172.227C311.165 177.514 313.976 182.403 318.546 185.062L356.929 207.396C360.229 209.316 364.369 206.935 364.369 203.117V174.233C364.369 168.955 361.568 164.074 357.011 161.412L318.612 138.975Z" fill="white"/>
      </mask>
      <g mask="url(#mask1)">
      <path fillRule="evenodd" clipRule="evenodd" d="M314.516 173.921L320.469 167.659C322.327 165.704 325.554 166.139 326.829 168.517L330.608 175.566L341.779 167.832C343.878 166.379 346.784 167.262 347.719 169.637L359.995 200.83L314.516 173.921Z" fill="#897AE3"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M332.76 164.27C334.187 163.511 334.449 161.215 333.346 159.141C332.242 157.066 330.191 155.999 328.764 156.758C327.337 157.516 327.075 159.812 328.178 161.887C329.282 163.961 331.333 165.028 332.76 164.27Z" fill="#897AE3"/>
      </g>
      <defs>
      <linearGradient id="paint0_linear" x1="10.2977" y1="170.603" x2="500.001" y2="170.603" gradientUnits="userSpaceOnUse">
      <stop offset="0.0108061" stopColor="#C4CAE9"/>
      <stop offset="0.2848" stopColor="#D0D4ED"/>
      <stop offset="0.774" stopColor="#EFF0F9"/>
      <stop offset="1" stopColor="white"/>
      </linearGradient>
      <linearGradient id="paint1_linear" x1="250.701" y1="64.9531" x2="250.701" y2="123.973" gradientUnits="userSpaceOnUse">
      <stop stopColor="#A3E6CD"/>
      <stop offset="1" stopColor="#317159"/>
      </linearGradient>
      <linearGradient id="paint2_linear" x1="217.869" y1="47.1074" x2="217.869" y2="80.3744" gradientUnits="userSpaceOnUse">
      <stop stopColor="#A3E6CD"/>
      <stop offset="1" stopColor="#52BD94"/>
      </linearGradient>
      <linearGradient id="paint3_linear" x1="255.314" y1="53.3828" x2="230.588" y2="75.6466" gradientUnits="userSpaceOnUse">
      <stop stopColor="#A3E6CD"/>
      <stop offset="1" stopColor="#52BD94"/>
      </linearGradient>
      <linearGradient id="paint4_linear" x1="263.072" y1="64.2969" x2="231.488" y2="92.7353" gradientUnits="userSpaceOnUse">
      <stop stopColor="#A3E6CD"/>
      <stop offset="1" stopColor="#52BD94"/>
      </linearGradient>
      <linearGradient id="paint5_linear" x1="210.918" y1="80.9336" x2="227.556" y2="109.752" gradientUnits="userSpaceOnUse">
      <stop stopColor="#A3E6CD"/>
      <stop offset="1" stopColor="#52BD94"/>
      </linearGradient>
      <linearGradient id="paint6_linear" x1="207.981" y1="92.4043" x2="225.943" y2="130.925" gradientUnits="userSpaceOnUse">
      <stop stopColor="#A3E6CD"/>
      <stop offset="1" stopColor="#52BD94"/>
      </linearGradient>
      <linearGradient id="paint7_linear" x1="258.215" y1="22.5039" x2="258.215" y2="123.283" gradientUnits="userSpaceOnUse">
      <stop stopColor="#A3E6CD"/>
      <stop offset="1" stopColor="#317159"/>
      </linearGradient>
      <linearGradient id="paint8_linear" x1="295.111" y1="0" x2="295.111" y2="33.267" gradientUnits="userSpaceOnUse">
      <stop stopColor="#A3E6CD"/>
      <stop offset="1" stopColor="#52BD94"/>
      </linearGradient>
      <linearGradient id="paint9_linear" x1="258.953" y1="7.54688" x2="283.679" y2="29.8106" gradientUnits="userSpaceOnUse">
      <stop stopColor="#A3E6CD"/>
      <stop offset="1" stopColor="#52BD94"/>
      </linearGradient>
      <linearGradient id="paint10_linear" x1="251.196" y1="18.4629" x2="282.78" y2="46.9013" gradientUnits="userSpaceOnUse">
      <stop stopColor="#A3E6CD"/>
      <stop offset="1" stopColor="#52BD94"/>
      </linearGradient>
      <linearGradient id="paint11_linear" x1="236.952" y1="40.1133" x2="274.129" y2="60.7209" gradientUnits="userSpaceOnUse">
      <stop stopColor="#A3E6CD"/>
      <stop offset="1" stopColor="#52BD94"/>
      </linearGradient>
      <linearGradient id="paint12_linear" x1="302.585" y1="36.9043" x2="285.947" y2="65.7223" gradientUnits="userSpaceOnUse">
      <stop stopColor="#A3E6CD"/>
      <stop offset="1" stopColor="#52BD94"/>
      </linearGradient>
      <linearGradient id="paint13_linear" x1="305.522" y1="48.375" x2="287.56" y2="86.8952" gradientUnits="userSpaceOnUse">
      <stop stopColor="#A3E6CD"/>
      <stop offset="1" stopColor="#52BD94"/>
      </linearGradient>
      <linearGradient id="paint14_linear" x1="302.585" y1="68.2188" x2="284.623" y2="106.739" gradientUnits="userSpaceOnUse">
      <stop stopColor="#A3E6CD"/>
      <stop offset="1" stopColor="#52BD94"/>
      </linearGradient>
      <linearGradient id="paint15_linear" x1="234.994" y1="61.3633" x2="272.171" y2="81.9709" gradientUnits="userSpaceOnUse">
      <stop stopColor="#A3E6CD"/>
      <stop offset="1" stopColor="#52BD94"/>
      </linearGradient>
      <linearGradient id="paint16_linear" x1="300.627" y1="89.4688" x2="282.665" y2="127.989" gradientUnits="userSpaceOnUse">
      <stop stopColor="#A3E6CD"/>
      <stop offset="1" stopColor="#52BD94"/>
      </linearGradient>
      </defs>
    </Pane>
  )
}

export default ComingSoonImage
