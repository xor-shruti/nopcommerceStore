const os = require('os');

const sharedCucumberConfig = [
  '--require ./build/cucumber.conf.js',
  '--require ./build/step-definitions/*.js',
].join(' ');

const defaultCucumberConfig = sharedCucumberConfig
  + ' --format json:report/cucumber_report.json';
  + ' --format ../node_modules/cucumber-pretty';

// Get the number of CPU cores on the host system
const numOfCpuCores = os.cpus().length;

const parallelCucumberConfig = defaultCucumberConfig
  + ` --parallel ${numOfCpuCores}`;

module.exports = {
    default: defaultCucumberConfig,
    parallel: parallelCucumberConfig
};
