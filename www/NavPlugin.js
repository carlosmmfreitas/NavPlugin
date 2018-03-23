// Empty constructor
function NavPlugin() {}

// The function that passes work along to native shells
// Message is a string, duration may be 'long' or 'short'
NavPlugin.prototype.show = function(message, duration, successCallback, errorCallback) {
  var options = {};
  options.message = message;
  options.duration = duration;
  cordova.exec(successCallback, errorCallback, 'NavPlugin', 'show', [options]);
}

// Installation constructor that binds NavPlugin to window
NavPlugin.install = function() {
  if (!window.plugins) {
    window.plugins = {};
  }
  window.plugins.navPlugin = new NavPlugin();
  return window.plugins.navPlugin;
};
cordova.addConstructor(NavPlugin.install);