import { createSelector } from 'reselect'
import { Keys } from 'go.vote/.pattern/@keys'
import { use$DatumStore } from 'go.vote/.pattern/store'
import { select$Datum } from 'go.vote/.pattern/@$data/selectors'
import { $item } from './config'
import { $Item } from './types'
import { $DatumStore } from 'go.vote/.pattern/store'

export type $ItemValue = $Item[typeof $item]

export const select$Item = (
    $keyObject: $Key,
): ((state: $DatumStore) => $ItemValue) =>
    createSelector(
        (state: $DatumStore) => select$Datum($keyObject)(state),
        ($Datum) => $Datum[$item],
    )

export const use$ItemSelector = ($keyObject: Keys): $ItemValue =>
    use$DatumStore(select$Item($keyObject))
