'use strict';

const Homey = require('homey');

class AbusApp extends Homey.App {

  /**
   * onInit is called when the app is initialized.
   */
  async onInit() {
    this.log('AbusApp has been initialized');
  }

}

module.exports = AbusApp;
