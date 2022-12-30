export const setEntries = (state, entries) => {
  state.entries = [...state.entries, ...entries]
  state.isLoading = false
}

export const updateEntry = (state, updatedEntry) => {
  const currentEntryIndex = state.entries.findIndex(
    (entry) => entry.id === updatedEntry.id
  )
  state.entries[currentEntryIndex] = updatedEntry
}

export const addEntry = (state, newEntry) => {
  state.entries = [newEntry, ...state.entries]
}

export const removeEntry = (state, entryId) => {
  /* const deleteEntryIndex = state.entries.findIndex(
    (entry) => entry.id === entryId
  )
  state.entries.splice(deleteEntryIndex, 1) */
  state.entries = state.entries.filter(entry => entry.id !== entryId)
}

export const setLoading = (state, isLoading) => {
  state.isLoading = isLoading
}
