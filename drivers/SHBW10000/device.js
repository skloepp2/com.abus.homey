'use strict';

const ZwaveDevice = require('homey-meshdriver').ZwaveDevice;

class MultiSensorDevice extends ZwaveDevice {

	async onMeshInit() {

		// print the node's info to the console
		this.printNode();

		// enable debugging
		this.enableDebug();

		this.registerCapability('alarm_motion', 'NOTIFICATION');
	    this.registerCapability('measure_temperature', 'SENSOR_MULTILEVEL');
	    this.registerCapability('measure_humidity', 'SENSOR_MULTILEVEL');
		this.registerCapability('measure_luminance', 'SENSOR_MULTILEVEL');
		this.registerCapability('measure_battery', 'BATTERY');
	}
}

module.exports = MultiSensorDevice;