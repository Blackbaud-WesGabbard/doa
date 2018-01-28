import {
  createDocumentAction,
  createDocumentReducer
} from 'prismic-utils'

// Constants
const c = {
  NAMESPACE: 'app/container'
}

// Action
export const fetchContainer = () => (
  createDocumentAction(c.NAMESPACE, {
    repository: process.env.PRISMIC_REPO,
    type: 'container'
  })
)

// Reducer
export default createDocumentReducer(c.NAMESPACE)
