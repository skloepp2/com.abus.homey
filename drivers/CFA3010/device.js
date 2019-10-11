'use strict';

const ZwaveLockDevice = require('homey-meshdriver').ZwaveLockDevice;

class CFA3010 extends ZwaveLockDevice {

	onMeshInit() {
		this.log('CFA3010 has been inited');
		// print the node's info to the console
		this.printNode();
		// enable debugging
		this.enableDebug();
		this.registerCapability('locked', 'DOOR_LOCK');
		this.registerCapability('locked', 'NOTIFICATION');
		this.registerCapability('measure_battery', 'BATTERY');
	}

}

module.exports = CFA3010;
