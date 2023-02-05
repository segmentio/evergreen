import { Item } from '../constants/IA'

export const sortItems = (items: Item[]): Item[] => items.sort((left, right) => (left.name > right.name ? 1 : -1))
