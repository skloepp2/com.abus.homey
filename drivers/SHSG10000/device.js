'use strict';

const { ZwaveDevice } = require('homey-zwavedriver');

class SHSG10000Device extends ZwaveDevice {
  async onNodeInit() {	
	
    this.log('SHSG10000Device has been initialized');
    
    // print the node's info to the console
    this.printNode();

    this.registerCapability('onoff', 'BASIC');
		this.registerCapability('measure_battery', 'BATTERY');
  }

  /**
   * onAdded is called when the user adds the device, called just after pairing.
   */
  async onAdded() {
    this.log('SHSG10000Device has been added');
  }

  /**
   * onSettings is called when the user updates the device's settings.
   * @param {object} event the onSettings event data
   * @param {object} event.oldSettings The old settings object
   * @param {object} event.newSettings The new settings object
   * @param {string[]} event.changedKeys An array of keys changed since the previous version
   * @returns {Promise<string|void>} return a custom message that will be displayed
   */
  async onSettings({ oldSettings, newSettings, changedKeys }) {
    this.log('SHSG10000Device settings where changed');
  }

  /**
   * onRenamed is called when the user updates the device's name.
   * This method can be used this to synchronise the name to the device.
   * @param {string} name The new name
   */
  async onRenamed(name) {
    this.log('SHSG10000Device was renamed');
  }

  /**
   * onDeleted is called when the user deleted the device.
   */
  async onDeleted() {
    this.log('SHSG10000Device has been deleted');
  }

}

module.exports = SHSG10000Device;
