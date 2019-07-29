'use strict';

const Homey = require('homey');

class AbusApp extends Homey.App {
	
	onInit() {
		this.log('Abus is running...');
	}
	
}

module.exports = AbusApp;