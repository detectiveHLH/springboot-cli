const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const inquirer = require('inquirer');

/**
 * 生成新的项目
 */
const generateProject = (config, name) => {
    console.log(name);
    console.log(process.cwd());
    let targetPath = `${process.cwd()}/${name}`;
    fs.mkdirSync(targetPath);
};

module.exports = generateProject;