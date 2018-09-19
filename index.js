#!/usr/bin/env node
const path = require('path');
const fs = require('fs');
const program = require('commander');
const gmodule = require('../packages/commands/module');

let config = {};
// 配置文件如果存在则读取
if (fs.existsSync(path.resolve('meet.config.js'))) {
    config = require(path.resolve('meet.config.js'));
}

program
    .command('new [module]')
    .description('generator a new project')
    .action(function (module) {
        gmodule(config, module)
    });

program.parse(process.argv);