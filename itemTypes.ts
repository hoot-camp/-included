import type { Cand } from '../@cand/actionTypes'
import type { ConsultantId } from 'go.vote/Consultant/@consultantId/itemTypes'

export const setConsultantId = 'setConsultantId'
export type SetConsultantId = Cand & ConsultantId
