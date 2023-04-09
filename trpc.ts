import { procedure } from 'go.vote/@trpc/trpc'
import { emitter } from 'go.vote/@data/events/emitter'
import { set$ItemSchema } from './zod'
import type { Context } from 'go.vote/@trpc/createContext'
import { set$Item, Set$Item } from './itemTypes'
import { ResultSetHeader } from 'mysql2'
import { name as emitName } from '../settings'

export const set$ItemRoute = {
    [set$Item]: procedure.input(set$ItemSchema).mutation(resolveSet$Item),
}

export const set$ItemSql = /* sql */ `
    UPDATE $schema.$data
        SET $item = ?
    WHERE $id = ?;
`

export async function resolveSet$Item({
    ctx,
    input,
}: {
    ctx: Context
    input: Set$Item
}) {
    const { $id, $item } = input
    const result = (await ctx.query(set$ItemSql, [
        $item,
        $id,
    ])) as ResultSetHeader
    if (!result.changedRows) return null
    emitter.emit(emitName, {
        action: set$Item,
        $id,
        $item,
    })
    return null
}
