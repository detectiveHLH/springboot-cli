const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const inquirer = require('inquirer');
const childProcess = require('child_process');

const messages = require('./message');

/**
 * 生成新的项目
 * Author: detectiveHLH
 */
const generateProject = (config, name) => {
    // 当前的目录下新建用户自定的文件夹
    if (name) {
        let targetPath = `${process.cwd()}/${name}`;
        if (fs.existsSync(targetPath)) {
            // 目录已经存在
            console.log(chalk.red(messages.DIR_ALREADY_EXIST));
        } else {
            // 执行创建操作
            fs.mkdirSync(targetPath);
            const command = `git clone git@github.com:detectiveHLH/springbootdemo.git ./${name} && rm -rf ./${name}/.git`;
            childProcess.exec(command, (error, stdout, stderr) => {
                if (error !== null) {
                    console.log('exec error: ' + error);
                }
            });
            console.log(chalk.greenBright('success '), chalk.whiteBright(messages.SUCCESS));
        }
    } else {
        console.log(chalk.red(messages.LACK_OF_NAME));
    }
};

module.exports = generateProject;