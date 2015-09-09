var UriHero = {
  getParameter: getParameter
}
// http://stackoverflow.com/questions/979975/how-to-get-the-value-from-the-url-parameter
function getParameter(url, param, asArray) {
    return url.substring(1).split('&').reduce(function(p,c) {
        var parts = c.split('=', 2).map(function(param) { return decodeURIComponent(param); });
        if(parts.length == 0 || parts[0] != param) return (p instanceof Array) && !asArray ? null : p;
        return asArray ? p.concat(parts.concat(true)[1]) : parts.concat(true)[1];
    }, []);
}

module.exports = UriHero
