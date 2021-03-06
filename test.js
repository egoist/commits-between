import path from 'path'
import {execSync} from 'child_process'
import test from 'ava'
import fn from './'

test('main', async t => {
  execSync('rm -rf temp')
  execSync(`
    mkdir temp &&
    cd temp &&
    git init &&
    git config user.email "you@example.com"&&
	  git config user.name "Your Name"&&
    touch a.js &&
    git add -A &&
    git commit -m "wow\n\nhello world" &&
    git tag -a v0.0.0 -m "Version 0.0.0" &&
    touch b.js &&
    git add -A &&
    git commit -m "yeah\n\nhello world" &&
    git tag -a v0.0.1 -m "Version 0.0.1"
  `.trim())
  const opts = {
    from: 'v0.0.0',
    cwd: path.join(__dirname, 'temp')
  }
  const [ret] = await fn(opts)
  t.is(ret.subject, 'yeah')
})
