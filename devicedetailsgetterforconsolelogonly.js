var os = [
    { name: 'Windows Phone', value: 'Windows Phone', version: 'OS' },
    { name: 'Windows', value: 'Win', version: 'NT' },
    { name: 'iPhone', value: 'iPhone', version: 'OS' },
    { name: 'iPad', value: 'iPad', version: 'OS' },
    { name: 'Kindle', value: 'Silk', version: 'Silk' },
    { name: 'Android', value: 'Android', version: 'Android' },
    { name: 'PlayBook', value: 'PlayBook', version: 'OS' },
    { name: 'BlackBerry', value: 'BlackBerry', version: '/' },
    { name: 'Macintosh', value: 'Mac', version: 'OS X' },
    { name: 'Linux', value: 'Linux', version: 'rv' },
    { name: 'Palm', value: 'Palm', version: 'PalmOS' }
];

var browser = [
    { name: 'Chrome', value: 'Chrome', version: 'Chrome' },
    { name: 'Firefox', value: 'Firefox', version: 'Firefox' },
    { name: 'Safari', value: 'Safari', version: 'Version' },
    { name: 'Internet Explorer', value: 'MSIE', version: 'MSIE' },
    { name: 'Opera', value: 'Opera', version: 'Opera' },
    { name: 'BlackBerry', value: 'CLDC', version: 'CLDC' },
    { name: 'Mozilla', value: 'Mozilla', version: 'Mozilla' }
];

var header = [
    navigator.platform,
    navigator.userAgent,
    navigator.appVersion,
    navigator.vendor,
    window.opera
];

function matchItem(string, data) {
    var i = 0,
        j = 0,
        html = '',
        regex,
        regexv,
        match,
        matches,
        version;

    for (i = 0; i < data.length; i += 1) {
        regex = new RegExp(data[i].value, 'i');
        match = regex.test(string);
        if (match) {
            regexv = new RegExp(data[i].version + '[- /:;]([\\d._]+)', 'i');
            matches = string.match(regexv);
            version = '';
            if (matches) {
                if (matches[1]) {
                    matches = matches[1];
                }
            }
            if (matches) {
                version = matches;
            } else {
                version = '0';
            }
            return {
                name: data[i].name,
                version: version
            };
        }
    }
    return { name: 'unknown', version: '0' };
}

var agent = header.join(' ');
var osInfo = matchItem(agent, os);
var browserInfo = matchItem(agent, browser);

console.log('Some of your "Details" from a "JS Code Script" and some of your "Details" are:');

console.log('Operating System:', osInfo.name);
console.log('Operating System Version:', osInfo.version);
console.log('Browser:', browserInfo.name, 'Version:', browserInfo.version);

console.log('End of some your "Details" from a "JS Code Script" and anyways hope this was a enough "Info" i guess lol!');

class DivideByZeroError extends Error {
  constructor() {
    super('Cannot divide by zero.');
    this.name = 'DivideByZeroError';
    this.code = 'DIVIDE_BY_ZERO';
  }
}

function divide(a, b) {
  if (b === 0) {
    throw new DivideByZeroError();
  }
  return a / b;
}

try {
  const result = divide(10, 0);
  console.log('Result:', result);
} catch (error) {
  if (error instanceof DivideByZeroError) {
    console.error('Error Code:', error.code);
    console.error('An error occurred:', error.message);
  } else {
    console.error('An unexpected error occurred:', error.message);
  }
}