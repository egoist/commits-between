# commits-between [![NPM version](https://img.shields.io/npm/v/commits-between.svg)](https://npmjs.com/package/commits-between) [![NPM downloads](https://img.shields.io/npm/dm/commits-between.svg)](https://npmjs.com/package/commits-between) [![Build Status](https://img.shields.io/circleci/project/egoist/commits-between/master.svg)](https://circleci.com/gh/egoist/commits-between)

> Get commit messages between git tags or commit hashes.

## Install

```bash
$ npm install --save commits-between
```

## Usage

```js
const commitsBetween = require('commits-between')

commitsBetween({from: 'v0.0.1'})
// commits from tag v0.0.1 to HEAD

commitsBetween({from: 'v0.0.1', to: 'v0.0.2'})
// commits from tag v0.0.1 to v0.0.2

//=> return a Promise which resolves:
[ { commit:
     { long: 'd3c1d4277bea361e2aec19068f909262cf51f678',
       short: 'd3c1d42' },
    tree:
     { long: 'd95361141f51314048917373cc34de25cefd8789',
       short: 'd953611' },
    author:
     { name: 'Your Name',
       email: 'you@example.com',
       date: Fri May 20 2016 16:14:49 GMT+0800 (CST) },
    committer:
     { name: 'Your Name',
       email: 'you@example.com',
       date: Fri May 20 2016 16:14:49 GMT+0800 (CST) },
    subject: 'yeah',
    body: 'hello world\n' } ]

// since we use `git log --pretty=format:%s%b to get commits`
// so commit hash works too
commitsBetween({from: '73e7dab2b07e68b3', to: 'ee36f4bcc7bcaf'})

// or all commits
commitsBetween()
```

## API

### commitsBetween(options)

#### options

Type: `object`

##### from

Type: `string`  
Required: `true`

From this tag or commit hash.

##### to

Type: `string`  
Default: `''`

Before this tag or commit hash, default is `HEAD`.

##### cwd

Type: `string`  
Default: `process.cwd()`

Choose a working directory to resolve commits

## License

MIT © [EGOIST](https://github.com/egoist)
