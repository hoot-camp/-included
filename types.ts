import type { Flat } from 'go.vote/@/types'
import type { Keys } from 'go.vote/.pattern/@keys'

export type $Item = {
    $item: number
}
export type Set$Item = Flat<Keys & $Item>
