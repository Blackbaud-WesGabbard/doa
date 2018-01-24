import { signIn, signUp, resetPassword } from 'supporticon/api/authentication'
import { fetchCurrentUser, updateCurrentUser } from 'supporticon/api/me'
import merge from 'lodash/merge'
import { setFlashMessage } from '../flash'

// Constants
const types = {
  fetch: 'app/sessionUser/FETCH',
  success: 'app/sessionUser/FETCH_SUCCESS',
  failure: 'app/sessionUser/FETCH_FAILURE',
  update: 'app/sessionUser/UPDATE_SUCCESS',
  clear: 'app/session/CLEAR'
}

// Actions
export const signupUser = (data) => (dispatch) => {
  dispatch({ type: types.fetch })

  return signUp({
    clientId: process.env.API_CLIENT_ID,
    name: data.name,
    email: data.email,
    password: data.password,
    phone: data.phone
  }).then((json) => {
    return fetchCurrentUser({
      token: json.token
    }).then((result) => {
      const user = merge(result, { token: json.token })
      dispatch(sessionSuccess(user))
      return Promise.resolve(user)
    }).catch((error) => {
      dispatch(sessionFailure(error))
      return Promise.reject(error)
    })
  }).catch((error) => {
    dispatch(sessionFailure(error))
    return Promise.reject(error)
  })
}

export const loginUser = (data) => (dispatch) => {
  dispatch({ type: types.fetch })

  return signIn({
    clientId: process.env.API_CLIENT_ID,
    email: data.email,
    password: data.password
  }).then((json) => {
    return fetchCurrentUser({
      token: json.token
    }).then((result) => {
      const user = merge(result, { token: json.token })
      dispatch(sessionSuccess(user))
      return Promise.resolve(user)
    }).catch((error) => {
      dispatch(sessionFailure(error))
      return Promise.reject(error)
    })
  }).catch((error) => {
    dispatch(sessionFailure(error))
    return Promise.reject(error)
  })
}

export const fetchUser = ({ token }) => (dispatch) => {
  dispatch({ type: types.fetch })

  return fetchCurrentUser({
    token: token
  }).then((result) => {
    const user = merge(result, { token: token })
    dispatch(sessionSuccess(user))
    return Promise.resolve(user)
  }).catch((error) => {
    dispatch(sessionFailure(error))
    return Promise.reject(error)
  })
}

export const updateUser = (data) => (dispatch) => {
  dispatch({ type: types.fetch })

  return updateCurrentUser({
    token: data.token,
    address: data.address,
    birthday: data.birthday,
    phone: data.phone
  }).then((response) => {
    return fetchCurrentUser({
      token: data.token
    }).then((result) => {
      const user = merge(result, { token: data.token })
      dispatch(sessionSuccess(user))
      return Promise.resolve(user)
    }).catch((error) => {
      dispatch(sessionFailure(error))
      return Promise.reject(error)
    })
  }).catch((error) => {
    dispatch(sessionFailure(error))
    return Promise.reject(error)
  })
}

export const resetUserPassword = (data) => (dispatch) => {
  dispatch({ type: types.fetch })

  return resetPassword({
    clientId: process.env.API_CLIENT_ID,
    email: data.email,
    reference: 'mymarathon'
  }).then((json) => {
    dispatch(sessionClear())
    dispatch(setFlashMessage('Password reset email sent!'))
    return Promise.resolve(json)
  }).catch((error) => {
    dispatch(sessionFailure(error))
    return Promise.reject(error)
  })
}

export const clearSession = () => (dispatch) => {
  dispatch(sessionClear())
  dispatch(setFlashMessage('Signed out successfully'))
  return Promise.resolve({})
}

// State Handlers
const sessionFailure = (error) => ({
  type: types.failure,
  payload: {
    error
  }
})

const sessionSuccess = (data) => ({
  type: types.success,
  payload: {
    data
  }
})

const sessionClear = () => ({
  type: types.clear,
  payload: {}
})

// Reducer
export default (state = {}, { type, payload }) => {
  switch (type) {
    case types.fetch:
      return {
        ...state,
        status: 'fetching'
      }
    case types.success:
      return {
        status: 'fetched',
        ...payload.data
      }
    case types.failure:
      return {
        status: 'failed'
      }
    case types.clear:
      return {
        status: 'empty'
      }
    default:
      return state
  }
}
