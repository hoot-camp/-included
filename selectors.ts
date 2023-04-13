import { createSelector } from 'reselect'
import { Keys } from 'go.vote/$DatumPath/@keys'
import { use$DatumStore } from 'go.vote/$DatumPath/store'
import { select$Datum } from 'go.vote/$DatumPath/@$data/selectors'
import { $item } from './config'
import { $Item } from './types'
import { $DatumStore } from 'go.vote/$DatumPath/store'

export type $ItemValue = $Item[typeof $item]

export const select$Item = ({
    $keyListComma,
}: $Keys): ((state: $DatumStore) => $ItemValue) =>
    createSelector(
        (state: $DatumStore) => select$Datum({ $keyListComma })(state),
        ($Datum) => $Datum[$item],
    )

export const use$ItemSelector = ({ $keyListComma }: Keys): $ItemValue =>
    use$DatumStore(select$Item({ $keyListComma }))
