import { use$SchemaStore } from '../store'

export const select$Item = ($id) => (state) =>
    state.$data[state.$idToIndex[$id]]?.$item

export const use$ItemSelector = ($id) => use$SchemaStore(select$Item($id))
