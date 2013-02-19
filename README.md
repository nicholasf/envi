Because you need configuration vars that are enviromentally specific. You also want them to use nconf goodness (https://github.com/flatiron/nconf).

```
conf/env.js
conf/env.json
```

So you can do this in your code:

```
env = require('./config/env');
console.log(env.hello); //outputs I'm dev by default, otherwise reads process.env.NODE_ENV
```

Where env.json looks like:

```
{
  "development":{
    "hello": "I'm dev"
  }
  , "test": {
    "hello": "I'm test"
  }
  , "staging": {
    "hello": "I'm staging"
  }
  , "production": {
    "hello": "I'm production"
  }
}
```

Or, leverage nconf coolness:

```
node myprogram.js --hello "I've been overridden"
```