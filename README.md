## URI Hero
> Read and manipulate URI strings

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

## API

## `getParameter(url, parameterKey)`

| Name | Type | Description |
|------|------|-------------|
| url | `String` | The url to parse |
| parameterKey| `String` | The parameter key you want to retrieve the value for |

```javascript
var UriHero = require("uri-hero");

url = "https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&es_th=1&ie=UTF-8#q=nodejs"
UriHero.getParameter(url, "q") // => "nodejs"
```

## License
MIT © Joe Gesualdo
