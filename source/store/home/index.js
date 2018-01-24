import {
  createDocumentAction,
  createDocumentReducer
} from 'prismic-utils'

// Constants
const c = {
  NAMESPACE: 'app/home'

}

// Action
export const fetchHome = () => (
  createDocumentAction(c.NAMESPACE, {
    repository: process.env.PRISMIC_REPO,
    type: 'home'
  })
)

// Reducer
export default createDocumentReducer(c.NAMESPACE, {
  initialState: {
    status: 'fetching',
    data: {
      heading: [],
      content: [],
      banner: [],
      people: []
    }
  }
})
