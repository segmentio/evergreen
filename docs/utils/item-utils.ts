import { Item } from '../constants/IA'

export const findById = (items: Item[], id: string): Item | undefined => items.find((item) => item.id === id)

export const sortItems = (items: Item[]): Item[] => items.sort((left, right) => (left.name > right.name ? 1 : -1))
