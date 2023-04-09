import produce from 'immer'
import type { $SchemaStore } from '../store'
import { set$Item, Set$Item } from './itemTypes'

export type Set$ItemStore = {
    [set$Item]: (incoming: Set$Item) => void
}

export function $itemSetter(set) {
    return {
        [set$Item]: ({ $id, $item }) =>
            set(
                produce<$SchemaStore>((state) => {
                    state.$data[state.$idToIndex[$id]].$item = $item
                }),
            ),
    }
}

export const select$Item = ($id) => (state) =>
    state.$data[state.$idToIndex[$id]]?.$item

export const Set$ItemSubscriber = {
    [set$Item]: {} as Set$Item,
}
