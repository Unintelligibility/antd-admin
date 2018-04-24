const Mock = require('mockjs')
const config = require('../utils/config')

const queryArray = (array, key, keyAlias = 'key') => {
  if (!(array instanceof Array)) {
    return null
  }
  let data

  for (const item of array) {
    if (item[keyAlias] === key) {
      data = item
      break
    }
  }

  if (data) {
    return data
  }
  return null
}

const NOTFOUND = {
  message: 'Not Found',
  documentation_url: 'http://localhost:8000/request',
}


let postId = 0
const posts = Mock.mock({
  'data|200': [
    {
      id () {
        postId += 1
        return postId + 10000
      },
      'status|1-4': 1,
      title: '@title',
      author: '@last',
      categories: '@word',
      machine: '@word',
      human: '@word',
      expert: '@word',
      date: '@dateTime',
      finalResult: '@word',
      image () {
        return Mock.Random.image('100x100', Mock.Random.color(), '#757575', 'png', this.author.substr(0, 1))
      },
    },
  ],
}).data

module.exports = {
  queryArray,
  NOTFOUND,
  Mock,
  posts,
  config,
}
