# Avatar

`evergreen-avatar` is a package exporting a `Avatar` React component.
Avatars display a circle containing a user profile image.
If the image is not available, the initials will be shown.

## Design Example

![avatar default usage](https://user-images.githubusercontent.com/564463/32304849-4d083f3e-bf2f-11e7-85b7-af7b65d73ea2.png)
![avatar sizes](https://user-images.githubusercontent.com/564463/32304850-4d1f7df2-bf2f-11e7-9b8d-76626ed1fa67.png)
![avatar manual usage](https://user-images.githubusercontent.com/564463/32304851-4d3cc308-bf2f-11e7-9814-559ff202ec80.png)

## Prop types and default props

```js
static propTypes = {
  ...Image.propTypes,
  size: PropTypes.number,
  name: PropTypes.string,
  // hash value defaults to name
  hashValue: PropTypes.string,
  hash: PropTypes.func,
  isSolid: PropTypes.bool,
  appearance: PropTypes.oneOf(keysFillAppearances),
  getInitials: PropTypes.func,
}

static defaultProps = {
  size: 24,
  hash: globalHash,
  isSolid: false,
  getInitials: globalGetInitials,
}
```
