'use strict'
const execa = require('execa')

function between(options) {
  options = options || {}
  const from = options.from
  if (!from) {
    return Promise.reject(new Error('Expected from'))
  }
  const to = options.to || ''
  const cwd = options.cwd
  return execa
    .shell(`git log --pretty=format:%s[%%===%%]%b ${from}..${to}`, {cwd})
    .then(result => result.stdout)
    .then(result => result.split('\n').map(message => message.split('[%===%]')))
}

module.exports = between
