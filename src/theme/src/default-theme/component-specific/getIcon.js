/**
 * Override to return an icon component that can be rendered via React
 * The component returned will receive the same props as DefaultIcon
 * @param {object} icon - the icon requested
 * @param {object} theme - the theme object
 * @return {function} Component to render, which will receive all props an Icon would
 */
const getIcon = (/* icon, theme */) => null

export default getIcon
