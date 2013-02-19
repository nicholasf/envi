var env, 
  , nconf = require('nconf');

nconf.argv().env().file({
  file: 'config/env.json'
});

var overridingConfig = nconf.get('defaults');

if (overridingConfig != null) {
  nconf.file(overridingConfig);
  console.log('Found a config file to override anything in config/default.json');
}

env = process.env.NODE_ENV || 'development';
envConf = nconf.get(env);

for (k in envConf) {
  v = envConf[k];
  exports[k] = v;
}

exports.config = env;
