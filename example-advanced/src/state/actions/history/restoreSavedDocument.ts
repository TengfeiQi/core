import { Utils } from '@tldraw/core'
import type { Action } from 'state/constants'
import { mutables } from '../../mutables'

export const restoreSavedDocument: Action = (data) => {
  const snapshot = mutables.history.restore()
  Object.assign(data, Utils.deepMerge(data, snapshot))
}
