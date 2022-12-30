export const setEntries = (state, entries) => {
  state.entries = [...state.entries, ...entries]
  state.isLoading = false
}

export const updateEntry = (state, updatedEntry) => {
  const currentEntryIndex = state.entries.findIndex(entry => entry.id === updatedEntry.id)
  state.entries[currentEntryIndex] = updatedEntry
}

export const addEntry = (_state) => {}

export const setLoading = (state, isLoading) => {
  state.isLoading = isLoading
}
