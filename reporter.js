const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: 'cypress/cucumber-json',
	reportPath: './cucumber-report/',
	metadata:{
        browser: {
            name: 'chrome',
            version: '119'
        },
        device: 'Local test machine',
        platform: {
            name: 'Windows',
            version: '11'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Cypress Automation'},
            {label: 'Release', value: '1.0'}
            
        ]
    }
});