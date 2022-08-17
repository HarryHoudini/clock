const { exec } = require('child_process')
const { rmSync, cpSync } = require('fs')
const { join } = require('path')

rmSync(join(__dirname, 'dist'), {
  recursive: true,
  force: true,
})

cpSync(join(__dirname, 'public'), join(__dirname, 'dist'), {
  recursive: true,
})

exec('webpack --config ./config/webpack.prod.js')

const output = exec('webpack --config ./config/webpack.prod.js')

output.stdout.on('data', (data) => {
  console.log(data)
})

output.stderr.on('data', (data) => {
  console.log(data)
})

output.on('exit', (code) => {
  process.exit(code)
})
