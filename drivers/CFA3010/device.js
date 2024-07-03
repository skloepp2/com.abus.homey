'use strict';

const { ZwaveDevice } = require('homey-zwavedriver');

class CFA3010Device extends ZwaveDevice {

  async onNodeInit() {	
      this.log('CFA3010Device has been initialized');
      
      // print the node's info to the console
      this.printNode();
    
      this.registerCapability('locked', 'DOOR_LOCK');
      this.registerCapability('locked', 'NOTIFICATION');
      this.registerCapability('measure_battery', 'BATTERY');
    }

  /**
   * onAdded is called when the user adds the device, called just after pairing.
   */
  async onAdded() {
    this.log('CFA3010Device has been added');
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
    this.log('CFA3010Device settings where changed');
  }

  /**
   * onRenamed is called when the user updates the device's name.
   * This method can be used this to synchronise the name to the device.
   * @param {string} name The new name
   */
  async onRenamed(name) {
    this.log('CFA3010Device was renamed');
  }

  /**
   * onDeleted is called when the user deleted the device.
   */
  async onDeleted() {
    this.log('CFA3010Device has been deleted');
  }

}

module.exports = CFA3010Device;
