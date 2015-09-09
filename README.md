## URI Hero
> Read and manipulate URI string

## Install
```
$ npm install --save uri-hero
```

## Usage
```javascript
var UriHero = require("uri-hero");

url = "https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&es_th=1&ie=UTF-8#q=nodejs"
UriHero.getParameter(url, "q") // => "nodejs"
```
