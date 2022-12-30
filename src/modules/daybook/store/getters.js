export const getEntriesByTerm = (state) => (term) => {
  if (term) {
    return state.entries.filter((entry) =>
      entry.text.toLowerCase().includes(term.toLowerCase())
    )
  }
  return state.entries
}

export const getEntryById = (state) => (id) => {
  const entryFound = state.entries.find((entry) => entry.id === id)
  if (!entryFound) return
  return { ...entryFound } // delete reference
}
