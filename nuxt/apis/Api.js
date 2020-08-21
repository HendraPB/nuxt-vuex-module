let client

export function api (newclient) {
  client = newclient
}

// Request helpers
const reqMethods = [
  'request', 'delete', 'get', 'head', 'options', // url, config
  'post', 'put', 'patch' // url, data, config
]

let Api = {}

reqMethods.forEach((method) => {
  Api[method] = function () {
    if (!client) throw new Error('apiClient not installed')
    return client[method].apply(null, arguments)
  }
})

export default Api