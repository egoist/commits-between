'use strict'
const toArray = require('stream-to-array')
const parser = require('git-log-parser')

function between(options) {
  options = options || {}
  const from = options.from || ''
  const to = options.to || ''
  const cwd = options.cwd

  let argv
  if (!from && !argv) {
    argv = ''
  } else {
    argv = `${from}..${to}`
  }

  return toArray(parser.parse({_: argv}, {cwd}))
}

module.exports = between
