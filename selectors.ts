import { createSelector } from 'reselect'
import { DataKey } from 'go.vote/.kit-schema/@dataKey'
import { use$DatumStore } from 'go.vote/.kit-schema/store'
import { select$Datum } from 'go.vote/.kit-schema/@$data/selectors'
import { $item } from './config'
import { $Item } from './types'
import { $DatumStore } from 'go.vote/.kit-schema/store'

export type $ItemValue = $Item[typeof $item]

export const select$Item = (
    dataKey: DataKey,
): ((state: $DatumStore) => $ItemValue) =>
    createSelector(
        (state: $DatumStore) => select$Datum(dataKey)(state),
        ($Datum) => $Datum[$item],
    )

export const use$ItemValue = (dataKey: DataKey): $ItemValue =>
    use$DatumStore(select$Item(dataKey))
