const {envSetup} = require('env.json')
const {envGet} = require('env.json');

envSetup({ path: './config/env.json', encoding: 'utf8' })

exports.envGet = envGet;