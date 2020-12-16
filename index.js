const reporter = require('cucumber-html-reporter');


var options = {
    theme: 'bootstrap',
    jsonFile: './report/cucumber_report.json',
    output: './report/cucumber_report.html',
    reportSuiteAsScenarios: true,
    launchReport: true,
};

reporter.generate(options);