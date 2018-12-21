'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('Martijn Dorsman /'),
  handle: chalk.cyan('bitandbang'),
  work: chalk.white('Full Stack Developer at Flaire'),
  codepen: chalk.cyan('https://codepen.io/martijnd'),
  github: chalk.cyan('https://github.com/martijnd'),
  linkedin: chalk.cyan('https://linkedin.com/in/martijn-dorsman'),
  web: chalk.cyan('https://martijndorsman.nl'),
  npx: chalk.white('npx martijnd'),
  labelWork: chalk.white.bold('      Work:'),
  labelCodepen: chalk.white.bold('   Codepen:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  labelWeb: chalk.white.bold('       Web:'),
  labelCard: chalk.white.bold('      Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const codepening = `${data.labelCodepen}  ${data.codepen}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + newline + newline + working + newline + codepening + newline + githubing + newline + linkedining + newline + webing + newline + newline + carding

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
