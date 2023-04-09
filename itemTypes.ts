import type { $Id } from 'go.vote/$Schema/@$id/itemTypes'

export const set$Item = 'set$Item'
export type $Item = {
    $item: number
}
export type Set$Item = $Id & $Item
