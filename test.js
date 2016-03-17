import path from 'path'
import test from 'ava'
import execa from 'execa'
import fn from './'

test('main', async t => {
  await execa.shell('rm -rf temp')
  await execa.shell(`
    mkdir temp &&
    cd temp &&
    git init &&
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
  const [res] = await fn(opts)
  t.is(res[0], 'yeah')
  t.is(res[1], 'hello world')
})
