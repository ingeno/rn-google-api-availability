'use strict';

var ReactNative = require('react-native')
var GoogleAPIAvailability = ReactNative.NativeModules.ReactNativeGooglePlayServices;

class RNGoogleAPIAvailability {
	constructor() {

	}

	checkGooglePlayServices(result) {
		return GoogleAPIAvailability.checkGooglePlayServices(result);
	}

	promptGooglePlayUpdate(allowUse) {
		return GoogleAPIAvailability.promptGooglePlayUpdate(allowUse);
	}

	openGooglePlayUpdate() {
		return GoogleAPIAvailability.openGooglePlayUpdate();
	}
}

module.exports = new RNGoogleAPIAvailability();
