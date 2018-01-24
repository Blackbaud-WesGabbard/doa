// Constants
const types = {
  update: 'FLASH_UPDATE',
  clear: 'FLASH_CLEAR'
}

// Actions
export const setFlashMessage = (message, danger) => (dispatch) => {
  dispatch({
    type: types.update,
    payload: { message, danger }
  })

  setTimeout(() => {
    dispatch({
      type: types.clear
    })
  }, 8500)
}

export const clearFlashMessage = () => (dispatch) => {
  dispatch({
    type: types.clear
  })
}

// State Handlers
const handlers = {
  [types.update]: (state, payload) => ({ ...payload }),
  [types.clear]: () => ({})
}

// Reducer
export default (state = {}, { type, payload }) => {
  const handler = handlers[type]
  return handler ? handler(state, payload) : state
}
