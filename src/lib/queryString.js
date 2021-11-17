const keyValueToString = ([key, value]) => {
  if (typeof value === 'object' && !Array.isArray(value)) {
    throw new Error('Please check');
  }
  return `${key}=${value}`;
};

const queryString = obj => Object.entries(obj).map(keyValueToString).join('&');

const parse = string => Object.fromEntries(string.split('&').map(item => item.split('=')))





module.exports = {
  queryString,
  parse
};
