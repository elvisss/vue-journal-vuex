import journalApi from '@/api/journalApi'

const promise = () => {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve()
    }, 1000)
  })
}

export const loadEntries = async ({ commit }) => {
  /* commit('setLoading', true) */
  await promise()
  const { data } = await journalApi.get('/entries.json')
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
  await journalApi.put(path, payload)
  commit('updateEntry', { ...updateEntry })
}

export const createEntry = async ({ _commit }) => {}
