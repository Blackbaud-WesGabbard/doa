import axios from 'axios'
import { createPage } from 'supporticon/api/pages'
import { setFlashMessage } from '../flash'

// Constants
const types = {
  fetch: 'app/sessionPage/FETCH',
  fetched: 'app/sessionPage/FETCH_SUCCESS',
  created: 'app/sessionPage/CREATE_SUCCESS',
  failure: 'app/sessionPage/FETCH_FAILURE',
  clear: 'app/session/CLEAR'
}

const deserializePage = (page) => ({
  id: page.id,
  active: page.active,
  raised: page.amount.cents,
  campaign: page.campaign,
  charity: page.charity,
  expired: page.expired,
  image: page.image.medium_image_url,
  name: page.name,
  target: page.target_cents,
  teamPageId: page.team_page_id,
  teamUid: page.team_uid,
  url: page.url,
  groups: page.page_groups
})

export const fetchUserPage = (ids) => (dispatch) => {
  console.log('enter fetch')
  dispatch({
    type: types.fetch
  })

  if (ids === '') {
    const json = {pages: []}
    dispatch(fetchUserPageSuccess(json))
    return Promise.resolve(json)
  }

  return axios.get(`${process.env.SUPPORTER_URL}/api/v2/pages`, { params: {
    type: 'individual',
    campaign_id: process.env.CAMPAIGN_UID,
    ids: ids
  }}).then((res) => res.data)
  .then((json) => {
    dispatch(fetchUserPageSuccess(json))
    return Promise.resolve(json)
  }).catch((error) => {
    dispatch(pageFailure(error))
    return Promise.reject(error)
  })
}

export const createUserPage = (data) => (dispatch) => {
  dispatch({
    type: types.fetch
  })

  return createPage({
    token: data.token,
    campaignId: process.env.CAMPAIGN_UID,
    name: data.name,
    birthday: data.birthday,
    fitnessGoal: 42.195,
    groupValues: {
      ability: data.ability,
      heart: data.heart
    },
    inviteToken: data.inviteToken
  }).then((json) => {
    dispatch(createUserPageSuccess(json))
    return Promise.resolve(json)
  }).catch((error) => {
    dispatch(pageFailure(error))
    dispatch(setFlashMessage('An error occured.', true))
    return Promise.reject(error)
  })
}

// State Handlers
const fetchUserPageSuccess = (data) => {
  return {
    type: types.fetched,
    payload: {
      data
    }
  }
}

const createUserPageSuccess = (data) => {
  return {
    type: types.created,
    payload: {
      data
    }
  }
}

const pageFailure = (error) => ({
  type: types.failure,
  payload: {
    error
  }
})

// Reducer
export default (state = {}, { type, payload }) => {
  switch (type) {
    case types.fetch:
      return {
        ...state,
        status: 'fetching'
      }
    case types.fetched:
      const firstPage = payload.data.pages[0]

      return firstPage ? {
        status: 'fetched',
        ...deserializePage(firstPage)
      } : {
        status: 'failed'
      }
    case types.created:
      return {
        status: 'fetched',
        ...deserializePage(payload.data.page)
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
