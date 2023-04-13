import produce from 'immer'
import { Set$Item } from './types'
import { $item, set$Item } from './config'
import { select$Datum } from 'go.vote/.pattern/@$data/selectors'
import { $DatumStore } from 'go.vote/.pattern/store'

export type At$Item = {
    [set$Item]: (incoming: Set$Item) => void
}

export function $itemSetter(set) {
    return {
        [set$Item]: ({ $keyListComma, $item: $itemValue }: Set$Item): void =>
            set(
                produce<$DatumStore>((state) => {
                    select$Datum($keyObject)(state)[$item] = $itemValue
                }),
            ),
    }
}

export const Set$ItemOnChange = {
    [set$Item]: {} as Set$Item,
}
