import journalApi from '@/api/journalApi'
import { promise } from '@/helpers/promise'
/* import cloudinaryApi from '@/api/cloudinaryApi' */

export const loadEntries = async ({ commit }) => {
  /* commit('setLoading', true) */
  await promise()
  const { data } = await journalApi.get('/entries.json')
  if (!data) {
    commit('setEntries', [])
    return
  }

  const entries = []
  for (let id of Object.keys(data)) {
    entries.push({
      id,
      ...data[id]
    })
  }
  commit('setEntries', entries)
}

export const updateEntry = async ({ commit }, updateEntry) => {
  const { id, ...payload } = updateEntry
  const path = `/entries/${id}.json`
  await promise()
  await journalApi.put(path, payload)
  commit('updateEntry', { ...updateEntry })
}

export const createEntry = async ({ commit }, newEntry) => {
  // await promise()
  /* const { data: cloudinaryData } = await dispatch('uploadImage', uploadImage) */
  /* const payload = {
    ...newEntry,
    picture: cloudinaryData.secure_url
  } */
  const { data } = await journalApi.post('/entries.json', newEntry)
  const entryCreated = {
    ...newEntry,
    id: data.name
  }
  commit('addEntry', { ...entryCreated })
  return data.name
}

export const deleteEntry = async ({ commit }, entryId) => {
  await journalApi.delete(`/entries/${entryId}.json`)
  commit('removeEntry', entryId)
}

/* export const uploadImage = async ({ _commit }, file) => {
  const formData = new FormData()
  formData.append('upload_preset', import.meta.env.VITE_CLOUDINDARY_UPLOAD_PRESET)
  formData.append('file', file)
  const data = await cloudinaryApi.post(`${import.meta.env.VITE_CLOUDINDARY_CLOUD_NAME}/image/upload`, formData)
  return data
}
 */
