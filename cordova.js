var cordova_events = require('./src/events');

module.exports = {
    help:     require('./src/help'),
    docs:     require('./src/docs'),
    create:   require('./src/create'),
    platform: require('./src/platform'),
    build:    require('./src/build'),
    emulate:  require('./src/emulate'),
    plugin:   require('./src/plugin'),
    preview:  require('./src/preview'),
    on:       function() {
        cordova_events.on.apply(cordova_events, arguments);
    },
    emit:     function() {
        cordova_events.emit.apply(cordova_events, arguments);
    }
};
