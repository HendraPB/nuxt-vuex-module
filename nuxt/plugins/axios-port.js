import { api } from '~/apis/Api'

export default ({ app, store }) => {
  api(app.$axios)
}