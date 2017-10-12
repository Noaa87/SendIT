# GreenLight - SendIT.gl

-------
[![Build Status](https://travis-ci.org/Noaa87/SendIT.svg?branch=master)](https://travis-ci.org/Noaa87/SendIT)

Fundamentals are:
- [TypeScript](https://www.typescriptlang.org/docs/tutorial.html) - as project language
- [ProtractorJS](http://www.protractortest.org) - as browser control framework
- [JasmineJS](https://jasmine.github.io/2.5/introduction) - as test runner (extended by [jasminewd](https://github.com/angular/jasminewd))
- [NPM](https://docs.npmjs.com/getting-started/what-is-npm) - as package manager and runner

Basically this is standard set of technologies that is proposed by Protractor JS team.


#### Running
First, do: 

`npm install`

Installation has `postinstall` hook, that triggers `webdriver-manager update` so you should have fresh chromedriver and selenium server downloaded and prepared.

Then compile your TypeScript code to JavaScript:

`npm run tsc`

Then, start tests:

`npm test`

By default - direct connect to local chrome driver is used. 


